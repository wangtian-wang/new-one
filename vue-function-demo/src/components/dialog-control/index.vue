<template>
  <div class="dialog">
    <button @click="dialogVisible = true">点击展示弹框</button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span> form index</span>
      <span slot="footer" class="dialog-footer">
        <button @click="dialogVisible = false">取 消</button>
        <button type="primary" @click="dialogVisible = false">确 定</button>
      </span>
    </el-dialog>
    <Son />
  </div>
</template>

<script>
import Son from './son';
import modalMap from '../../utils/dialog/modal-config';
import createSingleModelControl from '../../utils/dialog/index';
import { api3 } from '../../api/api';
const modalControl = createSingleModelControl('home');
export default {
  name: 'HomePage',
  data() {
    return {
      dialogVisible: false
    };
  },
  components: { Son },
  created() {
    var modalList = modalMap.home.modalList;
    this.initApi(api3, modalList[2]);
  },
  methods: {
    initApi(apiName, modalItem) {
      apiName(modalItem).then(res => {
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
