// pages/dice/dice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'点击按钮开始游戏',
    diceOne: {url:'./images/1-point.png',point:1},
    diceTwo: {url:'./images/1-point.png',point:1},
    diceThree: {url:'./images/1-point.png',point:1},
    imgUrl:[
      {url:'./images/1-point.png',point:1},
      {url:'./images/2-point.png',point:2},
      {url:'./images/3-point.png',point:3},
      {url:'./images/4-point.png',point:4},
      {url:'./images/5-point.png',point:5},
      {url:'./images/5-point.png',point:6}
    ],
    state:false,
    btnClass:'btnStart',
    timer:null,
    btnText:'摇一摇'
  },
  /* 点击按钮开始摇骰子
        设置游戏信息
        标题名 初始骰子图片 按钮文字 骰子状态 点数 按钮样式 游戏状态
    A.点击开始摇骰子
      1.点击按钮进入计时器
        产生随机数，生成随机骰子图片
        设置游戏状态
    B.再次点击停止摇骰子，并且计算所有的点数之和
      1.清除计时器
      2.计算所有点数之和
      3.更新游戏信息
   */

  click(){
    var that = this;
    var currentState = !that.data.state;
    if (currentState){
      that.data.state = currentState;
      that.data.timer = setInterval(()=>{
        that.shuffle();
        that.setData({
          title: '游戏进行中',
          diceOne: that.data.imgUrl[0],
          diceTwo: that.data.imgUrl[1],
          diceThree: that.data.imgUrl[2],
          btnClass: 'btnGaming',
          btnText:'正在进行中'
        })
      },1000/30)
      return;
    }
    // console.log('来到false');
    clearInterval(that.data.timer);
    /* 计算所有点数之和 */
    var totalPoint = that.data.diceOne.point + that.data.diceTwo.point + that.data.diceThree.point;
    that.setData({
      title: '您摇到的点数为' +totalPoint,
      state:currentState,
      btnClass: 'btnStart',
      btnText:'再来一次'
    })
  },
  shuffle(){
    this.data.imgUrl.sort((a,b)=>{
      return Math.round(Math.random())?1:-1;
    })
  }
})