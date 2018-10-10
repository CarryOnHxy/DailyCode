/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
/* 暴露组件 */
export default class HelloWorld extends Component {
  constructor(){
    super();
    this.state={
      text:''
    }
  }
  render() {
    return (
    <View style={style.con}>
        <TextInput style={{flex:5}} onChangeText={text=>this.setState({text})}/>
        <TouchableOpacity style={style.button} onPress={()=>alert(this.state.text)}>
          <Text>搜索</Text>
        </TouchableOpacity>
    </View>);
  }
}
/* 生成样式 */

const style = StyleSheet.create({
  con:{
    flexDirection: 'row',
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'pink'
  }
});
