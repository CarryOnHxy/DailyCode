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
    view:'',
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
        B2.不是'='号
              将操作符和操作数入栈
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
    console.log(typeof (this.data.view));
    if (typeof tData.val == 'number') {
      this.setData({
        view: this.limit(this.data.view += tData.val)
      })
      return;
    }
    if(tData.val=='.'&&view.indexOf('.')==-1){
        this.setData({
          view: this.limit( this.data.view += tData.val)
        })
    }
  },
  judgeOp(tData){
    if (tData.type == 'operator') {
      var str = this.data.view;
      var nums = this.data.nums;
      var res = null;
      if (str) {
        if (tData.val == '=' && nums.length == 1) {
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
            view: this.limit(res + '',true),
            operators: [],
            nums: []
          })
          return;
        }
        if(tData.val!='='){
          var num = str * 1;
          nums.push(num);
          this.data.operators.push(tData.val);
          this.setData({
            view: '',
            nums: nums,
            operators: this.data.operators
          })
        }

      }
    }
  },
  /* 判断其他功能键 
      取反键
      清除键
      退格键
  */
  judgeOt(tData){
    if(tData.type=='other'){
      switch(tData.val){
        case '±' :
        if(tData.val!='0'){
          var view =  this.data.view*-1+'';
          this.setData({ view: view });
        }
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
  },
  /* 限制输入位数为7位 
        isPoint为true代表需要
        解决0.1+0.2的精度问题，一句代码就为了解决一个问题。。。。需改善
  */
  limit(str,isPoint){
    return isPoint?(Math.round(str*1*10)/10)+'':str.substr(0,7);
  }
}

)