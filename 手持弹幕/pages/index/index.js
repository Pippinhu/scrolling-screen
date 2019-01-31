//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    color:'#222324',
    text:"哈哈哈哈",

    //走马灯参数
    orientation: 'right', //滚动方向
    moveDistance: 0,//距离屏幕边缘距离
    movePace: 2, //滚动速度
    size: 40,
    interval: 10, //时间间隔
    bulletWidth:335,
    
    //控制速度
    items: [
      {value: 'USA', name: '快' },
      {value: 'CHN', name: '中'},
      {value: 'BRA', name: '慢' },
    ],

    //控制颜色
    colors: [
      { name: '#222324', value: '#222324', checked: 'true' },
      { name: '#FB5756',value: '#FB5756', },
      { name: '#2CC53A' ,value: '#2CC53A' },
      { name: '#6591F5',value: '#6591F5' },
    ]
  },

  radioChange(e) {
    var speed = this.data.items;
    for (var i = 0; i < speed.length; i++) {
      if(speed[i].value==e.detail.value){
        speed[i].checked =true;
      }
      else{ speed[i].checked = false}
    }
    this.setData({
      items: speed
    })
  },

  radioColorChange(e) {
    var color=this.data.color;
    this.setData({
     color:e.detail.value
   })
  },
  
  onShow: function () {
    var moveLength = this.data.size * this.data.text.length //文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    this.setData({
      moveLength: moveLength,
      windowWidth: windowWidth
    });
    console.log(moveLength)
    console.log(windowWidth)
    this.moveAcross();//水平滚动一行字    
  },

  moveAcross: function () {
    var that = this;
    var moveInterval = setInterval(function () {
      if (-that.data.moveDistance < that.data.moveLength) {
        that.setData({
          moveDistance: that.data.moveDistance - that.data.movePace, //更新距离屏幕边缘距离
        })
        
      }
      else {
        clearInterval(moveInterval);
        that.setData({
          moveDistance: that.data.windowWidth,
        });
        that.moveAcross()
      }
    }, this.data.interval);
  }
})
