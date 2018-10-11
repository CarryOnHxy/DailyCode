/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View ,ScrollView,RefreshControl} from "react-native";
/* 暴露组件 
    功能：一个具有多种颜色方块的下拉刷新列表
    A.定义颜色数组
    B.遍历颜色生成Html
    C.构建下拉刷新列表，嵌入颜色方块html
    D.暴露出来
*/
/* RN里面使用的类是支持ES7写法的
    可以在类里面声明实例属性与静态属性，而且不需要加;结束
        class Cat{
            myProp = 1 //实例属性
            static myStaticPro =1 //静态属性
        }
*/
export default class Scroll extends Component {
    colorArr = ['rgb(250, 235, 215)','skyblue','yellow','red','green','gray','purple']
  render(){
      var colorStruct = [];
      this.colorArr.forEach(el=>colorStruct.push(
          <View key={1}style={[{backgroundColor:el},style.ColorBlock]}></View>
      ))
    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={false} 
                onRefresh={this.onRefresh}//监听事件
            />
        }>
                {colorStruct}
        </ScrollView>
    );
  }
  /* 下拉刷新提示函数 */
  onRefresh(){
      alert('Refreshing');
  }
}

const style = StyleSheet.create({
    ColorBlock:{
        width:'100%',
        height:100
    }
})

module.exports = Scroll;