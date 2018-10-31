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
                    <View style={{height: 1000}}/>
                    <Text>Home</Text>
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