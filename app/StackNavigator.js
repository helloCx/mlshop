import React, {Component} from "react";
import {createStackNavigator} from "react-navigation"
import TabNav from "./BottomTab"
import MineSetting from "./mine/MineSetting"

const Stack = createStackNavigator(
    {
        MineSetting: {
            screen: MineSetting,
        },
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation, screeProps}) => ({
                header: null,
                headerBackTitle:"返回"
            })
        }
    },
    {
        initialRouteName: "Main",
    });

export default class StackNavigator extends Component {
    render() {
        return (
            <Stack/>
        )
    }
}
