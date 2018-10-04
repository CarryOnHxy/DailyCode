// pages/shortStory/shortStory.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: true,
    isAll: true,
    page: 1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // clickItem:function(e){
  //   var id = e.currentTarget.id;
  //   var list = this.data.list;
  //   console.log(list);
  //     wx.navigateTo({
  //       url: '../detail/detail?id='+id+'&img='+list[id].img+'&title='+list[id]          .title,
  //     })
  // },
  onLoad: function (options) {
    wx.showLoading({
      title: '正在请求鬼故事数据',
    })
    app.requestData({
      type: 'dp',
      page: 1
    }, this);
    wx.hideLoading();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 
   * 触顶刷新
   * A.将原数据清空
   * B.请求页数page+1
   */
  onPullDownRefresh: function () {
    var page = this.data.page + 1;
    this.setData({
      list: [],
      page: page
    })
    app.requestData({
      type: 'dp',
      page: page
    }, this)
  },
  /**
   * 页面上拉触底事件的处理函数
   * 触底刷新
   * A.显示正在加载信息
   * B.page+1
   * C.请求数据
   */
  onReachBottom: function () {
    var page = this.data.page + 1;
    this.setData({ isLoading: false, page: page });
    app.requestData({
      type: 'dp',
      page: page
    }, this);
  }
})