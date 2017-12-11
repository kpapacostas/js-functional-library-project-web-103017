fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function eachTime(obj, func) {
        for (const element in obj) {
          func(element)
      }
    },

    map: function mappyMap(obj, func) {
      const new_obj = []
      for (const element in obj) {
        new_obj.push(func(element))
      }
      return new_obj
    },

    reduce: function reddyReduce(obj, func, acc){
      for (const element in obj){
        acc = func(acc, obj[element], obj)
      }
      return acc
    },

    find: function find(obj, predicate){
      for (const element in obj) {
        let v = predicate(obj[element])
        if (v === true) {
          return obj[element]
        }
      }
    },

    filter: function filliFilter(collection, predicate) {
      const new_obj = []
      for (const element in collection) {
        let v = predicate(collection[element])
        if (v === true) {
          new_obj.push(collection[element])
        }
      }
      return new_obj
    },

    size: function sizeySize(collection) {
      return Object.keys(collection).length
    },

    first: function firstyFirst(array, num) {
      const new_array = []
      for (let i = 0; i < num ; i++) {
        new_array.push(array[i])
      }
      return new_array
    },

    last: function lastyLast(array, num) {
      const new_array = []
      for (let i = array.length - num; i < array.length; i++) {
        new_array.push(array[i])
      }
      return new_array
    },

    compact: function compyCompact(collection) {
      const new_obj = []
      for (const element in collection) {
        if (!!collection[element]) {
          new_obj.push(collection[element])
        }
      }
      return new_obj
    },

    // sortBy: function sortySort(array, iteratee) {
    //   const new_array = []
    //   for (const element in array) {
    //     let v = iteratee(array[element])
    //     new_array.push(v)
    //   }
    //   const new_obj = new_array.sort()
    //   const newer_array = []
    //   for (const element in new_obj) {
    //     newer_array.push(array[new_obj[element]])
    //   }
    //   return newer_array
    // },

    sortBy: function sortySort(array, iteratee) {
      const new_array = []
      for (let i = 0; i <= array.length; i++) {
        let v = iteratee(array[i])
        if (v > iteratee(array[i + 1])) {
          new_array.push(array[i])
        } else {
          new_array.unshift(array[i])
        }
      }
      debugger
      return new_array
    }



  }
})()

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
fi.sortBy(stooges, function(stooge){ return stooge.name});
