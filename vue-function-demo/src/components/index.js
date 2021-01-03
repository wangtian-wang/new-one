import MyButton from './my-button/button.vue';
import MyInput from './my-input/input.vue';
const MyUi = {};
const COMPONENTS = [MyButton, MyInput];
MyUi.install = function(Vue, options) {
  /**
   *  Vue.component();
   *  Vue.directive;
   *  Vue.filter
   *  options : 指的是在main.js中
   *  Vue.use(MyUi, {
        components: ['MyButton', 'MyInput']
      });传入的components

      对于组件来说，名字非常重要，所以一定给名字，且不能重复
   */
  // 检查在main里面使用的时候传进来的components 和导入进来的组件的名字是否相同
  if (options && options.components) {
    const components = options.components;
    components.forEach(comp => {
      COMPONENTS.forEach(Comp => {
        if (comp === Comp.name) {
          Vue.component(Comp.name, Comp);
        }
      });
    });
  } else {
    COMPONENTS.forEach(Comp => {
      console.log(Comp);
      Vue.component(Comp.name, Comp);
    });
  }
};

export default MyUi;
