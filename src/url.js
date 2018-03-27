/**
 * cleanParams
 * @param data
 * @returns {*}
 */
const cleanParams = (data) => {
  if (!data) {
    return null;
  }
  const newData = {...data};
  Object.keys(newData).forEach((key) => {
    if (newData[key] === '' || newData[key] === null || newData[key] === undefined) {
      delete newData[key];
    } else {
      newData[key] = encodeURI(encodeURI(newData[key]));
    }
  });
  return newData;
};

/**
 * getUrlParams
 * input: http:/fdsfsdf?a=1&b=2
 * output: {a: 1, b: 2}
 * @param keys
 * @returns {{}}
 */
const getUrlParams = (keys) => {
  const value = {};
  const search = window.location.search;
  if (search && search.length >= 1) {
    const temp = search.substr(1);
    const arr = temp.split('&');
    arr.forEach((item) => {
      const datas = item.split('=');
      value[datas[0]] = datas[1];
    });
  }
  
  if (keys && (keys instanceof Array)) {
    const result = {};
    keys.forEach((key) => {
      result[key] = value[key];
    });
    return result;
  }
  return value;
};

const url = {
  getUrlParams,
  cleanParams,
};

export default url;
