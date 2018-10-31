import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {width} from "../config";
import MineSetting from "./MineSetting";


export default class Row extends Component {

    defaultProps = {
        viewTitle: null,
        icon: null,
        toNavigate:null
    };

    constructor(Props) {
        super(Props);
        this.state = {
            ViewTitle: null,
        }
    }

    render() {
        let Icon;
        if (this.props.icon == null) {
            Icon = defaultButton;
        }
        Icon = this.props.icon;
        return (
            <View>
                <View style={{backgroundColor: "#e6e6e6", height: 1,width:width}}/>
                <TouchableOpacity onPress={() => this.props.navigate(this.props.toNavigate)}>
                <View style={styles.container}>
                    <View>
                        <Text>
                            {this.props.viewTitle}
                        </Text>
                    </View>
                    <Image source={Icon} style={styles.image}/>
                </View>
                </TouchableOpacity>
                <View style={{backgroundColor: "#e6e6e6", height: 1}}/>
            </View>
        )

    }
}

const defaultButton = require('../../res/image/mineModel/right.png')

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 20
    },
})