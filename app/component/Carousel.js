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
                        {
                            imageData.map(image =>(
                                 <View>
                                     <Image
                                         resizeMode='stretch'
                                         style={styles.image}
                                         source={{uri: imageUri + image}}
                                     />
                                 </View>
                                )
                            )
                        }
                        </Swiper>
                );
            }
        }
        }
    </Query>
);

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

});

