import React ,{Component} from "react";
import {View,Text,StyleSheet,Image,Button,TextInput,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import {
    DrawerNavigator ,
    DrawerItems ,
} from 'react-navigation';


export default class SideAndSearch extends Component {

    constructor(props){
        super(props);
        this.state={
            searchValue:null,
        }
    }

    render() {
        return (
            <View style={{flexDirection:'row',justifyContent:"center",alignItems:"center"}}>
                <Button title="门店" />
                <TextInput
                    style={styles.topInput}
                    onChangeText={(searchValue) => this.setState({searchValue})}
                    value={this.state.text}
                />
                <TouchableOpacity>
                    <View>
                       <Image source={phoneIcon} style={styles.phoneImage}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles =StyleSheet.create({
    topInput:{
        height:30,
        width:260,
        backgroundColor:"#f1f1f1",
        fontSize:15,
        borderRadius: 10,
        paddingLeft:15,
    },
    phoneImage:{
        width:25,
        height:25,
        marginLeft:10
    }
})

const phoneIcon = require('../../res/image/homeModel/phone.png')