import { UserAPI } from '../api/user';
import { USER } from '../utils/fixtures';
import { User } from '../utils/types';
import { BaseStore } from './base';

export class UserStore extends BaseStore {
  user: User = USER;

  async getUser() {
    // this.user = await UserAPI.getUser();
    console.log(this.user);
  }
  async setUser() {
    this.set('user.first_name', 'Иван');
  }
  async registerUser(user: User) {
    try {
      const res = await UserAPI.createUser(user);
    } catch (e) {
      throw new Error(e);
    }
  }
}
