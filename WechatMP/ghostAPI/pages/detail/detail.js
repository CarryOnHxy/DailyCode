const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
/* 点击收藏
      A.获取id
      B.获取已收藏缓存
      C.更新已收藏缓存
 */
collect:function(e){
  var id = e.currentTarget.id;
   wx.getStorage({
    key: 'ids',
    success: function(res) {
      var data = res.data;
      data.push(id);
      wx.setStorage({
        key: 'ids',
        data: data,
      })
    },
  })

},
  /**
   * 生命周期函数--监听页面加载
   *  A.获得ID 获取文章标题 获取文章图片 设置缓存
   * B.请求数据
   * C.数据渲染
   */
  onLoad: function (options) {
    var id = options.id;
    var img = options.img;
    var title = options.title.replace(/&nbsp;/g, "");
   wx.getStorage({
     key: 'ids',
     complete: function(res) {
       if(!res.data){
          wx.setStorage({
            key: 'ids',
            data: [],
          })
       }
     }
   })
    this.setData({
      id:id,
      title:title,
      img:img,
      page: 1
    });
    app.requestData({
      id:id,
      page: 1
    },this,true);
  },

})