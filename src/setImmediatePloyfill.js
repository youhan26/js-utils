const setImmediatePloyfill = (function () {

  // node environment or msie
  if (typeof setImmediate !== 'undefined') {
    return setImmediate;
  }

  if (typeof Promise !== 'undefined') {
    const p = Promise.resolve();
    return function (fn) {
      p.then(fn);
    };
  }

  let queue = [];

  // if support MutationObserver
  if (typeof MutationObserver !== 'undefined') {
    const dd = document.createElement("div");
    const mo = new MutationObserver(function () {
      queue.forEach(function (item) {
        item && item();
      });
      queue = [];
    });
    mo.observe(dd, {attributes: true});

    return function (fn) {
      queue.push(fn);
      dd.setAttribute('a', Date.now().toString());
    };
  }

  return function (fn) {
    setTimeout(fn, 0);
  };
})();

export default setImmediatePloyfill;
