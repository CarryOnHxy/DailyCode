import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {createStackNavigator} from "react-navigation"

//home 首页  text 前往 onPress  列表页

//navigation.js注册这两个路由

//app.js 引入navigation 展示组件

export default  class MyList extends Component{


    render(){
       
        return(

            <View>
            <TouchableOpacity
            // style={styles.touchable}
            //跳转到列表页的页面
            // onPress={()=>this.props.navigation.navigate("Home")}
            >


                <Text>点击前往首页</Text>
            </TouchableOpacity>
            <Text>
                我是列表的内容
            </Text>


            </View>


        )
    }
}

module.exports = MyList;