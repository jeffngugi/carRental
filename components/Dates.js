import React from 'react'
import {View, TouchableOpacity, Text, Image,} from 'react-native'
import {SIZES, icons, FONTS,COLORS } from '../constants'

const Dates = () => {
    return (
        <View
                style={{justifyContent:'center', alignItems:'center',marginVertical:SIZES.padding}}
            >
                <View
                    style={{flexDirection:'row'}}
                >
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.white,
                        paddingVertical:20,
                        paddingHorizontal:18,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:12,
                        marginHorizontal:10,
                        width:"42%"
                    }}
                    onPress={()=>console.log('Set start date')}
                >
                    <Text style={{...FONTS.h0, marginVertical:5}}>10</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 25</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </TouchableOpacity>
                    <View
                        style={{
                             position:'absolute',
                             backgroundColor:COLORS.black,
                             padding:8,
                             borderRadius:50,
                             alignItems:'center',
                             justifyContent:'center',
                             top:'35%',
                             bottom:'35%',
                             left:'41%',
                             zIndex:100,
                             transform: [{rotate: '180deg'}]
                             
                        }}
                    >
                        <Image
                            resizeMode='contain'
                            source={icons.back}
                            style={{width:25, height:25, tintColor:COLORS.white}}
                        />
                    </View>
                <TouchableOpacity
                    style={{
                        backgroundColor:COLORS.white,
                        paddingVertical:20,
                        paddingHorizontal:18,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:12,
                        marginHorizontal:10,
                        width:"42%"
                    }}
                    onPress={()=>console.log('Set end date')}
                >
                    <Text style={{...FONTS.h0}}>11</Text>
                    <Text style={{color:COLORS.gray, ...FONTS.body3}}>Saturday , May 26</Text>
                    <Text style={{...FONTS.body3}}>TIME : 10:00</Text>
                </TouchableOpacity>
                
                </View>
               
            </View>
    )
}

export default Dates
