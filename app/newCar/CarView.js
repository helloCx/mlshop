import React ,{Component} from  "react";
import {View, Text, StyleSheet} from "react-native";

export default class CarView extends Component{

    render(){
        return(
            <SafeAreaView style={styles.container}>

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
