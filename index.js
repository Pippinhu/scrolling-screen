Page({
  data: {
    orientation:'right', //滚动方向
    moveDistance:0,//初始滚动距离
    movePace:0.1, //滚动速度
    size:30,
    text:'可以滚动',
    interval:5 //时间间隔
  },
  onShow: function () {
    console.log(this)
    // var that=this;
    var moveLength = this.data.size * this.data.text.length //文字长度
    var windowWidth=wx.getSystemInfoSync().windowWidth; 
    this.setData({
      moveLength:moveLength,
      windowWidth:windowWidth
    });
    this.moveAcross();//水平滚动一行字
  },

  moveAcross:function(){
    var that=this;
    console.log(this.data.moveDistance)
    var moveInterval=setInterval(function(){
      if (-that.data.moveDistance < that.data.moveLength){
        that.setData({
          moveDistance: that.data.moveDistance-that.data.movePace,
        })
      }
      else{
        clearInterval(moveInterval);
        that.setData({
          moveDistance: that.data.windowWidth
        });
        that.moveAcross()
      }
    }, this.data.interval);
  
  }
})

