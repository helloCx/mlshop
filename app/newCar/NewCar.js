import React ,{Component} from  "react";
import {View, Text, StyleSheet} from "react-native";
import Header from "../component/Header"
import {SafeAreaView} from 'react-navigation';
import CarList from "./CarList";

export default class NewCar extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Header/>
                <CarList/>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    }
})
