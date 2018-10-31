import React, {Component} from "react";
import {View, Text, Image, StyleSheet, Dimensions, ImageBackground} from "react-native";
import {width} from "../config";
export default class TitleAndHeader extends Component {

    defaultProps={
        nickname:null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Title}>
                    <Image source={Icon} style={styles.iconImage}/>
                    <Text style={{fontSize: 22}}>个人中心</Text>
                </View>
                <View>
                    <ImageBackground style={styles.backgroundPhoto} source={backgroundImage}>
                        <View>
                            <Image style={styles.photoImage}/>
                        </View>
                        <Text>
                            {this.props.nickname}
                        </Text>
                    </ImageBackground>
                </View>
            </View>

        )
    }
}

const Icon = require('../../res/image/猛龙图标.png');
const backgroundImage = require("../../res/image/mineModel/背景图.png");

const styles = StyleSheet.create({
    container:{
      height:180,
        width: width,
    },
    Title: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row'
    },
    backgroundPhoto: {
        height: 130,
        width: width,
        alignItems: "center",
    },
    photoImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "white",
        marginTop: 50,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 1,
    },
    iconImage: {
        height: 35,
        width: 35,
        marginRight: 15
    }
});