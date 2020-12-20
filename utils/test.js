
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
 *                  5  size  :
 *                  6: resize : 在插入的时候，判断是否需要扩容，在删除元素的时候，判读是否到达最小容量
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
        if (this.count > this.size * 0.75) {
            var newSize = this.limit * 2,
            newPrime = this.getPrime(newSize)
            this.resize(newPrime)
        }

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
                 // 缩小容量
                if (this.size > 7 && this.count < this.size * 0.25) {
                    var newSize = Math.floor(this.size / 2),
                        newPrime = this.getPrime(newSize);
                        this.resize(newPrime)
                }
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
