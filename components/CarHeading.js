import React from 'react'
import {View, Text} from 'react-native'
import {FONTS, COLORS} from '../constants'

const CarHeading = ({item}) => {
    console.log(item)
    return (
        <View
            style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}
        >
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{...FONTS.h4, fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{...FONTS.h4, color:COLORS.gray}}> 2008</Text>
                </View>
                
                <Text style={{...FONTS.h5}}>86 Trips</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{...FONTS.h3, fontWeight:'bold'}}>42</Text>
                    <Text style={{...FONTS.h4, color:COLORS.gray}}> SAR</Text>
                </View>
        </View>
    )
}

export default CarHeading
