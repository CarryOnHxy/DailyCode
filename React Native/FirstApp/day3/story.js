
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image,ScrollView,FlatList} from 'react-native';

//此页面展示故事列表，
//页面一加载 ->请求数据
//下拉刷新时 ->重新请求数据
//底部上拉/触底时， ->加载更多数据
//点击每一项时，跳转进入故事详情页面

//定义模块
export default class MyStory extends Component{
    getData =()=>{
        //此方法是去请求数据
        //在react-native中，类似于ajax的请求数据，使用 fetch函数
        //fetch(参数1 url请求的url地址，{参数2，method:'请求的方式'})
        /* 
        fetch(参数)
        .then(完成的回调函数)
        .catch(失败的回调函数)
        */
       alert('getData');
        formatterDateTime=()=> {
         var date = new Date()
         var month = date.getMonth() + 1
         var datetime = date.getFullYear()
           + ""// "年"
           + (month >= 10 ? month : "0" + month)
           + ""// "月"
           + (date.getDate() < 10 ? "0" + date.getDate() : date
             .getDate())
           + ""
           + (date.getHours() < 10 ? "0" + date.getHours() : date
             .getHours())
           + ""
           + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
             .getMinutes())
           + ""
           + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
             .getSeconds());
         return datetime;
       }
 
        const DataUrl='http://route.showapi.com/1700-2?showapi_appid=77184&showapi_sign=4e8700ea3af642c9a28358d80f499f8d&classifyId=1&page='+this.state.page+'&showapi_timestamp='+formatterDateTime();
        return fetch(DataUrl,{method:'GET'})
             
        .then((response)=>{
            //设置返回的数据格式
            return response.json();
        }).then((res)=>{
            //将得到数据赋值给data 用于遍历渲染
            
             this.setState({
                story:res.showapi_res_body.contentlist
             })
             alert(res.showapi_res_body.contentlist);
        }).catch((error)=>{
              //catch 捕获异常
              alert(error);
         }
            
        )
    }
 
   
    //构造函数内，继承Component,因为要使用state存储数据
    //构造函数内还要执行操作，初始化的时候就去请求数据，并渲染出来
    constructor(props){
        //继承父组件 ， 使用/初始化state
        super(props);
        this.state={
            story:[],
            page:1,
            isRefreing:false
        }

        //执行数据请求操作
       this.getData();
    }

	render(){
		return(<View>         
           <FlatList
             data={this.state.story}  
             renderItem={this.eachItem}>
            </FlatList>
           </View>
		)
    }
    
   //以下为函数方法
   
   //下拉刷新
   refreshData = ()=>{
       //请求一组新数据，可以是page++,也可以是随机取得page
   }


   //触底加载更多数据
   moreData =()=>{
      //请求数据，将请求到数据与原数据进行拼接，否则会衔接不上
   }


   //以下是渲染组件方法
     //每个列表的样式
   eachItem =({item})=>{
       alert('1');
       return (<TouchableOpacity>
              
               <Text>
                  {item.title}
                </Text>
            </TouchableOpacity>
       )
   }
    
     //分隔列表的样式
     separatorCom=()=>{
         return(
             <View>
                 <Text>
                     分割组件
                     </Text>
                 </View>
         )
     }





}


//定义样式
const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:"#eee"
	}

})


 //关闭黄色的警告消息
console.disableYellowBox = true;

module.exports = MyStory;