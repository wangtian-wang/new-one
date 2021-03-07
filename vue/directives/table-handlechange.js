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
