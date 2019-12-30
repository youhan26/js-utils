let supportsPassive = false;
if (window) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', ({
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }));
    window.addEventListener('test-passive', null, opts);
  } catch (e) {
  }
}

export default supportsPassive
