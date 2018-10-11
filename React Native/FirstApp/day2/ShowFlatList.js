/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,Image,FlatList } from "react-native";
/* 功能:电影数据使用FlatList组件展示出来
    A.引入官方FlatList文件
    B.引入电影数据
    C.将电影数据绑定在FlatList组件上
    D.设置各种FlatList属性函数
*/
const movieData = require('./movieData.json').movies;
export default class ShowFlatList extends Component {
  render() {
    return (
      <FlatList 
        data={movieData}
        renderItem={this.renderItem}
        ListHeaderComponent={this.ListHeaderComponent}
        ListFooterComponent={this.ListFooterComponent}
        ItemSeparatorComponent={this.ItemSeparatorComponenting}
        refreshing={false}
        onRefresh={this.onRefreshing}  
        onEndReached={this.onEndReached}
      ></FlatList>
    );
  }
  renderItem({item}){
      return (
          <View key={1}>
              <Image source={{uri:item.posters.thumbnail}} style={{width:100,height:100}} />
              <View>
                  <Text>{item.year}</Text>
                  <Text>{item.title}</Text>
              </View>
          </View>
      )
  }
  onRefreshing(){
      let timer = setTimeout(()=>{
          alert('refreshing')
      },1500)
  }
  onEndReached(){
    let timer = setTimeout(()=>{
        alert('ending')
    },1500)
  }
  ListHeaderComponent(){
      return(
          <View>
              <Text>我是头部</Text>
          </View>
      )
  }
  ListFooterComponent(){
      return(
          <View>
              <Text>我是底部</Text>
          </View>
      )
  }
  ItemSeparatorComponenting(){
      return (
          <View style={{height:10,backgroundColor:'white'}}>
          </View>
      )
  }
}



