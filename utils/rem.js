

// 根据屏幕尺寸,来进行 HTML 字体大小的变动的设置
(function () {
    function resize() {
      var baseFontSize = 100, // 基准的换算比率
        designWidth = 750,
        deviceWidth = window.innerWidth,
        currentFontSize = (deviceWidth / designWidth) * baseFontSize;
      document.querySelector('html').style.fontSize = currentFontSize + 'px';
    }
    window.onresize = function () {
      resize();
    };
  
    document.addEventListener('DOMContentLoaded', resize);
  })();
  