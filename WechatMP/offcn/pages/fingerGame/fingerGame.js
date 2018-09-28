// pages/fingerGame/fingerGame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fingerInfo:[
      { imgUrl: './images/jiandao.png', winner:'jiandao',loser:'bu'},
      {imgUrl:'./images/shitou.png',winner:'shitou',loser:'jiandao'},
      {imgUrl:'./images/bu.png',winner:'bu',loser:'shitou'}
    ],
    userUrl: './images/wenhao.png',
    aiInfo:null,
    flag:true,
    timer:null,
    num:0,
    result:'VS'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /*  A.初始化数据
          手指信息
          文本提示信息
          用户出拳图片
          游戏开关状态
      B.启用计时器
          AI图片随机
      C.点击猜拳图片出拳触发点击事件
    
        和AI比较出拳大小
        改变用户出拳图片
        显示输赢信息
        游戏状态关闭
      D.点击再来一次游戏重新开始
   */
  onLoad: function (options) {
    this.start();
  },
  click:function(e){
    clearInterval(this.data.timer);
    if(this.data.flag){
      var userInfo = this.data.fingerInfo[e.target.id];
      var aiInfo = this.data.aiInfo;
      if (aiInfo.winner == userInfo.winner) {
        var result = '平局'
      } else {
        if (aiInfo.winner == userInfo.loser) {
          var result = '你赢了！！'
          this.data.num++;
        }
        else {
          var result = '你输了'
        }
      }
      this.setData({
        result: result,
        num: this.data.num,
        userUrl: userInfo.imgUrl,
        flag:false
      })
    }

  },
  again:function(){
    if(!this.data.flag){
      this.start();
      this.setData({
        userUrl: './images/wenhao.png',
        flag: true,
        num: this.data.num++,
        result: 'VS'
      })
    }

  },
  start:function(){
    var i = 0;
    var timer = setInterval(() => {
      var cur = ++i % 3;
      this.setData({
        aiInfo: this.data.fingerInfo[cur],
        timer: timer
      })
    }, 1000 / 30)
  }
})