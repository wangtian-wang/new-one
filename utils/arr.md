## 数组常见的方法汇总
##### 数组分块
```
const arrChunk = function(arr, size = 1) {
    let arrResult = [],
        tempArr = [];
    if (!Array.isArray(arr)) return;
    if (Array.isArray(arr) && arr.length === 0) {
        return []
    }
    arr.forEach(item => {
        if (tempArr.length === 0) {
           arrResult.push(tempArr)
        }
        tempArr.push(item)
        if (tempArr.length === size) {
            tempArr = []
        }
    })
    return arrResult;
}

```