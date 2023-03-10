import Store from './Store';
import { UserStore } from './user';

export default new Store();
export { default as Connect } from './connect';
export * as Actions from './actions';
export const userStore = new UserStore();
