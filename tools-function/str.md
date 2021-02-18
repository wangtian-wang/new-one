

export default {
   queryUrlParams : ( url) => {
        let askMarkIndex = url.indexOf('?'),
           hashMarkIndex = url.indexOf('#'),
           askText = '',
           hashText = '',
           obj = {};
           hashMarkIndex = hashMarkIndex === -1 ?  url.length : null;
           hashText = url.substring(hashMarkIndex + 1);
           if ( askMarkIndex > -1) {
               askText = url.substring(askMarkIndex + 1, hashMarkIndex)
           }
           hashText.length > 0 ? obj['HASH'] = hashText : null;
           if (askText) {
               askText.split('&').forEach( item => {
                   let arr = item.split('=');
                    obj[arr[0]] = arr[1]
               })
           }

           return obj;
         
    },
    formatTime : ( template = `{0}年{1}月{2}日{3}时{4}分{5}秒`) => {
        const time = ( ) => {
            let arr = template.match(/\d+/g);
            return template.replace(/\{(\d+)}/g, (_, n) => {
                let item = arr[n] || '0';
                item.length < 2 ? item  = '0' + item : null;
                return item;
            })
        }
        String.prototype.formatTime = time;
    
    }
}
/**
 *  箭头函数没有this指向，总是指向他的父亲， 所以不能用箭头函数
 * @param {*} template 
 */

function formatTime ( template = `{0}年{1}月{2}日{3}时{4}分{5}秒`) {
    function time  ( )  {
        let arr = this.match(/\d+/g); // 谁调用这个函数， this就是指向谁
        return template.replace(/\{(\d+)}/g, (_, n) => {
            let item = arr[n] || '0';
            item.length < 2 ? item  = '0' + item : null;
            return item;
        })
    }
    String.prototype.formatTime = time;
}
let time = '2121-3-11 12:10:12';
formatTime()
console.log(time.formatTime('{0}年{1}月{2}日'));

/**

 *  正则格式化URL
 *  @param {*} template 
    */

```javascript
​```
( proto => {
function regFormatTime () {
	let obj = {};
 	this.replace(/([^?=&#]+)=([^?=&#])+)/g, (-, key,value) => {
obj[key] = value;
this.replace(/#([^?=&#]+)/g, (-, hash) => {
obj['HASH'] = hash
})
}
}
})(String.prototype)
```



##  randomVerifyCode

```js
 function codeGenerator() {
   let area = '0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm',
       codeText = '';
   while (codeText.length < 4) {
     let ran = Math.round(Math.random() * (61 - 0) + 0),
         char = area.charAt(ran);
     if ( !codeText.toUpperCase().includes(char.toUpperCase())) {
       codeText = char
     }
   }
 }
```

