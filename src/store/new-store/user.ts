import { UserAPI } from '../../api/user';
import {
  CreateUserRequest,
  EditUserRequest,
  LoginUserRequest,
} from '../../utils/types';
import newStore from './index';

export class UserStore {
  user: any = JSON.parse(localStorage.getItem('user') || '{}');

  async getUser() {
    const res = await UserAPI.getUser();
    this.user = JSON.parse(res.response);
    localStorage.setItem('user', JSON.stringify(this.user));
    newStore.set('user', JSON.parse(res.response));
    return this.user;
  }

  async registerUser(user: CreateUserRequest) {
    try {
      await UserAPI.createUser(user);
    } catch (e) {
      throw new Error(e);
    }
  }

  async loginUser(credentials: LoginUserRequest) {
    try {
      await UserAPI.loginUser(credentials);
      await this.getUser();
    } catch (e) {
      throw new Error(e);
    }
  }

  async logoutUser() {
    try {
      await UserAPI.logoutUser();
      localStorage.removeItem('user');
    } catch (e) {
      throw new Error(e);
    }
  }

  async editUser(user: EditUserRequest) {
    try {
      await UserAPI.editUser(user);
    } catch (e) {
      throw new Error(e);
    }
  }
}
