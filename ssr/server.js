const vue = require('vue'),
    vueRender = require('vue-server-renderer'),
    koa = require('koa'),
    koaRouter = require('koa-router'),
    // render = vueRender.createRenderer(),
    fs = require('fs');
    // 读取本地html文件
const fileHtml = fs.readFileSync( './index.template.html','utf-8')
console.log(fileHtml);
    // 将本地HTML文件作为模板HTML文件
const render = vueRender.createRenderer({
    template:fileHtml // 对象里面的key为template，否则就不会渲染index.template.html
})
const server = new koa(),
    router = new koaRouter();

server.listen('3000', () => {
    console.log('server is ok');
})

const context = {
    title: 'vue-ssr'
}


router.get('(.*)', ctx => {
    const app = new vue({
        template: '<div> hello try ssr success ！！！！ </div>'
    })
    render.renderToString(app, context, (err, html) => {
        if (err) throw err;
        ctx.body = html
    });
   
})
server.use(router.routes())




