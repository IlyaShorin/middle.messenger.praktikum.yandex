import { UserStore } from './user';
import { BaseStore } from './base';

export class Store extends BaseStore {
  public user = new UserStore();
}

export default new Store();
