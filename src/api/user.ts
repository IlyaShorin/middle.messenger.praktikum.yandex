import { HTTPTransport } from './fetch';
import { BaseAPI } from './base-api';
import {
  CreateUserRequest,
  EditUserRequest,
  LoginUserRequest,
} from '../utils/types';

const api = new HTTPTransport();

export class UserAPI extends BaseAPI {
  static createUser(user: CreateUserRequest) {
    return api.post('/auth/signup', {
      data: user,
      headers: {
        'content-Type': 'application/json',
      },
    });
  }
  static getUser() {
    return api.get('/auth/user', {});
  }
  static loginUser(credentials: LoginUserRequest) {
    return api.post('/auth/signin', {
      data: credentials,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
  static logoutUser() {
    return api.post('/auth/logout', {});
  }

  static editUser(user: EditUserRequest) {
    console.log('request');
    return api.post('/user/profile', {
      data: user,
      headers: {
        'content-Type': 'application/json',
      },
    });
  }
}
