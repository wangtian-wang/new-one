## reflect

* 将对对象原型上面的方法，变得易于访问，可以直接使用 reflect 函数上面的和对象原型上面相等的方法，来进行访问

## proxy

* 可以对被代理的对象经过一系列的操作，
* 最常用的方法是 ： get ： set ： has  只能在判断一个对象上面有某种属性的时候  property inobject 可用 不可以拦截 for in 遍历的方法 ： delete 