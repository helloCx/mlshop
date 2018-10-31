import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions, Image} from "react-native";
import Swiper from 'react-native-swiper';
import {imageUri} from '../config'
import gql from "graphql-tag";
import {Query} from "react-apollo";

const getImageData = gql`
	query indexAD{
        AdvertisementList{
          content{
          image
          }
        }
    }

`;


let imageData = null;

function renderImage(imageData) {
    let items = [];
    for (const i of imageData) {
        items.push(
            <View key={i} style={styles.image}>
                <Image key={i} source={{uri: imageUri + imageData[i]}} style={styles.image}/>
            </View>
        );
    }
    console.log(items);
    return (
        <View>{items}</View>);
}

let DogPhoto = () => (
    <Query query={getImageData}>
        {({loading, error, data}) => {
            if (loading == true) return null;
            if (error) {
                console.log(error);
                return null
            }
            else {
                let dataTodo = data.AdvertisementList.content[0].image;
                imageData = dataTodo.toString().split(",");
                return (
                    <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay ={true} >
                        <View >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: imageUri + imageData[0]}} />
                        </View>
                        <View >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: imageUri + imageData[1]}} />
                        </View>
                        <View >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: imageUri + imageData[2]}} />
                        </View>
                        <View >
                            <Image resizeMode='stretch' style={styles.image} source={{uri: imageUri + imageData[3]}} />
                        </View>
                    </Swiper>
                );
            }
        }
        }
    </Query>
);

function renderList(imageData) {
    return imageData.map(item => renderItem(item));
}

function renderItem(item) {
    return (
        <View>
            <Image source={{uri: imageUri + item}} style={styles.image}/>
        </View>
    )
}

const {width} = Dimensions.get('window');
export default class Carousel extends Component {

    constructor(Porps) {
        super(Porps);
    }

    render() {
        return (
            <View>
                <DogPhoto/>
            </View>

        )

    }
}


const styles = StyleSheet.create({
    container: {
        height: 200
    },
    image: {
        width: width,
        height: 150
    },
    wrapper: {

    },
    paginationStyle: {
        bottom: 6,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})


// let items = [];
// for(const i of imageData){
//     items.push(
//         <View style={styles.image}>
//             <Image key={i} source={{uri: imageUri + imageData[i]}} style={styles.image}/>
//         </View>
//     );
// }
// console.log(items[0])
// return <View style={styles.image}>{items}</View>;

