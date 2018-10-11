/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/* 引入组件区 */
import React, { Component } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from "react-native";
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
        <View style={style.top}>

            <View style={[style.top_item]}>
                    <Image source={require('./image/titlePic.jpg')} style={style.titlePic}></Image>

            </View>

            <View style={[style.top_item,style.hotel]}>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight]}>
                        <Text style={[style.innerText]}>酒店</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight]}>
                    <View>
                        <Image style={style.innerImg} source={require('./image/pic(5).jpg')}  />    
                    </View>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                        <Text style={[style.innerText]}>特惠酒店</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                    <Text style={[style.innerText]}>客栈</Text>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderBottom]}>
                        <Text style={[style.innerText]}>海外酒店</Text>
                    </View>
                    <View style={[style.innerDetail]}>
                    <Text style={[style.innerText]}>民宿</Text>
                    </View>
                </View>
            </View>
            
    
            <View style={[style.top_item,style.ticket]}>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight]}>
                        <Text style={[style.innerText]}>机票</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight]}>
                    <View>
                        <Image style={style.innerImg} source={require('./image/pic(6).jpg')}  />    
                    </View>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                        <Text style={[style.innerText]}>特惠机票</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                    <Text style={[style.innerText]}>火车票</Text>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderBottom]}>
                        <Text style={[style.innerText]}>汽车票.船票</Text>
                    </View>
                    <View style={[style.innerDetail]}>
                    <Text style={[style.innerText]}>专车.自驾</Text>
                    </View>
                </View>
            </View>

                     <View style={[style.top_item,style.vacation]}>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight]}>
                        <Text style={[style.innerText]}>度假</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight]}>
                    <View>
                        <Image style={style.innerImg} source={require('./image/pic(1).jpg')}  />    
                    </View>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                        <Text style={[style.innerText]}>景点.门票</Text>
                    </View>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                    <Text style={[style.innerText]}>自由行</Text>
                    </View>
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderBottom]}>
                        <Text style={[style.innerText]}>旅游团购</Text>
                    </View>
                    <View style={[style.innerDetail]}>
                    <Text style={[style.innerText]}>周边.短途</Text>
                    </View>
                </View>
            </View>

            <View style={[style.top_item_bottom,style.economy]}>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight]}>
                        <Text style={[style.innerText]}>金融.理财</Text>
                    </View>
    
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderRight,style.borderBottom]}>
                        <Text style={[style.innerText]}>保险.车险</Text>
                    </View>
                   
                </View>
                <View style={[style.innerItem]}>
                    <View style={[style.innerDetail,style.borderBottom]}>
                        <Text style={[style.innerText]}>全球购</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={style.bottom}>
            <View style={style.first}>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>签证-WIFI</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>出境游</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>一日游</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>美食林</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>汽车票</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>国内游</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>超级巴士</Text>
                </View>
                <View style={style.firstDetial}>
                    <Image source={require('./image/pic(2).jpg')} style={{width:30}}></Image>
                    <Text style={style.firstText}>攻略</Text>
                </View>
          
            </View>
            <View style={style.second}>
                <View style={style.secondDetial}>
                    <Image source={require('./image/1.jpg')} style={{width:30,height:30}}></Image>
                    <Text style={style.firstText}>下载APP</Text>
                </View>
                <View style={style.secondDetial}>
                    <Image source={require('./image/1.jpg')} style={{width:30,height:30}}></Image>
                    <Text style={style.firstText}>我的订单</Text>
                </View>
                <View style={style.secondDetial}>
                    <Image source={require('./image/1.jpg')} style={{width:30,height:30}}></Image>
                    <Text style={style.firstText}>我的</Text>
                </View>
            </View>
            <View style={style.third}>
                <View style={style.thirdDetail}>                  
                    <Text style={style.thirdText}>Qunar京ICP备05021087</Text>
                </View>
                <View style={style.thirdDetail}>                  
                    <Text style={style.thirdText}>意见反馈</Text>
                </View>
                <View style={style.thirdDetail}>                  
                    <Text style={style.thirdText}>关于我们</Text>
                </View>
            </View>
        </View>
        
    </View>);
  }
}
/* 生成样式 */

const style = StyleSheet.create({
    con:{
        backgroundColor:'white',
        height:'100%',
        flexDirection:'column'
    },
    bottom:{
        flex:1,
        // borderWidth: 1,
        // borderColor: 'blue',
        flexDirection:'column',
        backgroundColor:'rgb(238, 238, 237)'
    },
    first:{
        flex:2,
        // borderColor: 'red',
        // borderWidth:2,
        marginTop: 4,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    firstDetial:{
        width:'25%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    firstText:{
      fontSize:12  
    },
    second:{
        flex:1,
        // borderColor: 'red',
        // borderWidth:2,
        marginTop: 4,
        backgroundColor:'white',
        flexDirection:'row'
    },
    secondDetial:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    secondText:{
        fontSize:12
    },
    third:{
        flex:0.5,
        // borderColor: 'red',
        // borderWidth:2,
        marginTop: 4,
        flexDirection:'row'
    },
    thirdDetail:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    thirdText:{
        fontSize:10
    },
    top:{
        flex:2,
        // borderWidth: 1,
        // borderColor: 'red',
        flexDirection:'column'
    },
    top_item:{
        flex:1,
        marginBottom: 3,
        // borderColor: 'green',
        flexDirection:'row'
    },
    innerItem:{
        flex:1,
    },
    innerDetail:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    innerText:{
        color:'white',
        fontSize:12
    },
    innerImg:{
        width:50,
        height:40
    },
    titlePic:{
        width:'100%',
        height:82
    },
    hotel:{
        backgroundColor:'rgb(255, 85, 85)'
    },
    ticket:{
        backgroundColor:'rgb(45, 155, 215)'
    },
    vacation:{
        backgroundColor:'rgb(120, 176, 54)'
    },
    economy:{
        backgroundColor:'rgb(242, 148, 25)'
    },
    top_item_bottom:{
        flex:0.5,
        marginBottom: 4,
        // borderWidth:1,
        flexDirection:'row'
    },
 
    borderRight:{
        borderRightWidth:0.5,
        borderColor:'white'
    },
    borderBottom:{
      borderBottomWidth:0.5,
      borderColor:'white'
    }
});
