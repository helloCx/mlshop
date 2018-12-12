import React, {Component} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import Header from "../component/Header"
import {SafeAreaView} from 'react-navigation';
import SideAndSearch from "../component/SideAndSearch";
import Carousel from "../component/Carousel";
import MenuView from "./MenuView";
import CarLabelView from "./CarLabelView";

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header/>
                <SideAndSearch/>
                <ScrollView>
                    <Carousel/>
                    <MenuView navigate={this.props.navigation.navigate}/>
                    <CarLabelView label={"新车上架"} color={"#55ff88"}/>
                    <CarLabelView label={"超级试驾"} color={"#ee6688"}/>
                    <CarLabelView label={"0首付"} color={"#55ddff"}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: "black",
        height: 1000
    }
});
