/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import {TabNavigator,TabBarBottom} from "react-navigation"
/* 
    功能:实现选项卡底部选项卡功能
    步骤:
        A.引入Tab官方组件
        B.引入Tab选项卡所需的图片，页面
        C.设置Tab选项卡的配置
        D.将此组件暴露给入口文件
*/
const Home = require('./Home');
const OtherPage = require('./OtherPage');
const Tab1Pic =[require('./img/1.png'),require('./img/2.png')];
const Tab2Pic =[require('./img/3.png'),require('./img/4.png')];
/* 设置路由以及点击选项卡是图标显示 */
const SelectTab = {
    '首页':{
        screen:Home,
        navigationOptions:({})=>({
            tabBarIcon:({focused})=>(
                <Image source={!focused?Tab1Pic[0]:Tab1Pic[1]} style={{width:25,height:25}}/>
			)
        })
    },
    '其他页面':{
        screen:OtherPage,
        navigationOptions:({})=>({
            tabBarIcon:({focused})=>(
                <Image source={!focused?Tab2Pic[0]:Tab2Pic[1]} style={{width:25,height:25}}/>
            )
        })
    }
}
/* 设置路由其他属性 */
const TabOptions = {
    initialRouteName:'首页',//默认显示样式
    tabBarPosition:'bottom',
    tabBarComponent:TabBarBottom,//样式，可去掉
    tabBarOptions:{
        showIcon:true,
        activeTintColor:'green'
    }
}
const Tab = TabNavigator(SelectTab,TabOptions);
export default class TabNav extends Component {
    
    render() {
      return (
        <Tab />
      );
    }
}

console.disableYellowBox = true;
module.exports = TabNav
