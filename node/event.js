/**
 node 当中的事件模型
 采用经典的观察者模式
 on('eventname', listener === (也就是回调函数callback))

 */
const listener1 = (req, res) => {
    res.end('req1 end')
 }
const listener2 = (req, res) => {
    res.end('req2 end')

}
const listener3 = (req, res) => {
    res.end('req3 end')

}

httpServer.on('request', listerer1(req, res));
httpServer.on('request', listerer2(req, res));
httpServer.on('request', listerer3(req, res));

// 当请求被监听到的时候， 所有的listenter都会执行； 但是response只能响应一个 第一个response被响应 其他的都会被抛弃

httpServer.off(listener1);
httpServer.removeAllListeners('request')
