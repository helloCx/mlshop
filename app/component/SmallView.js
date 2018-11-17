import React ,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native'


export  default  class SmallView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text  style={styles.label}>
                    {this.props.smallLabel}
                </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        width:40,
        borderRadius:3,
        alignItems: "center",
        justifyContent: "center"
    },
    label:{
        fontSize:8,
        color:"white",
        padding: 2
    }
});



