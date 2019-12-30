// export const concatFactory = Function.prototype.bind.bind([].concat)
//  Function.prototype.bind.bind([].concat)
//  = [].concat.bind
// concatFactory([2], 89)(2, 3, 4, [6])
//  = [].concat.bind([2], 89)(2, 3, 4, [6])
//
// export const concat = Function.prototype.apply.bind([].concat)
// = [].concat.apply
// concat([12, 3], [1, 23, [3213, 23]])
// = [].concat.apply([12, 3], [1, 23, [3213, 23]])

/**
 * example:
 * const concat = unbind([].concat)
 * concat([1], 321, 3213)(1, 2, 3, [1, 2, 3])
 * @param method
 * @returns {function}
 */
export function unbind(method){
  return Function.prototype.bind.bind(method)
}

/**
 * example:
 * const concat = unApply([].concat)
 * concat([1], 1, 2, 3, [1, 2, 3])
 * @param method
 * @returns {function}
 */
export function unApply(method){
  return Function.prototype.apply.bind(method)
}
