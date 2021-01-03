<template>
  <div class="parent">
    <button @click="dialogVisible = true">点击展示grandson弹框</button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      ref="homeGoods1"
    >
      <span>from grand-son</span>
      <span slot="footer" class="dialog-footer">
        <button @click="dialogVisible = false">取 消</button>
        <button type="primary" @click="dialogVisible = false">确 定</button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import modalMap from '../../utils/dialog/modal-config';
import createSingleModelControl from '../../utils/dialog/index';
import { api1 } from '../../api/api.js';
const modalControl = createSingleModelControl('home');
export default {
  name: 'GrandSon',
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {
    const modalList = modalMap.home.modalList;
    this.initApi(api1, modalList[0]);
  },
  methods: {
    initApi(apiName, modalItem) {
      apiName(modalItem).then(res => {
        console.log('api1 is running');
        modalControl.add(modalItem, {
          backShow: res.backShow,
          handler: () => {
            this.dialogVisible = true;
          }
        });
      });
    }
  }
};
</script>

<style></style>
