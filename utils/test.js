// function BinarySearchTree () {
//     function Node (key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
//     // 保存根节点
//     this.root = null;
//     BinarySearchTree.prototype.insert = function () {
//         let newNode = new Node(key);
//         if (!this.root) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode)
//         }
//     }
//     BinarySearchTree.prototype.insertNode = function (prevNode, newNode) {
//         if (prevNode.key < newNode.key) {
//             if (!prevNode.left) {
//                 prevNode.left = newNode;
//             } else {
//                 this.insertNode(prevNode.left, newNode)
//             }
//         } else {
//             if (!prevNode.right) {
//                 prevNode.right = newNode;
//             } else {
//                 this.insertNode(prevNode.right, newNode)
//             }
//         }
//     }
//     BinarySearchTree.prototype.remove = function (key) {
//         var current = this.root,
//             parent = null,
//             isLeftChildren = true;
//         /** 开始进入循环寻找要删除的节点 */
//         while (current.key != key) {
//             parent = current;
//             if (key < current.key)   {
//                 isLeftChildren = true;
//                 current = current.left
//             } else {
//                 isLeftChildren = false;
//                 current = current.right;
//             }
//             if (current == null) {
//                 return false
//             }
//         }
//         /** 要删除的节点是叶子节点， 没有子节点 */
//         if (current.left === null && current.right === null) {
//             if (current = null) {
//                 this.root = null;
//             } else if (isLeftChildren) {
//                 parent.left = null;
//             } else {
//                 parent.right = null;
//             }
//         }
//         /**   要删除的节点有一个子节点                     */
//         else if (current.right === null) {
//             if (current === this.root) {
//                 this.root = current.left
//             }
//             else if (isLeftChildren) {
//                 parent.left = current.left
//             } else {
//                 parent.right = current.left
//             }
//         } else if (current.left === null) {
//             if (current === this.root) {
//                 this.root = current.right
//             }
//             else if (isLeftChildren) {
//                 parent.left = current.right
//             } else {
//                 parent.right = current.right;
//             }
//         }
//         /** 要删除的节点有两个子节点 */
//         else {
//             var successor = this.getSuccessor(current);

//         /** 获取后继节点 */
//             if (current === this.root) {
//                 this.root = successor;
//             } else if (isLeftChildren) {
//                 parent.left = successor;
//             } else {
//                 parent.right = successor;
//             }
//             successor.left = current.left;
//         }

//     }
//     BinarySearchTree.prototype.getSuccessor = function (delNode) {
//         var successor = delNode,
//             current = delNode.right,
//             successorParent = delNode;
//         while (current != null) {
//             successorParent = successor;
//             successor = current;
//             current = current.left;
//         }
//     /** 判断寻找的后继节点是否直接就是delNode的right 节点 */
//         if (successor != delNode.right) {
//             successorParent.left = successor.right;
//             successor.right = delNode.right;
//         }
//         return successor

//     }


// }
/**
 * 排序算法
 */
var Sort = function () {
    this.arrList = [];
};
Sort.prototype.insert = function (item) {
    this.arrList.push(item)
}
Sort.prototype.toString = function () {
     return this.arrList.join('-')
}
/** 交换2个位置的数据 */
Sort.prototype.swap = function (i, j) {
    var temp = this.arrList[i];
    this.arrList[i] = this.arrList[j];
    this.arrList[j] = temp;
 
}
Sort.prototype.baseSort = function () {
    var len = this.arrList.length;
    /**
     * 当i = len的时候，会取到最后一个数组元素，但是没有元素和最后一个元素比较，所以 i 的取值为 len - 1;
     * j = i+ 1; 当外层循环从下标 i= 0开始的时候， 内层循环从 j = 1开始，依次进行比较，所以内层循环可以取值到最后一个元素。
     */
    for (var i = 0; i < len -1; i++){
        for (var j = i + 1; j < len ; j++){
            if (this.arrList[i] > this.arrList[j]) {
                this.swap(i,j)
            }
        }
    }
   
}
Sort.prototype.normalBubbleSort = function () {
    var len = this.arrList.length;
    for (var i = 0; i < len - 1; i++){
        for (j = len - 1; j > i; j--) {
            if (this.arrList[j] < this.arrList[j - 1]) {
                this.swap(j-1, j)
            }
        }
        
    }
}
Sort.prototype.upgradBubbleSort = function () {
    var len = this.arrList.length,
        flag = true;
    for (i = 0; i < len - 1 && flag; i++) {
        flag = false;
        for (j = len - 1; j > i; j--){
            if (this.arrList[j - 1] > this.arrList[j]) {
                this.swap(j - 1, j);
                flag = true
            }
        }
    }
}
/** 外层循环从最后面的开始（反向循环），内层循环从第一个开始，内层循环的次数小于外层循环的次数 */
Sort.prototype.bubbleSort = function () {
    var len = this.arrList.length;
    for (var i = len - 1; i >= 0; i--){
        for (var j = 0; j < i; j++){
            if (this.arrList[j] > this.arrList[j + 1]) {
                this.swap(j, j+1)
            }
        }

    }
}
/**
 *  申明一个变量 min 来记录最小元素的下标值；刚开始 假设最小元素的下标值为0；
 * 
 *  最小下标值的元素，arrlist[min]依次和arrlist的每个元素比较，如果后面的元素M，小于之前这个元素，那此时min = M对应的下标， m就为最小值
 */
