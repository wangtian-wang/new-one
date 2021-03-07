## 异常传透

```js
当promise中的状态为失败的时候，可以用以下两种方法将失败的状态传递给后面的promise处理

new Promise((res, rej) => {
   rej('fail')
}).then(res => {
    
}, rej => {
   throw rej // 方法1  将错误的状态传递给下一个.then里面的promise的reject
    
}).then(res => {

}, rej => Promise.reject()) // 方法1   将错误的状态传递给下一个.then里面的promise的reject
.catch( rej => {
  log(rej)
})
```

## 中断链式调用

```js
当想要中断promise链的时候，需要在当前的promise里面return一个pending状态的promise

new Promise((res, rej) => {
    rej('fail')
}).then(res => {

}, rej => {
    console.log(rej, 'rej'); //fail rej
    return rej
}).then(res => {
    console.log(res, 'second then value') //fail second then value
    return new Promise(() => {}) // pending状态的promise 会中断后续promise链的执行
}, rej => rej).then(res => {
    console.log('i can not be  execute');
})
```





## 失败的promise.reject()

```js
.then() (b) 前面的失败的promise a 的reject()的状态，只会影响当前.then (b) 执行成功或者是失败的回调函数，不能影响一下个.then() (c) 的执行结果
.then (b) 的reject（）执行，是对promise1 里面 reject（）状态的处理；
.then (b) 的reject（）执行，只要reject（）函数内部的状态是 ok 的，那么下一个函数 .then () (c) 执行的函数就是 resolve（）
    a  new Promise((res, rej) => {
          rej('fail')
    b  }).then(res => {

       }, rej => {
          console.log(rej, 'rej'); //fail rej
          return rej
    c  }).then(res => {
          console.log(res, 'second then value') //fail second then value
       }, rej => rej) 
```

