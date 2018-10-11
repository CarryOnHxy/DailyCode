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
/* 
    功能：展示选项卡

*/  
const TabNav = require('./TabNav');                                     
export default class ShowTabNav extends Component {
  render() {
    return (
      <TabNav />
    );
  }
}



