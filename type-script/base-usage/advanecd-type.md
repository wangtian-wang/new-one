## 高级类型
###  this
```
 class Counter {
     constructor(public count: numbner = 0) {
         this.value = count;
     }
      public add(value: number) {
          this.value += value;
          return this;
      }
      public substruct(value: number) {
          this.value -= value；
          return this;
      }
 }
const counter = new Counter(10);
this.add(1).substruct(2);
因为函数内部返回了this 所以可以实现链式调用




```
## 索引类型联合操作符
* keyof 接口 获取这个接口里面 所有属性名组成的联合类型
```
interface Fruit {
    price: 'number'
    name: 'string'
}
let lemon : keyof Fruit
lemon = price;
lemon = name;
lemon 不能再赋值 Fruit 里面没有的属性
```
## 索引访问操作符
* []