//app.js
App({
  
  globalData: {
    url: 'http://route.showapi.com/955-1?showapi_appid=76514&showapi_sign=141e0bd82afa4089b5d76b2db2029b95',
    detailUrl: 'http://route.showapi.com/955-2?showapi_appid=76514&showapi_sign=141e0bd82afa4089b5d76b2db2029b95'
  },
    /* 获取数据
    A.显示加载数据弹窗
    B.使用request获取数据
    B.请求数据失败
        设置失败提示
        跳出
    C.将其存入data(字符串拼接)
    D.结束加载弹窗
   */
  requestData(data, store, isDetail){
    var that = this;
   wx.request({
     url: isDetail?that.globalData.detailUrl:that.globalData.url,
     data: data,
     success: function (d) {
       if (d.data.showapi_res_body.ret_code==-1){
         store.setData({isAll:false})
         return;
       }
       var list = d.data.showapi_res_body;
       
       if(isDetail){
        list.text = list.text.replace(/&nbsp;/g, " ")
         store.setData({
           ...list
         })
         return;
       }
       console.log(list);
       store.setData({
         list: store.data.list.concat(list.pagebean.contentlist)
       })
     }
   })
  }
})