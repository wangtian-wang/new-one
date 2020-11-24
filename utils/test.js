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