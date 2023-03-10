import Handlebars from 'handlebars';
import { v4 as makeUUID } from 'uuid';
import { EventBus } from './event-bus';
import { BaseStore, StoreEvents } from '../store/base';

export class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element: HTMLElement;

  _meta: { tagName: string; props: {} };

  _eventBus;

  _props;

  _children:
    | { [s: string]: { [key: string]: string } }
    | { [s: string]: () => void }
    | ArrayLike<{ [key: string]: string }>;

  _id;

  _update = false;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = 'div', propsAndChilds = {}) {
    const { children, props } = this.getChildren(propsAndChilds);
    this._element = this.element;
    this._id = makeUUID();

    this._meta = {
      tagName,
      props,
    };

    this._props = this.makePropsProxy({ ...props, id: this._id });
    this._eventBus = new EventBus();

    this._children = this.makePropsProxy(children);

    this._registerEvents();
    this._eventBus.emit(Component.EVENTS.INIT);
    BaseStore.eventBus.on(StoreEvents.Updated, (store) => {
      // if (!isEqual(state, newState)) {
      // console.log(store);
      this.setProps({ store });
      // }
    });
  }

  private _registerEvents() {
    this._eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.on(
      Component.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this._eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this._element = this._createDocumentElement(this._meta?.tagName);
    this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    if (this._props.setting?.withInternalID) {
      element.setAttribute('data-id', this._id);
    }
    return element;
  }

  private _render() {
    const block = this.compile();
    this.removeEvents();
    this._element!.innerHTML = '';
    this._element!.appendChild(block);
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr }: { [key: string]: string } = this._props;

    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        this._element!.setAttribute(key, value);
      });
    }
  }

  getChildren(propsAndChilds: any) {
    const children: { [key: string]: string } = {};
    const props: { [key: string]: string } = {};
    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Component) {
        children[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });

    return { children, props };
  }

  precompile() {
    const propsAndStubs: { [key: string]: string } = { ...this._props };
    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });
    return Handlebars.compile(this.render())(propsAndStubs);
  }

  compile() {
    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement;

    fragment.innerHTML = this.precompile();

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child!.element);
      }
    });

    return fragment.content;
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) =>
      child.dispatchComponentDidMount()
    );
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Component.EVENTS.FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidUpdate(oldProps: {}, newProps: {}) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: {}, newProps: {}) {
    if (JSON.stringify(oldProps) !== JSON.stringify(newProps)) {
      return true;
    }
    return false;
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    this._update = false;
    const oldValue = this._props;
    const { children, props } = this.getChildren(nextProps);
    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
    if (this._update) {
      this._eventBus.emit(Component.EVENTS.FLOW_CDU, oldValue, this._props);
      this._update = false;
    }
  };

  makePropsProxy(props: { [key: string]: (() => void) | string }) {
    return new Proxy(props, {
      get: (target: any, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value; // Reflect
      },
      set: (target: any, prop: string, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this._update = true;
        }
        return true; // Reflect
      },
    });
  }

  get element() {
    return this._element;
  }

  show() {
    this.element!.style.display = 'flex';
  }

  hide() {
    this.element!.style.display = 'none';
  }
}
