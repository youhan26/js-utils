const simpleIsEqual = (a, b) => a === b;

// <ResultFn: (...Array<any>) => mixed>
// The purpose of this typing is to ensure that the returned memoized
// function has the same type as the provided function (`resultFn`).
// ResultFn:        Generic type (which is the same as the resultFn).
// (...Array<any>): Accepts any length of arguments - and they are not checked
// mixed:           The result can be anything but needs to be checked before usage
export default function (resultFn, isEqual = simpleIsEqual) {
  // environment change
  let lastThis;
  let lastArgs = [];
  let lastResult;
  let calledOnce = false

  const isNewArgEqualToLast = (newArg, index) => {
    return isEqual(newArg, lastArgs[index])
  }

  const wrapper = function (...newArgs) {
    if (
      calledOnce &&
      lastThis === this &&
      newArgs.length === lastArgs.length &&
      newArgs.every(isNewArgEqualToLast)
    ) {
      return lastResult
    }
    lastResult = resultFn.apply(this, newArgs)
    calledOnce = true
    lastThis = this;
    lastArgs = newArgs;
    return lastResult
  }
  return wrapper
}
