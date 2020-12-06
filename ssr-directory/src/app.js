import Vue from 'vue';
import App from './App.vue';
/** 每次请求都是一个新的vue实例对象，每个程序是相互独立的实例对象， 互相不影响 */
export function createApp () {
    const app = new Vue({
        render :  h =>  h(App)
    })
    return {
        app
    }
}