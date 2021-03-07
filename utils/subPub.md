## 消息订阅发布模式
#### 与事件总线的区别
* 1： 每种事件里面的fn 都有一个唯一的ID与之相对应，可以删除或者修改这个fn，其他的fn不受影响
* 2: 数据结构不同
```
const subPub = {
    id: 1,
    callbacks: {

    }
};
/**
 * 必须有一个返回值，来给当前的这个订阅成功的函数，便于将来取消函数的时候使用
 * @param {string} channel 
 * @param {fn} cb 
 */
subPub.subscribe = function (channel, cb) {
    let fnId = 'fnId' + this.id++;
    if (!this.callbacks[channel]) {
        this.callbacks[channel] = {
            [fnId]: cb
        }
    } else {
        this.callbacks[channel][fnId] = cb
    }
    return fnId;
}

subPub.publish = function (channel, data) {
    if (this.callbacks[channel]) {
        Object.values(this.callbacks[channel]).forEach(fn => {
            fn.call(this, data)
        });
    }
}
subPub.unSubscribe = function (flag) {
    if (!flag) {
        this.callbacks = {};
    } else if(typeof flag === 'string'){
        if (flag.indexOf('fnId') === 0) {
            // 找到对应的事件，删除事件对象里面fnid对应的函数
            let obj = Object.values(this.callbacks).find(obj => obj.hasOwnPerporty(flag));
            if (obj) {
              delete obj[flag]
            }
        } else {
            delete this.callbacks[flag]
       }
    }
}

```