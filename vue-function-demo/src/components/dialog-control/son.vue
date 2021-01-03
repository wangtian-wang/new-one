<template>
  <div class="children">
    <button @click="dialogVisible = true">点击展示children弹框</button>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      ref="homeGoods2"
    >
      <span>from son</span>
      <span slot="footer" class="dialog-footer">
        <button @click="dialogVisible = false">取 消</button>
        <button type="primary" @click="dialogVisible = false">确 定</button>
      </span>
    </el-dialog>
    <br />
    <br />
    <grand-son></grand-son>
  </div>
</template>

<script>
import GrandSon from './grand-son';
import modalMap from '../../utils/dialog/modal-config';
import createSingleModelControl from '../../utils/dialog/index';
import { api2 } from '../../api/api';
const modalControl = createSingleModelControl('home');
export default {
  name: 'Son',
  components: {
    GrandSon
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {
    var modalList = modalMap.home.modalList;
    this.initApi(api2, modalList[1]);
  },
  methods: {
    initApi(apiName, modalItem) {
      apiName(modalItem).then(res => {
        console.log('api2 is running');

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
