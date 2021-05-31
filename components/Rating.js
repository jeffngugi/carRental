import React from 'react'
import {View, Image, Text} from 'react-native'
import {COLORS, icons, FONTS} from '../constants'

const Rating = () => {
    return (
        <View style={{height:30, flexDirection:'row'}}>
                        <Image source={icons.star}
                            style={{width:25, height:25, tintColor:COLORS.reddish, marginRight:2}}
                            resizeMode='contain'
                        />
                        <Text style={{...FONTS.h3, marginHorizontal:2}}>4.0</Text>
                    </View>
    )
}

export default Rating
