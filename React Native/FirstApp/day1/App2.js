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
/* 暴露组件 */
export default class HelloWorld extends Component {
  render() {
    return (
      <View style={style.con}>
        <View style={style.wrap}>
          <View style={[style.item,style.detail,style.borderRight]}>
            <Text style={style.text}>酒店</Text>
          </View>

          <View style={[style.item,style.borderRight]}>
            <View style={[style.detail,style.borderBottom]}>
              <Text style={style.text}>海外酒店</Text>
            </View>
            <View style={style.detail}>
              <Text style={style.text}>特价酒店</Text>
            </View>
          </View>

          <View style={[style.item,style.borderRight]}>
            <View style={[style.detail,style.borderBottom]}>
              <Text style={style.text}>团购</Text>
            </View>
            <View style={style.detail}>
              <Text style={style.text}>民宿.客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
/* 生成样式 */

const style = StyleSheet.create({
  wrap:{
    backgroundColor:'rgb(255, 96, 124)',
    flexDirection:'row',
    height:80,
    margin:3,
    borderRadius:5
   
  },
  item:{
    flex:1,
    flexDirection:"column",
  },
  detail:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  },
  borderRight:{
    borderRightWidth:1,
    borderColor:'white'
  },
  borderBottom:{
    borderBottomWidth:1,
    borderColor:'white'
  }
});
