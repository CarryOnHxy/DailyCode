// pages/caculator/caculator.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    btnInfo:[[
      { val: '←' ,type:'other'},
      { val: 'C' ,type:'other'},
      { val: '±' ,type:'other'},
      { val: '/' ,type:'operator'}
    ],[
      { val: 7 },
      { val: 8 },
      { val: 9 },
      { val: '*', type: 'operator'}
    ],[
      { val: 4 },
      { val: 5 },
      { val: 6 },
      { val: '-', type: 'operator'}
    ],[
      { val: 1 },
      { val: 2 },
      { val: 3 },
      { val: '+', type: 'operator'}
    ],[
      { val: 0 ,  type: 'zero'},
      { val: '.' },
      { val: '=', type: 'operator'}
    ]],
    view:'0',
    nums:[],
    operators:[]
  },
  /* 点击按钮触发事件之后
    A.判断是否点击的是数字按钮
      1 将其显示在界面上
    B.判断是否运算符
      判断view不为空
      入队
      B1.判断是否'='号
        I.遍历运算符
          I.利用中缀表达式的思想整理操作数与操作符
              出队2次操作数数组
          II.多路分支执行不同运算
              改变view
    D.判断是否其他功能运算符
      退格符
      清空符
      负号
   */
  click(e) {
    var tData = e.target.dataset;
    this.judgeNum(tData)
    this.judgeOp(tData)
    this.judgeOt(tData);
  },
  /* 判断是否数字以及小数点 */
  judgeNum(tData){
    var view = this.data.view;
    if (typeof tData.val == 'number') {
      this.setData({
        view: this.data.view += tData.val
      })
      return;
    }
    if(tData.val=='.'&&view.indexOf('.')==-1){
        this.setData({
          view: this.data.view += tData.val
        })
    }
  },
  judgeOp(tData){
    if (tData.type == 'operator') {
      var str = this.data.view;
      var nums = this.data.nums;
      var res = null;
      if (str) {
        if (tData.val == '=') {
          this.data.nums.push(str * 1);
          this.data.operators.forEach((o) => {
            var a = this.data.nums.shift();
            var b = this.data.nums.shift();
            console.log(a, b);
            switch (o) {
              case '+':
                 res = a + b;
                break;
              case '-':
                 res = a - b;
                break;
              case '*':  res = a * b;
                break;
              case '/':  res = a / b;
            }
            this.data.nums.unshift(res);
          })
          this.setData({
            view: res + '',
            operators: [],
            nums: []
          })
          return;
        }
        this.data.operators.push(tData.val);
        var num = str * 1;
        nums.push(num);
        this.setData({
          view: '',
          nums: nums,
          operators: this.data.operators
        })
      }
    }
  },
  judgeOt(tData){
    if(tData.type=='other'){
      switch(tData.val){
        case '±' :
            var view = '-'+this.data.view;
            this.setData({view:view});
            break;
        case 'C':
            this.setData({
              view: '',
              nums: [],
              operators: []
            })
            break;
        case '←':
          var view = this.data.view.substr(0,this.data.view.length-1);
          this.setData({view:view})
      }
    }
  }
}

)