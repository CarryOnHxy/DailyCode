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
    功能：注册路由
    A.引入官方路由组件
    B.引入参与路由组件
    C.注册路由
    D.暴露给入口JS
*/
/* 注意！！！
  注册路由组件其父容器不能是View
*/
const Home = require('./Home');
const List = require('./List');
export default class Navigation extends Component {
  render() {
      const Route = createStackNavigator({
        Home,
        List
      },{
        initialRouteName:'Home'//设置默认首页,默认为导航栈顶
      })
    return (
        <Route />//父容器不能是View
    );
  }
}

module.exports = Navigation 


