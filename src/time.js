const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

/**
 * calculateTime
 * @param time
 * @returns {*}
 */
const showBefore = (time) => {
  const m = new Date().getTime() - time;
  if (m <= 5 * MINUTE) {
    return '刚刚';
  } else if (m < HOUR) {
    return `${Math.floor(m / MINUTE)}分钟前`;
  } else if (m < DAY) {
    return `${Math.floor(m / HOUR)}小时前`;
  } else if (m < WEEK) {
    return `${Math.floor(m / DAY)}天前`;
  }
  return '1周前';
};

const formatSingle = (num, size = 10) => {
  if (num <= size - 1) {
    return `0${num}`;
  }
  return num;
};

/**
 * formatDateTime
 * output: 1992-1-11 6:01:01
 * @param num
 * @returns {string}
 */
const formatDateTime = (num) => {
  if (!num) {
    return '';
  }
  const date = new Date(num);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${formatSingle(date.getMinutes())}:${formatSingle(date.getSeconds())}`;
};

/**
 * getMessageDate
 * @param num
 * @returns {string}
 */
const getMessageDate = (num) => {
  const date = new Date();
  const target = new Date(num);
  if (target.setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)) {
    const target2 = new Date(num);
    return `${target2.getHours()}:${target2.getMinutes()}`;
  } else if (target.getFullYear() === date.getFullYear()) {
    return `${target.getMonth() + 1}月${target.getDate()}日`;
  }
  return `${target.getFullYear()}年${target.getMonth() + 1}月${target.getDate()}日`;
};

/**
 * formatDate
 * output: 1993.9.1
 * @param timeNum
 * @returns {string}
 */
const formatDate = (timeNum) => {
  if (!timeNum) {
    return '无';
  }
  let result = '无';
  try {
    result = new Date(timeNum).toLocaleDateString().replace(/\//g, '.');
  } catch (err) {
    return '无';
  }
  return result;
};


const time = {
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  showBefore,
  formatDateTime,
  formatDate,
};

export default time;
