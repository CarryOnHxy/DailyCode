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
const Navigation  = require('./Navigation');
export default class ShowNavigation extends Component {
  render() {
    return (
        <Navigation />//父容器不能是View，因为Navigation本身是一个注册由组件
    );
  }
}



