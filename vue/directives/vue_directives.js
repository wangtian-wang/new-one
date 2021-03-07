// 定义一个指令JS文件

export default {
    selfDirective: {
        inserted (el, bindings, vnode) {
            // type your code
        },
        unbind (el, bindings, vnode) {
            // type your code
        }
    }
}

// 下面是模拟用指令的组件 app.vue 文件里面使用引入的指令文件，并且注册
import selfDirective from 'vue-directives';
export default {
    data () {
        
    },
    directives: {
        selfDirective
    }
}