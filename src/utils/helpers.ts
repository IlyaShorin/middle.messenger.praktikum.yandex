export function queryStringify(data: { [key: string]: string }) {
  let str = '?';
  for (let key in data) {
    str = str + `${key}=${data[key]}&`;
  }
  str = str.slice(0, str.length - 1);
  return str;
}
