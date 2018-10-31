import React, {Component} from "react";
import {createBottomTabNavigator} from "react-navigation";
import Home from "./home/Home";
import Mine from "./mine/Mine";
import NewCar from "./newCar/NewCar";
import Icon from "react-native-vector-icons/AntDesign";

let Main;
export default Main = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name='home' size={25} color="#ffffff"/>
                )
            }
        },
        NewCar: {
            screen: NewCar,
            navigationOptions: {
                tabBarLabel: "新车",
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name='user' size={25} color="#ffffff"/>
                )
            }
        },
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name='user' size={25} color="#ffffff"/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            tabBarPosition: 'bottom',
            activeTintColor:'#44fff3',
            inactiveTintColor: '#ffffff',
            style: {
                backgroundColor: '#ff5000',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:0.5,
                borderTopColor: '#ccc',
                marginBottom:-5

            }
        }
    })
