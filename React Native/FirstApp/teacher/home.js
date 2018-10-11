import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation"

//home 首页  text 前往 onPress  列表页

//navigation.js注册这两个路由

//app.js 引入navigation 展示组件

export default  class MyHome extends Component{


    render(){

        return(

            <View>
            <TouchableOpacity
            // style={styles.touchable}
            //跳转到列表页的页面
            onPress={()=>this.props.navigation.navigate("List")}
            >


                <Text>点击前往列表页</Text>
            </TouchableOpacity>
            <Text>
                我是首页的内容
            </Text>


            </View>


        )
    }
}

module.exports = MyHome;