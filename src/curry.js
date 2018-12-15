function curry(func) {
  const bindArgs = Array.prototype.slice.call(arguments, 1)
  return function () {
    func && func.apply(undefined, bindArgs.concat(Array.prototype.slice.call(arguments)))
  }
}

export default curry
