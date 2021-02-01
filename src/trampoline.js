function trampoline(fn) {
  return function trampolined(...args) {
    let result = fn( ...args );

    while (typeof result == "function") {
      result = result();
    }

    return result;
  };
}

export default trampoline;
