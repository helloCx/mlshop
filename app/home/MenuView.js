import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from "react-native";
import NewCar from "../newCar/NewCar";


const {width} = Dimensions.get("window");
export default class MenuView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{backgroundColor: "#e1e1e1", height: 4}}/>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigate('NewCar')}>
                        <View style={styles.inView}>
                            <Image source={carMenuIcon} style={styles.Icon}/>
                            <Text>新车</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.inView}>
                            <Image source={dollarMenuIcon} style={styles.Icon}/>
                            <Text>以旧换新</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.inView}>
                            <Image source={insurance} style={styles.Icon}/>
                            <Text>保险</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.inView}>
                            <Image source={creditCardMenuIcon} style={styles.Icon}/>
                            <Text>借贷</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: "#e1e1e1", height: 4}}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

    },
    inView: {
        //水平居中和垂直居中
        alignItems: "center",
        justifyContent: "center",
        height: 70,
        width: 70,
        marginRight: (width - 4 * 70) / 8,
        marginLeft: (width - 4 * 70) / 8,
    },
    Icon: {
        height: 40,
        width: 40,
        marginBottom:3
    }
});


const carMenuIcon = require("../../res/image/homeModel/car-fill.png");
const dollarMenuIcon = require("../../res/image/homeModel/Dollar.png");
const insurance = require("../../res/image/homeModel/insurance.png");
const creditCardMenuIcon = require("../../res/image/homeModel/creditCard.png");