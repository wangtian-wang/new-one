#### Hash

##### 来源

* 基于数组实现
* 结构是数组，主要操作变换下标值，也就是哈希函数，通过hash函数，可以获取到hashcode

#####  优点

* 快速进行插入，删除，查找操作
* 操作起来效率高
* 机器指令，查找速度快
* 编码容易

##### 缺点

* Key没有顺序，不能进行有顺序的操作
* key不能重复

##### 常见使用场景

##### hash函数

* 将数组中的每一个元素的**下标**，通过hash函数计算出来

##### 优秀的hash函数

* 速度快
  	* 尽可能少的使用乘法或者除法，会影响使用性能，霍纳法则
  	* 
* 均匀的分布，将不同的元素隐射到不同的位置  表的长度采取的是质数
  		*   
  		*   

## 代码实现

### hash函数

```js
1: string ---> number hash code
2: hash -----> 压缩到数组范围之内


/** hash函数
 * 
 * @param {要插入的字符串} str 
 * @param {hash表的长度} size 
 */
function hashFunc (str, size) {
    var hashCode = 0, // 多为质数
        index;
    for (var i = 0; i < str.length; i++){
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    index = hashCode % size;
    return index
};
/**
 *  封装hash表方法： 链地址法的方式封装hash表
 *     hash表长度： 为质数
 * hash表的数据结构： [[[key,value],[key,value],[key,value]],[[key,value],[key,value],[key,value]]]
 *    hash表的方法： 
 *                  1 insert: 插入，修改数据 同一个函数： 当key不存在的时候，插入元素；key存在，修改元素
 *                  2  get  : 
 *                  3 delete:
 *                  4 isEmpty:
 *                  5 size
 *                      
 */
function HashTable (str) {
    this.storage = [];
    this.count = 0; //hash表中的元素的个数
    this.size = 7; // hash表的长度
    // methods
    HashTable.prototype.hashFunc  = function (str, size) {
        var hashCode = 0, // 多为质数
            index;
        for (var i = 0; i < str.length; i++){
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        index = hashCode % size;
        return index
    };
    HashTable.prototype.insert = function (key, value) {
        var index = this.hashFunc(key, this.size),
            bucket = this.storage[index]; // 取出key对应的数组
        if (!bucket) {   //  hash表，既数组中不存在的元素为undefined
            bucket = [];
            this.storage[index] = bucket
        };
        // for 循环里面的if条件判断语句，用于判断这个key是否在bucket中
        for (var i = 0; i < bucket.length; i++) {
            var temp = bucket[i];
            if (temp[0] === key) {
                temp[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
        this.count++;

    };
    HashTable.prototype.get = function (key) {
        var index = this.hashFunc(key, this.size),
            bucket = this.storage[index];
        if (!bucket) {
            return null
        }
        for (var i = 0; i < bucket.length; i++) {
            var temp = bucket[i];
            if (temp[0] === key) {
                return temp[1]
            }
        }
        return null;
    };
    HashTable.prototype.delete = function (key) {
        var index = this.hashFunc(key, this.size),
            bucket = this.storage[index];
        if (!bucket) return;
        for (var i = 0; i < bucket.length; i++) {
            var temp = bucket[i];
            if (temp[0] === key) {
                bucket.splice(i, 1);
                this.count--;
                return temp[1]
            }
        }
        return null
    };
    HashTable.prototype.isEmpty = function (key) {
        return this.count === 0
    };
    HashTable.prototype.size = function () {
        return this.count
    };
    HashTable.prototype.resize = function (size) {
        var oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.size = newSize;
        for (var i = 0; i < oldStorage.length; i++){
            var bucket = oldStorage[i]
            // continue的意思是继续进行for循环，遍历oldStorage里面的元素吗？
            // 条件成立，执行对应的代码，条件不成立，执行条件下面的代码。确保循环能够进行下去
            if (!bucket) continue 
            for (var j = 0; j < bucket.length; j++) {
                var temp = bucket[j] 
                this.insert(temp[0], temp[1])
            }
        }
    };
    HashTable.prototype.isPrime = function (num) {
        var temp = parseInt(Math.sqrt(num));
        for (var i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    };
    HashTable.prototype.getPrime = function (num) {
        while (!this.isPrime) {
            num++;
        }
        return num;
    };
}

var ht = new HashTable();
ht.insert('asd', 'asd');
console.log(ht);


```

## hash表的扩容

#### 1： 为啥要扩容

* 采用链地址法，某个index对应的容器可以无限的插入元素。数据如果比较多，容器就会越来越大，hash表的效率就会降低
* loadFactor = size / length

#### 2: loadFactory

* 定义： 装填因子

#### 3： 啥时候需要扩容

* loadFactory > 0.75 的时候

#### 4： 一般扩容的容量是增大2倍，扩容之后，所有数据项需要重新调整位置

## 质数

#### 概念

* 只能被1和自己整除的数，大于1

#### 代码

```js
var isPrime = function (num) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
 };
```





