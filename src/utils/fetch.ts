import { queryStringify } from './helpers';
import { METHODS } from './consts';

class HTTPTransport {
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

  post = (url: string, options: { timeout?: number } = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put = (url: string, options: { timeout?: number } = {}) => {
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

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
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
        xhr.send(data as Document);
      }
    });
  };
}
