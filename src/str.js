const isChinese = (a) => {
  return escape(a).indexOf('%u') > 0;
};

const sortItem = (a, b) => {
  if (!isChinese(a) && isChinese(b)) {
    return -1;
  }
  if (isChinese(a) && !isChinese(b)) {
    return 1;
  }
  return a.localeCompare(b, 'ch-ZH');
};

/**
 * 字符串包含,正则表达式性能差
 * @param target
 * @param it
 * @returns {*|boolean}
 */
function contains(target, it) {
  // can't use String.prototype.indexOf.call(null, 'a')
  // VM15894:1 Uncaught TypeError: String.prototype.indexOf called on null or undefined
  //     at indexOf (<anonymous>)
  //     at <anonymous>:1:26
  return target && target.indexOf(it) !== -1;
}

/**
 *
 * @param target
 * @param n
 * @returns {string}
 */
function repeat(target, n) {
  // 采用二分法
  if (target && n) {
    let s = target;
    let result = '';
    while (n > 0) {
      if (n % 2 === 1) {
        result += s;
      }
      if (n === 1) {
        break;
      }
      s += s;
      n = n >> 1;
    }
    return result;
  }
  return '';
  
  // 省去创建数组，直接调用join方法，n越大，性能越好
  return Array.prototype.join.call({
    length: n + 1
  }, target);
  
  // 需要创建数组，然后生成字符串
  return (new Array(n + 1)).join(target);
}

/**
 * 采用递归方法
 * @param target
 * @param n
 * @returns {*}
 */
// 性能同repeat方法基本相同
function repeat2(target, n) {
  if (n === 1) {
    return target;
  }
  let s = repeat2(target, Math.floor(n / 2));
  s += s;
  
  // 如果是奇数
  if (n % 2) {
    s += target;
  }
  return s;
}

/**
 * 获取字符串占用字节数，以存储
 * @param target
 * @param fix
 * @returns {*|number}
 */
function byteLen(target, fix = 2) {
  const str = Array.prototype.join.call({length: fix + 1}, '-');
  return target && target.replace(/[^\x00-\xff]/g, str).length;
}


function capitalize(target) {
  return target.charAt(0).toUpperCase() + target.substring(1).toLowerCase();
}

/**
 * fillzero/补充 0
 * @param target
 * @param n
 * @returns {string}
 */
function pad(target, n) {
  return (0..toFixed(n) + target).slice(-n);
}


function trim(target) {
  // 字符串操作性能优于正则
  const str = String(target || '').replace(/^\s\s/g, '');
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      return str.substring(0, i + 1);
    }
  }
  return str;
  
  // 正则方法
  return String(target || '').replace(/^\s\s*/g, '').replace(/\s\s*$/g, '');
  // 性能稍差
  return String(target || '').replace(/^\s+|\s+$/g, '');
}


const str = {
  isChinese,
  contains,
  repeat,
  byteLen,
  capitalize,
  pad
};

export default str;
