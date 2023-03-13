import { UserStore } from './_user';
import { BaseStore } from './_base';

export class Store extends BaseStore {
  public user = new UserStore();
}

export default new Store();
