import {Dimensions, Text , View} from 'react-native';
import React from "react";


export const imageUri = "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/";
export const serverUr ="http://115.159.154.194:8080/client/login";



export const {width} = Dimensions.get("window");
export const shopId ="kjos_klpE6eTKiE_JEXE_1A05";


export let xToken = "";
export function setToken(token) {
    xToken = token;
}
