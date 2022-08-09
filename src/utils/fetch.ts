const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data: { [key: string]: string }) {
  let str = '?';
  for (let key in data) {
    str = str + `${key}=${data[key]}&`;
  }
  str = str.slice(0, str.length - 1);
  return str;
}

class HTTPTransport {
  get = (url: string, options: { timeout?: number } = {}) => {
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
      const isGet = method === METHODS.GET;
      xhr.open(
        method,
        isGet && !!data ? `${url}${queryStringify(data as {})}` : url
      );
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
