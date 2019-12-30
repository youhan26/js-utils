function baseBind(func, context) {
  return function () {
    func && func.apply(context, arguments)
  }
}

function bind(func, context) {
  const initArgs = Array.prototype.slice.call(arguments, 2)
  return function () {
    const addArgs = Array.prototype.slice.call(arguments)
    func && func.apply(context, initArgs.concat(addArgs))
  }
}

export default {
  bind,
  baseBind
}
