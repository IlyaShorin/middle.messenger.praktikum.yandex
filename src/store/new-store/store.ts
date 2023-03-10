import { EventBus } from '../../utils/event-bus';
import { set } from '../../utils/set';

export default class Store extends EventBus {
  static EVENT_UPDATE = 'updated';
  static _instance: any;
  static STORE_NAME = 'myAppStore';

  _state = {};

  constructor() {
    if (Store._instance) return Store._instance;

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);

    this._state = savedState ? JSON.parse(savedState) ?? {} : {};

    Store._instance = this;

    this.on(Store.EVENT_UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  getState() {
    return this._state;
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }

  public set(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(Store.EVENT_UPDATE);
    return this;
  }
}