function cusSetInterval() {
  return function (func, interval) {
    let isCancel = false
    let timer
    timer = setTimeout(function () {
      func && func()
      if (isCancel) {
        timer && clearTimeout(timer)
      } else {
        timer = setTimeout(arguments.callee, interval)
      }
    }, interval)
    return function () {
      isCancel = true
    }
  }
}

export default cusSetInterval()
