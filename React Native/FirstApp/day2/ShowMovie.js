/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
/* 暴露组件 
    引入下拉列表组件
*/
const Movie = require('./Movie');
export default class HelloWorld extends Component {
  render() {
    return (
      <View style={style.con}>
        <Movie />
      </View>
    );
  }
}

const style = StyleSheet.create({
  con:{
    backgroundColor:'white',
    flexDirection:'column',
  }
})


