/* eslint-disable require-jsdoc */
const asMock = {
    __INTERNAL_MOCK_STORAGE__: {},
  
    setItem: async (key: any, value: any, callback: (arg0: any) => any) => {
      const setResult = await asMock.multiSet([[key, value]], undefined);
  
      callback && callback(setResult);
      return setResult;
    },
  
    getItem: async (key: any, callback: (arg0: any, arg1: any) => any) => {
      const getResult = await asMock.multiGet([key], undefined);
  
      const result = getResult[0] ? getResult[0][1] : null;
  
      callback && callback(null, result);
      return result;
    },
  
    removeItem: (key: any, callback: any) => asMock.multiRemove([key], callback),
    mergeItem: (key: any, value: any, callback: any) =>
      asMock.multiMerge([[key, value]], callback),
  
    clear: _clear,
    getAllKeys: _getAllKeys,
    flushGetRequests: () => {},
  
    multiGet: _multiGet,
    multiSet: _multiSet,
    multiRemove: _multiRemove,
    multiMerge: _multiMerge,
  };
  
  async function _multiSet(keyValuePairs: any[], callback: (arg0: any) => any) {
    keyValuePairs.forEach((keyValue: any[]) => {
      const key = keyValue[0];
  
      asMock.__INTERNAL_MOCK_STORAGE__[key] = keyValue[1];
    });
    callback && callback(null);
    return null;
  }
  
  async function _multiGet(keys: any[], callback: (arg0: any, arg1: any) => any) {
    const values = keys.map((key: string | number) => [
      key,
      asMock.__INTERNAL_MOCK_STORAGE__[key] || null,
    ]);
    callback && callback(null, values);
  
    return values;
  }
  
  async function _multiRemove(keys: any[], callback: (arg0: any) => any) {
    keys.forEach((key: string | number) => {
      if (asMock.__INTERNAL_MOCK_STORAGE__[key]) {
        delete asMock.__INTERNAL_MOCK_STORAGE__[key];
      }
    });
  
    callback && callback(null);
    return null;
  }
  
  async function _clear(callback: (arg0: any) => any) {
    asMock.__INTERNAL_MOCK_STORAGE__ = {};
  
    callback && callback(null);
  
    return null;
  }
  
  async function _getAllKeys() {
    return Object.keys(asMock.__INTERNAL_MOCK_STORAGE__);
  }
  
  async function _multiMerge(keyValuePairs: any[], callback: (arg0: any) => any) {
    keyValuePairs.forEach((keyValue: string[]) => {
      const key = keyValue[0];
      const value = JSON.parse(keyValue[1]);
  
      const oldValue = JSON.parse(asMock.__INTERNAL_MOCK_STORAGE__[key]);
  
      asMock.__INTERNAL_MOCK_STORAGE__[key] = JSON.stringify(
        _deepMergeInto(oldValue, value),
      );
    });
  
    callback && callback(null);
    return null;
  }
  
  const _isObject = (obj: any) => typeof obj === 'object' && !Array.isArray(obj);
  const _deepMergeInto = (oldObject: any, newObject: { [x: string]: any; }) => {
    const newKeys = Object.keys(newObject);
    const mergedObject = oldObject;
  
    newKeys.forEach((key) => {
      const oldValue = mergedObject[key];
      const newValue = newObject[key];
  
      if (_isObject(oldValue) && _isObject(newValue)) {
        mergedObject[key] = _deepMergeInto(oldValue, newValue);
      } else {
        mergedObject[key] = newValue;
      }
    });
  
    return mergedObject;
  };
  
  export default asMock;