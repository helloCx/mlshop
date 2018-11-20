import React, {Component} from "react";
import {createStackNavigator} from "react-navigation"
import MineSetting from "./mine/MineSetting"
import TabNav from "./BottomTab"
import Login from "./login/Login"

const Stack = createStackNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions: () => ({
                header: null,
                headerBackTitle:"返回"
            })
        },

        MineSetting: {
            screen: MineSetting,
        },

        Main: {
            screen:TabNav ,
            navigationOptions: () => ({
                header: null,
                headerBackTitle:"返回"
            })
        }
    },
    {
        initialRouteName: "Login"
    });

export default class StackNavigator extends Component {
    render() {
        return (
            <Stack/>
        )
    }
}
