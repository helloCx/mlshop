import React ,{Component} from "react";
import {View,StyleSheet,Image,TextInput,TouchableOpacity,Text} from "react-native";
import {width} from "../config";

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
                <TouchableOpacity>
                    <Text style={styles.shopName}>
                        门店
                    </Text>
                </TouchableOpacity>
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
    },
    shopName:{
        marginRight: width*0.03,
    }
});

const phoneIcon = require('../../res/image/homeModel/phone.png');
