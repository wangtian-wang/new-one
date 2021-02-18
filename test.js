自定义可以按需引入的组件

组件的文件结构、
  dialog-comp
    index.js
            import comp from './dialog-comp';
            const install = (Vue）=> {
              if (install.installed) {
                return;
              }
              install.installed = true;

              Vue.component(Item.name, Item);
             }
           export default {
            install
           }; 
           关于这个install文件，这个文件是给组件提供注册的install函数， 当执行Vue.use（dialog-comp）的时候，执行的是这个函数
    main.vue
            主体的组件文件
    
    当这个库的名字叫做lib的时候， 使用这个库需要用的方法是Vue.use(lib);
       这个库也需要作为一个插件，提供install方法。
       而且这个install方法里面可以执行的事情很多，具体参考官网， 但是这个Vue.use()方法，必须在实例化vue之前执行。
       const install = function(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  components.map(item => {
    Vue.component(item.name, item);
  });

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });

  Vue.directive('draggable', draggable);
  Vue.directive('dialogDrag', dialogDrag);
  Vue.directive('dialogDragWidth', dialogDragWidth);
  Vue.directive('scroll', scroll);

  Vue.prototype.$Common = commonUtilCofig.commonFuncObject; // 代码处理通用类方法
  Vue.prototype.$Service = commonUtilCofig.serviceFuncObject; // 业务类通用方法
  Vue.prototype.$handleTableData = handleBtn;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
  // ...components
};



带有自增加表头选项的表格的
/*
2： 带有自增加表头表格组件的封装
 功能： 整体默认展示的是一个默认表头的表格，有一个按钮，点击之后，可以进行更加多的表头选择功能。
     代码设计如下：
	tab.vue:
		这个文件里面使用element-ui的table组件， 
		将所有的筛选选项提前定义好。
		用label来给表头赋值，用v-if来控制那些表头是否显示。
 		<el-table-column style="cursor: pointer" v-if="getInitColumnFuc('filteredTotal')" :label="$t('taggingManage.filterFinishPercent')" prop="filteredTotal">
                      <template slot-scope="scope">
                  	
               	      </template>
   </el-table-column>
  <btn-comp :labelList="labelList" @handleChangeColumn="ChangeColumn" :isStoreLocal="true" :localStoreKey="'labelTaskTableColumn'" :rowData="scope"></btn-comp> 
  子组件在接收到了数据之后， 进行处理
 
   data() {
     return{
      labelList: [
        {
          name: $t('taggingManage.filterFinishPercent')",
          value: 'filterFinishPercent',
          work: true,
          show: true
        },
         {
          name: $t('taggingManage.userName')",
          value: 'userName',
          work: true,
          show:false
        }
      ],
      changedLabelList: []
     }
   },
   methods: {
      getInitColumnFuc(columnName) {
      let flag;
      this.changedLabelList.forEach(item => {
        if (item.value === columnName) {
          flag = item.show;
        }
      });
      return flag;
    },
    ChangeColumn(data){
      this.changedLabelList = data
    }
   }


筛选按钮组件
  
    <div class="columnCell" v-for="(item, index) in showColumnList" :key="item + index">
            <el-checkbox ref="checkboxRef" v-show="item.work" v-model="item.show" :title="item.name" @change="handleShowColumnFunc">{{ item.name }}</el-checkbox>
     </div>
  props: {
    labelList: []
  }
  data(){
    return {
      showColumnList: [], // 表头字段options(用于展示)
      initialColumnList: []
    }
  }
  watch(){
      labelList: {
      handler(data) {
        this.showColumnList = JSON.parse(JSON.stringify(data));
        this.initialColumnList = JSON.parse(JSON.stringify(data));
      },
      immediate: true,
      deep: true
    },
  }
  methods: {
      handleShowColumnFunc() {
      let trueArr = [];
      let falseArr = [];
      let newArr = this.showColumnList.filter(item => item.work);
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].show) {
          trueArr.push(newArr[i]);
        } else {
          falseArr.push(newArr[i]);
        }
      }
      if (trueArr.length < 1) {
        this.$message(this.t('ui.common.reserveColumn'));
        this.showColumnList[0].show = true;
       
      }
      this.$emit('handleShowColumn', this.showColumnList);
    },
  }

*/
