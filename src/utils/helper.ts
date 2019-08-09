const toString = Object.prototype.toString;

export const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

export const isNumber = (x: any): x is number => typeof x === 'number' && !isNaN(x);

export const isBoolean = (x: any): x is boolean => typeof x === 'boolean';

// 是否为普通对象 {k:v}
export function isPlainObject(x: any): x is object {
  return toString.call(x) === '[object Object]';
}

export const isType = (type: string) => (x: any) => toString.call(x).slice(8, -1) === type;

export const isString = isType('String');

export const isFunction = isType('Function');
