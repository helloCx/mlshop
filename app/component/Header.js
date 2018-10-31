import React ,{Component} from  "react";
import {View,Text,StyleSheet,Image} from "react-native";

export default class Header extends Component{

    defaultProps = {
        searchText: null,
        smallTitle: null,
    }

    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){
        let smallTitle = "0首付";
        return(
            <View style={styles.container}>
                <View style={styles.inView}>
                    <Image source ={Icon} style={styles.iconImage}/>
                    <Text style={{fontSize:22, color: "black"}}>猛龙汽车商城</Text>
                </View>
                <View>
                    <Text>{smallTitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    inView:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center"
    },
    iconImage :{
        height:35,
        width:35,
        marginRight:15
    }
})

const Icon = require('../../res/image/猛龙图标.png');
