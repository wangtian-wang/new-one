import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MyUi from './components/index';
import './plugin/index';
// 可以单独对每个组件进行配置

// Vue.use(MyUi, {
//   components: ['MyButton', 'MyInput']
// });
Vue.use(MyUi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: {
    money: 1000
  },
  render: h => h(App)
}).$mount('#app');
