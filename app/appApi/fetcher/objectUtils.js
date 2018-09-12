/* eslint-disable no-prototype-builtins,no-restricted-syntax */

function mapValuesToList(obj, fn) {
  const ret = [];

  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      ret.push(fn(obj[k], k));
    }
  }

  return ret;
}

function forEach(obj, fn) {
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const interrupted = fn(obj[k], k);
      if (interrupted) {
        return;
      }
    }
  }
}

const createParamString = params =>
  Object.keys(params)
    .map(key => (!!key && !!params[key] ? `${key}=${params[key]}` : ''))
    .filter(param => param !== '')
    .join('&');

const ObjectUtils = {
  forEach,
  mapValuesToList,
  createParamString,
};

export default ObjectUtils;
