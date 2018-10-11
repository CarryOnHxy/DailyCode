/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react"
import { StyleSheet, Text, View} from "react-native"
import {createStackNavigator} from 'react-navigation'
/* 暴露组件 
    功能：参与路由的组件
*/

export default class Home extends Component {
    static navigationOptions = {
        headerTitle:'首页'
    }
    render() {
        return (
          <View>
            <Text style={{justifyContent:"center",fontWeight:"bold",fontSize:30}}>我是主页</Text>
            {/* 跳转页面且传参ID */}
            <Text onPress={()=>this.props.navigation.navigate('OtherPage',{id:1})}>点击我去其他路由页面</Text>
          </View>
        );
  }
}
module.exports = Home



