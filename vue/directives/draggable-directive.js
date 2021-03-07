

import Vue from 'vue';

Vue.directive('dialogDrag', {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header');
    const dragDom = el.querySelector('.el-dialog');
    const screenWidth = document.body.clientWidth;
    //弹框可拉伸最小宽高
    let minWidth = 400;
    let minHeight = 300;
    dialogHeaderEl.style.cssText += ';cursor:move;';
    dragDom.style.cssText += ';margin:0;top:200px;left:' + parseInt(screenWidth / 4) + 'px;width:' + parseInt(screenWidth / 2) + 'px;';
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = (function() {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr];
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr];
      }
    })();
    // const ofw = sty(dragDom, 'width');
    // console.log('ofw22222===', ofw);
    window.addEventListener('resize', () => {
      const screenWidth = document.body.clientWidth;
      const ofw = sty(dragDom, 'width');
      let ofwidth = ofw === '50%' ? (screenWidth * 50) / 100 : parseInt(ofw);
      // console.log('screenWidth222===', screenWidth);
      // console.log('ofw===', ofw);
      dragDom.style.cssText += ';left:' + parseInt((screenWidth - ofwidth) / 2) + 'px;';
    });
    // 拖拽
    dialogHeaderEl.onmousedown = e => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;
      const screenWidth = document.body.clientWidth; // body当前宽度
      const screenHeight = document.documentElement.clientHeight; // 可见区域高度(应为body高度，可某些环境下无法获取)
      const dragDomWidth = dragDom.offsetWidth; // 对话框宽度
      const dragDomheight = dragDom.offsetHeight; // 对话框高度
      const minDragDomLeft = dragDom.offsetLeft;
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
      const minDragDomTop = dragDom.offsetTop;
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight;

      // 获取到的值带px 正则匹配替换
      let styL = sty(dragDom, 'left');
      let styT = sty(dragDom, 'top');

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
      } else {
        styL = +styL.replace(/\px/g, '');
        styT = +styT.replace(/\px/g, '');
      }

      document.onmousemove = function(e,dom) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        // console.log(minDragDomLeft, maxDragDomLeft);
        // console.log(minDragDomTop, maxDragDomTop);
        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
      };

      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    //拉伸
    let resizeEl = document.createElement('div');
    dragDom.appendChild(resizeEl);
    //在弹窗右下角加上一个10-10px的控制块
    resizeEl.style.cursor = 'se-resize';
    resizeEl.style.position = 'absolute';
    resizeEl.style.height = '10px';
    resizeEl.style.width = '10px';
    resizeEl.style.right = '0px';
    resizeEl.style.bottom = '0px';
    //鼠标拉伸弹窗
    resizeEl.onmousedown = e => {
      const dragBody = el.querySelector('.el-dialog__body');
      const dialogFooterEl = el.querySelector('.el-dialog__footer');
      // 记录初始x位置
      const clientX = e.clientX;
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - resizeEl.offsetLeft;
      const disY = e.clientY - resizeEl.offsetTop;
      const startY = e.clientY;
      const startX = e.clientX;
      document.onmousemove = function(e,) {
        e.preventDefault(); // 移动时禁用默认事件
        const screenHeight = document.documentElement.clientHeight;
        const screenWidth = document.body.clientWidth; // body当前宽度
        let x = 0;
      
        if (e.clientX - startX > 0) {
          x =
            resizeEl.offsetLeft >= screenWidth - parseInt(resizeEl.style.width) - dragDom.offsetLeft
              ? screenWidth - dragDom.offsetLeft
              : e.clientX - disX + parseInt(resizeEl.style.width);
        } else {
          x = e.clientX - disX;
        }
        
        let y = 0;
        if (e.clientY - startY > 0) {
          //  向下拉 边界问题
          // console.log(111, e.clientY - disY);
          y =
            resizeEl.offsetTop >= screenHeight - parseInt(resizeEl.style.height) - dragDom.offsetTop
              ? screenHeight - dragDom.offsetTop
              : e.clientY - disY + parseInt(resizeEl.style.height);
        } else {
          //向上拉
          y = e.clientY - disY;
        }
        dragDom.style.width = x > minWidth ? `${x}px` : minWidth + 'px';
        dragDom.style.height = y > minHeight ? `${y}px` : minHeight + 'px';
        dragBody.style.height = parseInt(dragDom.style.height) - 60 - dialogHeaderEl.clientHeight - dialogFooterEl.clientHeight + 'px'; // 拖拽拉伸时 动态设置弹窗内容的高度，避免内容过多时，滚动条显示问题
      };
      //拉伸结束
      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});
//背景颜色
Vue.directive('bgcolor', function(dom, definition) {
  dom.style.background = definition.value;
});
