module.exports = {
    output: {
        enviroment: {
            arrowFunction: false  // 不允许webpack使用箭头函数。core-js内部也有适应低级浏览器的兼容代码。
        }
    }
}