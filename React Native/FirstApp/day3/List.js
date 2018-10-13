/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react"
import { StyleSheet, Text, View,ScrollView} from "react-native"
import {createStackNavigator} from 'react-navigation'
/* 暴露组件 
    功能：显示鬼故事页面详情
    A.获取首页传来的ID
    B.请求数据并且绑定
    D.展示数据
*/
export default class List extends Component {
    static navigationOptions ={
        headerTitle:'其他页面',
        headerBackTitle:null
    }
    constructor(){
        super();
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        this.state={id}
        this.test = 'test'
        alert(this.state.id)
    }
    getData=()=>{
        alert(this.test)
        var url = 'http://route.showapi.com/955-2'+
                  '?showapi_appid=76514&showapi_sign=141e0bd82afa4089b5d76b2db2029b95'+
                  '&page=1&id='+this.id;
        var type = {method:'GET'};
        fetch(url,type).then(response=>response.json()).then(responseJson=>{
            if(responseJson.showapi_res_code ==0){
                var text = responseJson.showapi_res_body.text.replace(/&nbsp;/g,"");
                this.setState({
                    text
                })
            }   
        })
    }
    render() {
        /* 获取页面Id 固定写法，固定死了
            render里面的this与其他函数里面的this是不一样的,
            render里面的this可以取到thi.props,可以设置成员属性
        */
        const {navigation} = this.props;
        const id = navigation.getParam('id');
        this.id = id;
        this.getData();
      return (
        <ScrollView>
            <Text>{this.state.text}</Text>
        </ScrollView>
      );
    }
}
module.exports = List
