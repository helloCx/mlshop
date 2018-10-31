import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {SafeAreaView} from 'react-navigation';
import TitleAndHeader from "./TitleAndHeader";
import Row from "./Row";


export default class Mine extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TitleAndHeader/>
                <Text>Mine</Text>
                <Row
                    viewTitle="hhaha"
                    icon={defaultButton}
                    navigate={this.props.navigation.navigate}
                    toNavigate={"MineSetting"}
                />
            </SafeAreaView>
        )
    }
}
const defaultButton = require('../../res/image/mineModel/right.png')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});