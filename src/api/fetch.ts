import { queryStringify } from '../utils/helpers';
import { METHODS } from '../utils/consts';

export class HTTPTransport {
  get = (
    url: string,
    options: { timeout?: number; method?: string; data?: {} } = {}
  ) => {
    const { data } = options;
    url = `${url}${queryStringify(data as {})}`;
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post = (
    url: string,
    options: {
      timeout?: number;
      method?: string;
      data?: any;
      headers?: Record<string, string>;
    } = {}
  ) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put = (url: string, options: { timeout?: number; data?: {} } = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  delete = (url: string, options: { timeout?: number } = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request = (
    url: string,
    options: {
      method: string;
      data?: Document | { [s: string]: string };
      headers?: Record<string, string>;
    } = {
      method: METHODS.GET,
    },
    timeout = 5000
  ) => {
    const { method, data, headers } = options;
    console.log(data);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, `https://ya-praktikum.tech/api/v2${url}`);
      for (let header in headers) {
        xhr.setRequestHeader(header, headers[header]!);
      }
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
