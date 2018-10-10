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
      <View style={style.container}>
        <View>
          <Text style={style.text}>HelloWorld!!!</Text>
          <Text style={{ color: "green", fontSize: 50 }}>.......</Text>
        </View>
        <View style={style.wrap}>
          <View style={style.box1}>
            <Text>Box1</Text>
          </View>
          <View style={style.box2}>
            <Text>Box2</Text>
          </View>
          {/* <View style={style.box3}>
            <Text>Box3</Text>
          </View>
          <View style={style.box4}>
            <Text>Box4</Text>
          </View>
          <View style={style.box4}>
            <Text>Box4</Text>
          </View> */}
        </View>
      </View>
    );
  }
}
/* 生成样式 
    在React-native里面CSS属性是不允许使用烤串法，必须使用小驼峰命名法
    即使在组件标签里面也同样要求(大驼峰命名法)，建议在RN里面尽量使用大驼峰命名法
*/

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ccc"
  },
  text: {
    fontSize: 50,
    color: "blue"
  },
  /* flex弹性布局 
      弹性布局拥有主轴(X轴)对应row,交叉轴(Y轴)对应column,两种排列参考线
        flexDirection:规定是弹性布局的参考线是row还是colum
        flexDirection: 'row-reverse',row倒序排列
        flexDirection:'column-reverse',column倒叙排列
      弹性布局顾名思义其布局元素的宽高都是有弹性的,自适应(可以不需要设置宽和高)
      但是有些属性是需要设置宽的情况下使用
        flexWrap:'wrap'  规定弹性元素自动换行或者换列
      主轴上操纵弹性元素位置
        justifyContent:'space-between', 将弹性元素主轴上两端对齐
        justifyContent:"space-around",  将弹性元素主轴上设置一定间距间隔
        justifyContent:"center",  将弹性元素主轴上设置一定间距间隔
      交叉轴上操作弹性元素位置
        alignItems:'center'  居中
        alignItems:'flex-start'容器顶
        alignItems:'flex-end'容器底
        操纵元素大小
        alignItems:'baseline' 弹性元素的高为元素顶线到基线大小
        alignItems:'stretch' 弹性元素的高为容器顶到容器底
  */
  wrap: {
    height:300,
    flexDirection: 'row-reverse',
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent:'space-between',
    justifyContent:"space-around",
    alignItems: 'baseline',
  },
  box1: {
    // flex: 1,
    // flexGrow: 2,
    // width: 100,
    // height: 100,
    backgroundColor: "green",
    // justifyContent: "center",
    // alignItems: "center"
  },
  box2: {
    // flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "red",
    // justifyContent: "center",
    // alignItems: "center"
  },
  box3: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "silver",
    // justifyContent: "center",
    // alignItems: "center"
  },
  box4: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  }
});
