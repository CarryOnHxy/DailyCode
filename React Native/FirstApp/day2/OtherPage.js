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
export default class OtherPage extends Component {
    static navigationOptions ={
        headerTitle:'其他页面',
        headerBackTitle:null
    }
   
  render() {
    const {navigation} = this.props;
    const id = navigation.getParam('id');
    return (
      <View>
        <Text style={{justifyContent:"center",fontWeight:"bold",fontSize:30}}>我是其他页面</Text>
        <Text onPress={()=>this.props.navigation.navigate('Home')}>点击回到主页</Text>
        <Text>传参的ID为{id}</Text>
      </View>
    );
  }
}
module.exports = OtherPage



