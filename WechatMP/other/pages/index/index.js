//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    countries:['美国','中国','日本'],
    sports:[['广东省','江苏省','浙江省'],['广州市','苏州市','温州市'],['越秀区','姑苏区','鹿城区']]
  },
  clickPicker(e){
    console.log(e);
  },
  canclePicker(e){
    console.log('i am canceling picker',e);
  },
  columnchange(e){
    console.log(e);
  },
  getDate(e){
    console.log(e);
  }
})
