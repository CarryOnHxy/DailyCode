/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,Image,RefreshControl, ScrollView} from "react-native";
/* 暴露组件 
    功能:展示电影数据
    A.遍历电影数据生成视图结构
    B.创建下拉结构并且将电影结构嵌入进去
    C.返回此组件
*/
const movieData = require('./movieData').movies;
export default class Movie extends Component {

  render() {
    var movieStruct = [];
    movieData.forEach(ele =>movieStruct.push(
      <View style={style.wrap}key={1}>
        <Image style={style.imgCon}source={{uri:ele.posters.thumbnail}} style={{width:100,height:100,borderRadius:5}}/>
        <View style={style.textCon}>
          <Text>{ele.year}</Text>
          <Text>{ele.title}</Text>
        </View>
      </View>
    ));
    return (
      <View>
          <ScrollView refreshControl={
            <RefreshControl 
              refreshing={false}
            />
          }>
          {movieStruct}
          </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  wrap:{
    flex:1,
    flexDirection:'row',
    marginBottom:10,
    backgroundColor:'#ccc'
  },
  imgCon:{
    flex:1
  },
  textCon:{
    flex:2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }
})

module.exports = Movie
