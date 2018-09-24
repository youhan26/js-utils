function isArr(arr) {
  return Array.isArray(arr);
}

function contains(arr, item) {
  return isArr(arr) && arr.indexOf(item) > -1;
}

function removeAt(arr, index) {
  if (isArr(arr)) {
    return !!arr.splice(index, 1).length;
  }
  return false;
}

function remove(arr, item) {
  if (isArr(arr)) {
    const index = arr.indexOf(item);
    /**
     * ~-1 : 0
     * ~0 : -1
     * ~1: -2
     * ~true：-2
     * ~false: -1
     */

    if (~index) {
      return removeAt(arr, index);
    }
  }
  return false;
}


function fatten(arr) {
  let result = [];
  if (isArr(arr)) {
    arr.forEach(function (item) {
      if (isArr(item)) {
        result = result.concat(fatten(item));
      } else {
        result.push(item);
      }
    });
  }
  return result;
}

function compact(arr) {
  return arr.filter(function (item) {
    return item !== null && item !== void 0;
  });
}

function pluck(arr, field) {
  if (isArr(arr)) {
    const result = [];
    arr.forEach(function (item) {
      const data = item[field];
      if (data) {
        result.push(data);
      }
      return result;
    })
  }
  return [];
}