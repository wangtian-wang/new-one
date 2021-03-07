// origin 是被 clone 的对象  ,  target是将要 clone 的对象
// 浅拷贝
function clone(origin, target) {
    var tar = target || {};
    for (let key in origin) {
      if (origin.hasOwnProperty(key)) {
        tar[key] = origin[key]
      }
    }
    return tar
  }
  // 深拷贝
  //console.log(typeof (null))-->object 
  //console.log(typeof ([1, 2]))-- > object
  console.log(typeof (function text() { }))  // -- > function
  
  
  function deepClone(origin, target) {
    var tar = target || {},
      toStr = Object.prototype.toString,
      arrType = '[Object Array]';
    for (let key in origin) {
      // 提出原型上面的属性
      if (origin.hasOwnProperty(key)) {
        if (typeof (origin[key] === 'object' && origin[key] !== null)) {
          if (toStr.call(origin[key]) === arrType) {
            // 为递归的 tar 找一个新的命名空间
            tar[key] = [];
          } else {
            tar[key] = {}
          }
          deepClone(origin[key], tar[key])
        } else {
          tar[key] = origin[key]
        }
      }
    }
    return tar
  }
  // 利用 json 进行深拷贝
  var str = JSON.stringify(origin); //字符串是原始值
  var target = JSON.parse(str);
  //target.attr = attr; // 不会改变原对象的值
  
  // 自己封装的 type of
  // type of 可能出现的结果 undefined object[object ,array,null] function number boolean string
  function myTypeOf(val) {
    var type = typeof (val),
      toStr = Object.prototype.toString;
    var res = {
      '[object Array]': 'array',
      '[object Object]': 'object',
      '[object Number]': 'number',
      '[object Boolean]': 'boolean',
      '[object String]': 'string',
    };
    if (val == null) {
      return 'null';
    } else if (type === 'object') {
      var ret = toStr.call(val);
      return res[ret]
    } else {
      return type;
    }
  }