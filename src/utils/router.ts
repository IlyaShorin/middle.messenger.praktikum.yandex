import { Component } from './component';
import { render } from './renderDOM';

export class Route {
  _pathname;
  _blockClass;
  _block?: Component;
  _props;
  constructor(pathname: string, view: Component, props: { rootQuery: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._block) {
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      return;
    } else {
      render(this._props.rootQuery, this._block);
    }

    this._block?.show();
  }
}

export class Router {
  routes?: Route[];
  history;
  _currentRoute?: Route;
  _rootQuery: string = '#root';
  __instance?: any;
  /** JSDoc
   * @param {string} rootQuery
   *
   *
   * @returns {void}
   */

  constructor(rootQuery: string) {
    //@ts-ignore
    if (Router.__instance) {
      //@ts-ignore
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute;
    this._rootQuery = rootQuery;
    //@ts-ignore
    Router.__instance = this;
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes?.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((ev: any) => {
      this._onRoute(ev?.currentTarget?.location?.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }
  get currentRoute() {
    return this._currentRoute;
  }
  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route?.render();
  }

  go(pathname: string) {
    this.history?.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history?.back();
  }

  forward() {
    this.history?.forward();
  }

  getRoute(pathname: string) {
    return this.routes?.find((route) => route.match(pathname));
  }
}
export const router = new Router('#root');
