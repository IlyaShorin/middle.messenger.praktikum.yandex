import { Indexed } from './types';
export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (let key in rhs) {
    if (!rhs.hasOwnProperty(key)) {
      continue;
    }

    try {
      if (typeof rhs[key] === 'object') {
        rhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed);
      } else {
        lhs[key] = rhs[key];
      }
    } catch (e) {
      lhs[key] = rhs[key];
    }
  }

  return lhs;
}

export function set(
  object: {},
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== 'object') {
    return object;
  }
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }
  const keys = path.split('.');
  let obj = keys.reverse().reduce((reduction, segment, index) => {
    const result: Indexed = {};
    if (index === 0) {
      result[segment] = value;
    } else {
      result[segment] = reduction;
    }

    return result;
  }, {});
  return merge(object, obj);
}
