// 类型判断
/**
 * @param {any} target
 * @param {string} type
 * @return {boolean}
 */
export function isType(target, type) {
    let targetType = Object.prototype.toString
      .call(target)
      .slice(8, -1)
      .toLowerCase();
    return targetType === type.toLowerCase();
  }
  /**
   * 对象属性剔除
   * @param {object} object
   * @param {string[]} props
   * @return {object}
   */
  function omit(object, props = []) {
    let res = {};
    Object.keys(object).forEach((key) => {
      if (props.includes(key) === false) {
        res[key] =
          typeof object[key] === 'object' && object[key] !== null
            ? jsON.parse(jsON.stringify(object[key]))
            : object[key];
      }
    });
    return res;
  }
  
  /**日期格式化
   * @param {string} format
   * @param {number} timestamp - 时间戳
   * @return {string}
   */
  export function formatDate(format = 'Y-M-D h:m', timestamp = Date.now()) {
    let date = new Date(timestamp);
    let dateInfo = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    };
    let formatNumber = (n) => (n > 10 ? n : '0' + n);
    let res = format
      .replace('Y', dateInfo.Y)
      .replace('M', dateInfo.M)
      .replace('D', dateInfo.D)
      .replace('h', formatNumber(dateInfo.h))
      .replace('m', formatNumber(dateInfo.m))
      .replace('s', formatNumber(dateInfo.s));
    return res;
  }
  /**分割指定长度的数组
   * @param {array} list
   * @param {number} size -  用于指定分割长度为 size的数组
   * @param {array} cacheList -  用于指定分割长度为 size的数组
   * @return {array} result 结果
   */
  export const listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list];
    if (size <= 0) {
      return cacheList;
    }
    while (tmp.length) {
      cacheList.push(tmp.splice(0, size));
    }
    return cacheList;
  };
  /**
   * 获取数组交集
   */
  export const intersection = (list, ...args) =>
    list.filter((item) => args.every((list) => list.includes(item)));
  //  字符串前面空格去除与替换
  export const trimStart = (str) =>
    str.replace(new RegExp('^([\\s]*)(.*)$'), '$2');
  
  // 字符串后面空格去除与替换
  
  export const trimEnd = (str) =>
    str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1');
  
  // 获取元素类型
  export const dataType = (obj) =>
    Object.prototype.toString
      .call(obj)
      .replace(/^\[object (.+)\]$/, '$1')
      .toLowerCase();
  //在本例中，我们将取得介于 1 到 10 之间的一个随机数：
  
  // Math.floor((Math.random() * 10) + 1)
  //以下函数返回 min（包含）～ max（包含）之间的数字：
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  //以下函数返回 min（包含）～ max（不包含）之间的数字：
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  //  乘以一个 数字几 ,表示取随机数的范围是 0 - 几
  Math.random() * 20;
  
  //  注意字符串的长度会算上前面的逗号, 空格,
  var str = ',1,2,3,4,5,6,7,8,9';
  console.log(str.length); // 18
  // 随机取一个数组中的某个数  其实是随机取得数组的索引值 注意是前开后闭合
  arr[Math.floor(Math.random() * arr.length)];
  