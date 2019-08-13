export const isUndefined = (x: any): x is undefined => typeof x === 'undefined';

export const isNumber = (x: any): x is number => typeof x === 'number' && !isNaN(x);

export const isBoolean = (x: any): x is boolean => typeof x === 'boolean';

const toString = Object.prototype.toString;

// export const isType = (type: string) => (x: any) => toString.call(x).slice(8, -1) === type;

export const isString = (x: any): x is string => toString.call(x).slice(8, -1) === 'String';

// export const isFunction = isType('Function');
