/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "react-navigation"

//  创建一个文件  scroll.js  定义一个五颜六色的颜色数组  然后循环出来  view的颜色是数组其一

// const MyScroll = require("./scroll");


const MyNava = require("./navigation");

// const Home  = require("./home");
// const List  = require("./list");


export default class LessonScroll extends Component{
	render(){
		return(
			<View>
				<MyNava/>
			
			</View>
		);
	}
}


// console.disableYellowBox = true;