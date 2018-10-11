import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "react-navigation";
//注册路由


var MyHome = require("./home");
var MyList= require("./list");
const MyRoute = createStackNavigator({

    Home:MyHome,
    List:MyList
    },{
        initialRouteName:"List"
    });
export default class MyNav extends Component{

    render(){

        return(
            <View>
                 <MyRoute/>
            </View>
           

        )
    }
}

module.exports = MyNav;