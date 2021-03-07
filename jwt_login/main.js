import router from './router';
const whiteList = ['user', 'news']
router.beforeEach(async (to, from, next) => {
    let res = await this.$store.dispatch('validate');
    if (whiteList.includes(to.name)) {
        next();
    } 
    if (res) {
        // 登录过了 但是还要访问登录页面 直接跳转到首页
        if (to.name === 'login') {
          next('/home')
        } else {
            next()
        }
    } else {
        // 用户没有登录 不能访问需要登录的页面
        let isNeedLogin = to.matched.some(item => item.meta.needLogin)
        if (isNeedLogin) {
            next('/login')
        } else {
            next();
        }
    }
})