Sort.prototype.selectSort = function () {
    var len = this.arrList.length,
        min;
    for (var j = 0; j < len - 1; j++) {
        min = j;
        for (var i = min + 1; i < len; i++){
            if (this.arrList[min] > this.arrList[i]) {
                min = i
            }
            this.swap(min, j)
        }
    }
    
}
/**
 *  i 
 *  j 
 */
Sort.prototype.insertSort = function () {
    var len = this.arrList.length;
    // 外层循环，从第一个位置开始获取数据，向前面局部有序进行插入
    for (var i = 1; i < len; i++) {
        var temp = this.arrList[i],
            j = i;
        // 内层循环，获取i 位置的元素，和前面的数据依次进行比较
        while (this.arrList[j - 1] > temp && j > 0) {
            this.arrList[j] = this.arrList[j - 1];
            j--
        }
        // 将J位置的数据，放置到temp就OK 
        this.arrList[j] = temp
    }
}
Sort.prototype.shell = function () {
    var length = this.arrList.length,
        gap = Math.floor(length / 2);
    
    while (gap >= 1) {
        for (var i = gap; i < length; i++) {
            var temp = this.arrList[i],
                j = i;
            while (this.arrList[j - gap] > temp && j > gap - 1) {
                this.arrList[j] = this.arrList[j - gap] 
                j -= gap;
            }
            this.arrList[j] = temp;
        }
        gap = Math.floor( gap / 2)
    }

}
/*
 *  left right 为对应位置元素的索引
    swap为交换两个变量的方法；
 * 
 */
Sort.prototype.getMedian = function (left,right) {
    var center = Math.floor((left + right / 2))
    if (this.arrList[left] > this.arrList[center]) {
        this.swap(left, center)
    }
    if (this.arrList[center] > this.arrList[right]) {
        this.swap(center,right)
    }
    if (this.arrList[left] > this.arrList[right]) {
        this.swap(left,right)
    }
    // 将center位置换到right - 1 的地方
    this.swap(center, right - 1);
    return this.arrList[right - 1]
}
Sort.prototype.quickSort = function () {
    this.quick(0,this.arrList.length - 1)
}
Sort.prototype.quick = function (left,right) {
/** 结束条件 */
    if (left >= right) return;
    var centre = this.getMedian(left, right);
    var i = left,
        j = right - 1;
    while (true) {
        while (this.arrList[++i] < centre) { };
        while (this.arrList[--j] > centre) { };
        if (i < j) {
            this.swap(i, j)
        } else {
            break
        }
    }
    /**将中间数放在合适的位置， i的位置 */
    this.swap(i, right - 1)
    this.quickSort(left, i - 1);
    this.quickSort(i+1,right)
}
var sortList = new Sort();
sortList.insert(12);
sortList.insert(222);
sortList.insert(32);
sortList.insert(0.2);
sortList.insert(82);
sortList.insert(2);
sortList.insert(882);

//sortList.normalBubbleSort();
sortList.bubbleSort()
console.log(sortList);