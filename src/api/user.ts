import { HTTPTransport } from './fetch';
import { BaseAPI } from './base-api';
import { User } from '../utils/types';

const api = new HTTPTransport();

export class UserAPI extends BaseAPI {
  static createUser(user: User) {
    return api.post('/auth/signup', {
      data: user,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  static getUser() {
    return api.get('/user', {});
  }
}
