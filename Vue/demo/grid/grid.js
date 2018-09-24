/* 不搜索时显示原数据，搜索时显示搜索数据，搜素数据为空时显示提示
    I.是否搜索
        0 显示原数据
        1 搜索结果是否为空
            0 显示搜索结果
            1 显示为空提示
    II.升序与降序
        A点击字段触发各自的排序事件
        B修改排序状态，进行排序
*/
var app = new Vue({
    el:'#app',
    data:{
        key:null,
        nameAsc:false,
        powerAsc:false,
        gridData:[
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }]
    },
    computed:{
        result(){
            console.log('computing');
            var key = this.key;
            var gridData = this.gridData;
            if(key){
                return gridData.filter(function(v){
                    return v.name.indexOf(key)!=-1||(v.power+'').indexOf(key)!=-1
                })
            }
      
        }
    }
})