import React ,{Component} from  "react";
import { Text, StyleSheet,View} from "react-native";

export default class MineSetting extends Component{

    static navigationOptions = ({navigation}) => ({
        headerBackTitle:"Mine"
    });


    render(){
        return(
            <View>
                <Text>MineSetting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    }
});