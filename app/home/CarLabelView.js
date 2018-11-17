import React, {Component} from 'react';
import {
    FlatList,
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import {imageUri, width} from "../config"
import  {getCarLabelList} from "../api/homeQL"
import {Query} from "react-apollo";
import SmallView from "../component/SmallView"

let label ;
export default class CarLabelView extends Component {
    
    render() {
        label = this.props.label;
        const CarView = GetCarLabelList();
        if (CarView === null) {
            return null;
        }
        return (
            <View style={{alignItems: "center"}}>
                <View style={{width: width * 0.96}}>
                    <View style={[styles.container, {backgroundColor: this.props.color}]}>
                        <Text style={styles.labelTitle}>{label}</Text>
                        <View style={styles.more}>
                            <Text style={{fontSize: 16}}>{"更多车型"}</Text>
                        </View>
                    </View>
                    <View>{CarView}</View>
                </View>
            </View>
        )
    }

}


const GetCarLabelList = () => {
    const paginator = {
        page: "1",
        size: "5"
    };
    const qfilter = handleFilter(label);
    return (
        <Query query={getCarLabelList} variables={{paginator, qfilter}}>
            {
                ({loading, error, data}) => {
                    if (loading) return null;
                    if (error) {
                        console.log(error);
                        return null;
                    }
                    if (data) {
                        console.log(data);
                        return (
                                <FlatList
                                    keyExtractor={(item, index) => index}
                                    data={data.VehiclePriceList.content}
                                    renderItem={(data) => handleCarLabelList(data)}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                        )
                    }
                }

            }
        </Query>
    )
};


const handleCarLabelList = (data) => {
    const carInfo = data.item.carInfo;
    const modelArr = carInfo.model.split("款");
    const rs = modelArr[1].split(" ");
    return (
        <View style={styles.car}>
            <View style={styles.leftView}>
                <SmallView smallLabel={carInfo.label}/>
                <View>
                    <Text style={{marginTop:2}}>
                        {rs[0]}
                    </Text>
                    <Text style={{fontSize:11,marginTop:2,color:"#666666"}}>
                        {rs[1]+" "+rs[2]}
                    </Text>

                </View>
            </View>

            <View>
                <Image
                    style={styles.image}
                    source={{uri: imageUri + carInfo.image}}/>
            </View>
        </View>
    )
};


const handleFilter = (label)=>{
  return  {
        "key": "shop.id",
        "value": "kjos_klpE6eTKiE_JEXE_1A05",
        "operator": "EQUEAL",
        "combinator": "AND",
        "next": {
        "key": "disabled",
            "value": "false",
            "operator": "EQUEAL",
            "combinator": "AND",
            "next": {
            "key": "carInfo.label",
                "value": label,
                "operator": "EQUEAL"
        }
    }
    };
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10
    },
    labelTitle: {
        fontSize: 20,
        marginLeft: 20,
        color: "white"
    },
    more: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 24,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 80
    },
    image:{
        height:60,
        width:width*0.26,
        marginLeft: 4,
    },
    car:{
        width:width*0.46,
        flexDirection:"row",
        justifyContent:"space-between",
        height:80,
        alignItems:"center",
        marginRight:12
    },
    leftView:{
        width:width*0.16,
        marginRight: 5,
    }
});
