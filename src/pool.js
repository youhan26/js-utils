function createPool(createItem) {
  const datas = {}

  return {
    get(uniqueKey) {
      if (datas[uniqueKey]) {
        datas[uniqueKey].count++
        return datas[uniqueKey].data
      } else {
        const data = createItem(uniqueKey)
        datas[uniqueKey] = {
          data,
          count: 0
        }
      }
    },
    destroy(uniqueKey) {
      if (uniqueKey && datas[uniqueKey]) {
        if (--datas[uniqueKey].count <= 0) {
          delete datas[uniqueKey]
        }
      }
    },
    size() {
      return Object.keys(datas)
    }
  }
}


export default createPool

/**
 * dmeo
 *
 const monthCreator = createPool((month) => {
  return {
    month
  }
})


 const loggerWrapper = function (func, logger) {
  return function () {
    const data = func.apply(this, arguments)
    console.log((logger && logger()) || data)
  }
}

 const get = loggerWrapper(monthCreator.get, monthCreator.size)
 get(1)
 get(2)
 get(3)
 get(1)
 get(2)
 get(3)
 */
