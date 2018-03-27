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


const str = {
  isChinese
};

export default str;
