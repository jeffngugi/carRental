import React from 'react'
import {View, Image,StyleSheet,Text, TouchableOpacity} from 'react-native'
import CarHeading from './CarHeading'
import {SIZES, images, COLORS, FONTS} from '../constants'
import Rating from './Rating'

const Popular = ({navigation, car}) => {
    const {name, year, cost, trips, image} = car
    return (
       
        <TouchableOpacity
            style={{
                height:SIZES.width/1.5,
                borderRadius:SIZES.base,
                ...styles.shadow,
                backgroundColor:COLORS.white,
                marginTop:SIZES.base,
                padding:SIZES.padding,
                marginRight:SIZES.padding
            }}
            onPress={()=>navigation.navigate('Ride', {
                car:car,
                carID:car.id
            })}
        >
            <View
                style={{
                    flex:1,
                    borderRadius:SIZES.padding,
                    backgroundColor:COLORS.gray,
                    width:SIZES.width/1.4
                }}
            >
                <Image
                    resizeMode='stretch'
                    source={image}
                    style={{
                        width:'100%',
                        height:'100%',
                        borderRadius:SIZES.padding
                    }}
                    />
                    <View
                    style={{
                        width:60,
                        height:35,
                        top:0,
                        right:0,
                        position:'absolute',
                        backgroundColor:COLORS.white,
                        borderBottomLeftRadius:SIZES.padding,
                        paddingVertical:5,
                        paddingHorizontal:4,
                    }}
                >
                    <Rating />
                </View>
            </View>
            <View
            style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}
        >
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>{name}</Text>
                    <Text style={{...FONTS.h4, color:COLORS.gray}}> {year}</Text>
                </View>
                
                <Text style={{...FONTS.h5}}>{trips} Trips</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{...FONTS.h3, fontWeight:'bold'}}>{cost}</Text>
                    <Text style={{...FONTS.h4, color:COLORS.gray}}> SAR</Text>
                </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.bgcolor
    },
    typeshadow:{
        shadowColor:COLORS.reddish,
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:9,
        shadowRadius:7,
        elevation:1
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1
    }
})

export default Popular
