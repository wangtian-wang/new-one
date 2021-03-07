//自己定义的 foreach 函数
Array.prototype.jForEach = function (fn) {
    var arr = this,
      len = arr.length,
      arg2 = arguments[1] || window;
    for (var i = 0; i < len; i++) {
      fn.apply(arg2, [arr[i], i, arr]);
    }
  }
  
  // 利用 splice 重写 unshift
  //var arr = [4, 5, 6] // --> [1, 2, 3, 4, 5, 6]
  // 给数组的前面按照顺序,从左到右添加元素.
  Array.prototype.newUnshift = function () {
    var pos = 0;
    for (var i = 0; i < arguments.length; i++) {
      this.splice(pos, 0, arguments[i]);
      pos++;
    }
    return this.length
  }
  // 使用 concat 重写 UNshift
  Array.prototype.myUnshift = function () {
    var argArr = Array.prototype.slice.call(arguments),
      newArr = argArr.concat(this);
    return newArr
  }
  var array = [];
  // 数组元素按照字节数排序 Unicode 0-255 1 个字节 256~ 2 个字节
  array.sort(function (a, b) {
    return getBytes(a) - getBytes(b)
  })
  function getBytes (str) {
    var bytes = str.length;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 255) {
        bytes++;
      }
    }
    return bytes
  }
  // 数组去重
  Array.prototype.unique = function () {
    var temp = {};
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
      // if (!temp[this[i]]) {
      //   // 第一次判断空对象里面没有 0 这个属性,为 undefined 是 false ,!false= true 
      //   // 要排除新对象的元素为 0 的情况,0 是 false !false= true,还是不能去重
      //   // 只要对象的元素为真,就不能进去这个循环
      //   // temp[0] = 0
      //   temp[this[i]] = 'val';
      //   newArr.push(this[i])
      //   ///////////////
      if (!temp.hasOwnProperty(this[i])) {
        temp[this[i]] = this[i];
        newArr.push(this[i])
      }
    }
    return newArr;
  }
  
  
  // 数组去重,利用 双重for 循环 ,对比新数组的元素和原来的数组中的元素是否相等;
  // 如果相等,状态的标识改变为 true,结束内存循环,进行下一次的双重循环.
  // 如果不相等,进入外层循环的判断条件 ,新数组添加元素
  function UniqueArr (array) {
    var _arr = [],
      isRepeat;
    for (var i = 0; i < array.length; i++) {
      isRepeat = false;
      for (var j = 0; j < _arr.length; j++) {
        if (_arr[i] == array[i]) {
          isRepeat = true;
          break;
        }
      }
      if (!isRepeat) {
        _arr.push([array[i]])
      }
    }
    return _arr;
  }
  
  // 双重 for 循环原数组
  // 外层循环 遍历原数组
  // 内层循环 ,从原数组的第二个元素开始遍历,并且与外层循环中原数组第一个元素比较,
  // 如果两个元素相等的话,则跳出内层循环,进入外层循环的if 条件语句的判断,
  // 条件成立,新数组添加元素
  function UniqueArr1 (array) {
    var _arr = [],
      isRepeat;
    for (var i = 0; i < array.length; i++) {
      isRepeat = false;
      for (var j = 0; j < _arr.length; j++) {
        if (_arr[i] == array[i]) {
          isRepeat = true;
          break;
        }
      }
      if (!isRepeat) {
        _arr.push([array[i]])
      }
    }
    return _arr;
  }
  // 利用 index of
  // list.indexof(item) --> 
  // 1:如果有这个元素--> 返回下标,没有这个元素,返回-1,对 NAN 无效
  // 2: 只返回相同元素中,第一个元素在数组中的索引.
  // 3: 用这个索引和遍历出来的 index 比较,若相等,则说明这个元素只出现一次;
  // filter 只返回符合条件的元素,并且对原数组进行修改,所以不需要新数组接收
  function indexUniqueArr (array) {
    return array.filter(function (item, index) {
      return array.indexOf(item) === index
    });
  }
  
  // 利用list.indexof(item) == -1 来判断,说明这个元素不存在新数组里面, 添加
  function forEachUniqueArr (array) {
    var _arr = []
    array.forEach(function (item, index) {
      if (_arr.indexOf(item) === -1) {
        _arr.push(item);
      }
    });
    return _arr;
  }
  
  
  // 利用 ES6 的新方法 array.includes(item) --> 返回值 true || false
  function includeUnique (array) {
    var _arr = [];
    array.forEach(function (item) {
      if (!_arr.includes[item]) {
        _arr.push(item)
      }
    })
    return _arr;
  }
  
  
  
  // 利用 sort()函数排序后相同的元素会在一起的特性,遍历数组对比前后两个元素是否相等 
  function sortUniqueArray (array) {
    var _arr = [];
    array.sort();
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1]) {
        _arr.push(array[i]);
      }
    }
    return _arr;
  }
  
  // sort()排序后,和新数组的最后一项比较,如果不相等,就添加数组元素到新数组
  function sortUniqueArray1 (array) {
    var _arr = [];
    array.sort();
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== _arr[arr.length - 1]) {
        _arr.push(array[i]);
      }
    }
    return _arr;
  }
  
  // 利用 reduce(function(prev,item) {} ,[]) 中 prev 与[]的映射关系.
  function reduceUniqueArr (array) {
    var _arr = [];
    return array.sort().reduce(function (prev, item) {
      if (prev.length === 0 || prev[prev.length - 1] !== item) {
        prev.push(item)
      }
      return prev;
    }, [])
  }
  
  
  //利用 new Set() 新的对象类型的数据结构,只要对象放进去,就会自动进行属性去重,
  // 得到的结果是每个属性都是不重复的,
  function setUniqueArr (array) {
    return Array.from(new Set(array));
  }
  
  
  
  //  判断对象里面有没有以当前这项数组的item作为属性名所对应的属性值
  //  因为对象的属性是不能重复的 
  //  如果没有, if 条件盘算的结果就是 false 给新数组添加元素
  //  如果有, 存在的属性值就是 true ,条件不成立,新数组就不能添加元素
  function uniqueArray (array) {
    var _arr = [],
      _temp = {};
    for (var i = 0; i < array.length; i++) {
      if (!_temp[array[i]]) {
        _temp[array[i]] = 1;
        _arr.push(array[i]);
      }
    }
    return _arr;
  }
  
  
  // 利用new map();
  // 逻辑与上面的方法一样,如果新对象里面没有一当前数组 item 作为属性的属性值,那就说明对象没有这个属性
  // 因为对象的属性是不能重复的 
  // 同时也说明这个元素是独一无二的,添加到新数组里面
  
  function uniqueArr (array) {
    var _arr = [],
      _temp = new Map();
    for (var i = 0; i < array.length; i++) {
      if (!_temp.get(array[i])) {
        _temp.set(array[i], 1)
        _arr.push(array[i]);
      }
    }
    return _arr;
  
  }
  
  // ****************数组扁平化****************************   //
  
  
  
  // 利用递归检测数组元素的类型
  function flatten (arr) {
    var _arr = arr || [],
      fArr = [],
      len = _arr.length,
      item;
    for (var i = 0; i < len; i++) {
      item = _arr[i];
      if (_isArr(item)) {
        fArr = fArr.concat(flatten(item))
      } else {
        fArr.push(item)
      }
    }
    function _isArr (item) {
      return {}.toString.call(item) === '[object Array]'
    }
    return fArr;
  }
  
  // 原型上增加属性
  Array.prototype.flatten = function () {
    var _arr = this,
      toStr = {}.toString;
    if (toStr.call(_arr) !== '[object Array]') {
      throw new Error('this methods only apply for array')
    }
    var fArr = [];
    _arr.forEach(function (item) {
      toStr.call(item) === '[object Array]'
        ? fArr = fArr.concat(item.flatten())
        : fArr.push(item);
    })
    return fArr;
  }
  
  // 利用 for 循环
  
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  
  // json.stringfy
  arr = JSON.stringify(arr).replace(/\[|\]/g, '').split(',').map(item => Number(item))
  
  
  // 利用 reduce
  Array.prototype.flatten = function () {
    var _arr = this,
      toStr = {}.toString;
    if (toStr.call(_arr) !== '[object Array]') {
      throw new Error('this methods only apply for array')
    }
  
    return _arr.reduce(function (prev, item) {
      return prev.concat(
        toStr.call(item) === '[object Array]'
          ? item.flatten()
          : item
      );
    }, []);
  
  }
  
  // ES6 的写法
  const flatten = (arr) => {
    return arr.reduce((prev, item) => {
      return prev.concat(
        toStr.call(item) === '[object Array]'
          ? item.flatten()
          : item
      );
    }, []);
  }
  
  // flatten(Infinity) 
  // 当参数为 Infinity -->可以对多维度数组进行扁平化处理
  // 当参数为空时候, --> 只能对二维数组进行扁平化处理.
  
  [...new set(arr)]
  Array.from(new set(arr))
  
  //对数组扁平化处理, 去重, 排序
  Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
  
    (function () {
      function myFlat () {
        let res = [],
          _this = this;
        let fn = (arr) => {
          for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (Array.isArray(item)) {
              fn(item)
            }
            res.push(item)
          }
        }
      }
      fn(_this)
      return res
    })()
  
  
  