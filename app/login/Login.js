import React, {Component} from "react";
import {View, Button, StyleSheet} from "react-native";
import {serverUr, setToken} from "../config";
import Home from "../home/Home";


export default class Login extends Component {

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this)

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button title={"登陆"} onPress={this.handleLogin}/>
                </View>
            </View>
        )

    }
    handleLogin() {
        const username ="18066451941";
        const password ="lsd1234";
        fetch(serverUr+"?username="+username+"&password="+password, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) =>{
            if(res.status==200){
                let  xToken = res.headers.map['x-auth-token'];
                setToken(xToken)
            }
            this.props.navigation.navigate("Home");
            console.log(res);

        });
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});
