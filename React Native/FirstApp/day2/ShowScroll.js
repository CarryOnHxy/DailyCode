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
const Scroll = require('./Scroll');
export default class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Scroll />
      </View>
    );
  }
}



