import modalMap from './modal-config';
import { getAllModalList } from '../utils/index';
class ModalControl {
  constructor(type) {
    this.type = type;
    this.modelFlagMap = {};
    this.modelList = getAllModalList(modalMap[this.type]);
  }
  add(modelItem, infoObj) {
    this.modelFlagMap[modelItem.name] = {
      id: modelItem.id,
      level: modelItem.level,
      frontShow: modelItem.frontShow,
      backShow: modelItem.backShow,
      handler: infoObj.handler
    };
    this.preCheck();
  }

  preCheck() {
    if (this.modelList.length === Object.keys(this.modelFlagMap).length) {
      this.notify();
    }
  }
  notify() {
    /**
     * hightLevelModal 是一个数组元素，决定哪个弹框优先级高，先显示
     *  level 决定哪个弹框的优先级高，最先显示
     *  name 字段，是为了方便找到对应的dialog组件
     */
    const hightLevelModal = Object.values(this.modelFlagMap)
      .filter(item => item.frontShow)
      .reduce(
        (prev, elem) => {
          return elem.level > prev.level ? elem : prev;
        },
        { level: -1 }
      );
    console.log(
      hightLevelModal,
      'hightLevelModalhightLevelModalhightLevelModal'
    );
    hightLevelModal.handler && hightLevelModal.handler();
  }
}
const controlTypeMap = {};
function createSingleModelControl(type) {
  if (!controlTypeMap[type]) {
    controlTypeMap[type] = new ModalControl(type);
  }
  return controlTypeMap[type];
}
export default createSingleModelControl;
