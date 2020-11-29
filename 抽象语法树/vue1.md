## 1大型项目vue组件内存泄漏的原因

#### 1： 内存是啥东西

#### 2： 泄漏的原因

#### 3： 怎样避免

#### 4:  在平时的项目中，怎样别的情况会导致，内存泄漏、

	*    1：在vue的组件中，将第三方的包挂载到vue的data 中，【data中的数据会进行数据劫持的操作， 如果一旦第三方的包的是多维数组，或者对象的嵌套比较深的话， 会                          ，】最终， 会将这些数据挂在但vue的根组件【实例】上面。如果vue的实例没有销毁，这些方法就会一直存在vue的实例上面。
	*    vue       dep 维护依赖【mvvm中的vm】， 连接watcher【 例如： v-html,v-if。每个指令对应一个watcher，每个watcher有一个ID】， 是 链接视图层和响应式数据层的联系者。由于watcher管理不好，所以会出现内存泄漏的原因。
	*    keep-alive  用的次数多，或者组件比较大。

#### 5： 怎样在平时的项目中避免这种行为

## 2 defineProperty() 为啥在Vue2的源码里面会被重写

#### 1： 因为数组的有些方法【不改变索引】的方法，不能被defineProperty（）监听到。

			* 对于数组来说， push方法一定不会别监听
			* UNshift在元素为0的时候， 不会被触发
			* pop， shift可能会触发。

* 2： 对象和数组，只有预先定义的变量能被监听到

  ####   不是 object.defineProperoty()监听不到数组的变更，因为对于数组的每一次操作，都可能影响其他key的索引的变更。在大多数情况下，需要遍历数组，重新检测，性能的消耗比较大。对于对象， 新插入的Key不会影响其他的key。

## 怎样重写vue2数组的方法

 ####  

 * 1: 浅拷贝一个对象，这个对象继承了array.prototype上面的所有方法 object.create(array.prototype), 保留对数组要进行重写的方法。push, pop,shift,unshift, splice,sort,reverse
   	* push unshift splice 会新增索引、调用方法递归的监听
   	* 
 * 

# $set 内部做了啥事情

# keep-alive怎样实现









