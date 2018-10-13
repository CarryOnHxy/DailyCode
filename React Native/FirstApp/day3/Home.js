/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react"
import { StyleSheet, Text, View,FlatList,Image,ActivityIndicator,TouchableOpacity} from "react-native"
import {createStackNavigator} from 'react-navigation'
/* 暴露组件 
    功能:使用FlatList来展示鬼故事API数据
    A.使用fetch请求数据
    B.将数据绑定在state上
    C.使用FlatList展示数据
    D.使用导航单击传递ID值给详情页面
*/

export default class Home extends Component {
    static navigationOptions = {
        headerTitle:'首页'
    }
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:true,
            page:1
        }
    
        this.getData();
    }

    renderItem=({item})=>{
        return(
        <TouchableOpacity style={style.wrap} onPress={()=>this.props.navigation.navigate('List',{id:item.link})}>
            <Image source={{uri:item.img}} style={[{width:100,height:100},style.img]}/>
            <View style={style.textCon}>
                <Text>{item.title}</Text>
                <Text numberOfLines={5}>{item.desc}</Text>   
            </View>
        </TouchableOpacity>)
    }
    ItemSeparatorComponenting(){
        return(
            <View style={{height:10,backgroundColor:'#fff'}}></View>
        )
    }
    onRefresh=()=>{
        this.setState({
            data:[],
            page:++this.state.page
        },()=>this.getData())
        //利用回调函数解决setState异步更新state的
    }
    onEndReached=()=>{
        this.getData();
    }
    getData(){
        var url = 'http://route.showapi.com/955-1'+
                  '?showapi_appid=76514&showapi_sign=141e0bd82afa4089b5d76b2db2029b95'+
                  '&page='+this.state.page+'&type=dp';
        var type = {method:'GET'};
        fetch(url,type).then(response=>response.json()).then(responseJson=>{
            if(responseJson.showapi_res_code ==0){
                // alert('数据已经请求到了');
                this.setState({
                    data:this.state.data.concat(responseJson.showapi_res_body.pagebean.contentlist),
                    isLoading:false,
                    // page:this.state.page
                })
                // alert(this.state.data)
            }   
        })
    }
    render() {
        return (
        <View>
                 <ActivityIndicator animating={this.state.isLoading}/>
                 <FlatList 
                    style={style.con}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    // ItemSeparatorComponent={this.ItemSeparatorComponenting}
                    // refreshing={false}
                    // onRefresh={this.onRefresh}
                    // onEndReached={this.onEndReached}
                    ></FlatList>
                </View>
        )
    }

}
const style = StyleSheet.create({
    wrap:{
        flexDirection:'row'
    },
    img:{
        flex:1
    },
    textCon:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'   
    }
})

console.disableYellowBox = true
module.exports = Home



