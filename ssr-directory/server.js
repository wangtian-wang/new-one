const vue = require('vue'),
    vueRender = require('vue-server-renderer'),
    koa = require('koa'),
    koaStatic = require('koa-static'),
    koaRouter = require('koa-router'),
    path = require('path'),
    fs = require('fs');
// 读取打包后的服务端文件
const serverBundle = fs.readFileSync('.dist/server.boundle.js', 'utf-8');
// 读取打包后的index.template.html文件
const htmlBundle = fs.readFileSync( '../dist/index.template.html','utf-8');

// 创建渲染器
const render = vueRender.createBundleRenderer(serverBundle,{
    template:htmlBundle // 对象里面的key为template，否则就不会渲染index.template.html
})
const server = new koa(),
    router = new koaRouter();

server.listen('3000', () => {
    console.log('server is ok');
})

const context = {
    title: 'vue-ssr'
}


router.get('(.*)', async ctx => {
  ctx.body = await  render.renderToString();
   
})


server.use(koaStatic(path.resolve(__dirname, 'dist')))
server.use(router.routes())




