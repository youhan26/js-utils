/**
 * safeGetAttribute
 * example: safeGetAttribute({a: {b: 1}}, 'a.b')
 *          safeGetAttribute({a: {b: [1, 2, 3]}}, 'a.b[2]')
 * @param data
 * @param attPath
 * @returns {*}
 */
const safeGetAttribute = function (data, attPath = '') {
  if (!data) {
    return;
  }
  const paths = attPath.replace(/([\[\]])/g, '.').split('.');
  let current = data;
  while (data && paths.length > 0) {
    data = data[paths.shift()];
    data && (current = data);
  }
  return current;
};

export default safeGetAttribute;
