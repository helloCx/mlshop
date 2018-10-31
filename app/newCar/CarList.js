import {Query} from "react-apollo";
import gql from 'graphql-tag';
import React, {Component} from 'react';
import {ListView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const query = gql`
    query{
       VehiclePriceList{    
          content{
             id
			carInfo{
                  id
                  image
                  model
            }
          }
       }
    }
`;


export default class CarList extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}),
        }
    }

    render() {
        return (
            <Query
                query={query}>{
                ({loading, error, data}) => {
                    if (loading == true) return <Text>loading</Text>;
                    if (error) {
                        console.log(error)
                        return <Text>{`Error: ${error}`}</Text>;
                    } else {
                        console.log(data)
                        return this.renderList(data.VehiclePriceList.content);
                    }
                }
            }
            </Query>
        );
    }

    renderList(data) {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(data)}
                    renderRow={(e) => this.renderRow(e)}
                    pageSize={5}
                />
            </View>
        )

    }


    renderRow(rowData) {
        let line = "";
        let title = rowData.carInfo.model.split(" ");
        if (rowData.carInfo.model != null) {
            for (let i in title) {
                if (i > 0) {
                    line += title[i] + " ";
                }
            }
            if (rowData.carInfo.image == null) {
                return null;
            }
            return (
                <TouchableOpacity activeOpacity={0.5} >
                    <View style={styles.inView}>
                        <Image style={styles.image} source={{uri: imageUri + rowData.carInfo.image}}/>
                        <View style={styles.rightView}>
                            <Text>{title[0]}</Text>
                            <Text>{line}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }


    }
}

const imageUri = "http://mlshopimage.oss-cn-shanghai.aliyuncs.com/";
const styles = StyleSheet.create({
    outer: {
        width: 100,
        height: 30,
    },
    inView: {
        flexDirection: 'row',
        marginTop: 10
    },
    image: {
        width: 120,
        height: 80,
        marginLeft: 10,
        marginRight: 10
    },
    rightView: {
        height: 20
    }
})
