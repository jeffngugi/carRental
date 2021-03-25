import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import {COLORS, icons} from '../constants'
import {View, Image, Text} from 'react-native'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                activeBackgroundColor: COLORS.reddish,
                inactiveBackgroundColor: COLORS.transparent,
                style:{
                    position:'absolute',
                    bottom:0,
                    right:0,
                    left:0,
                    elevation:0,
                    height:55,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,

                },
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({focused })=> (
                        <View style={{
                                alignItems:'center',
                                justifyContent:'center',
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                }}>
                            <Image 
                                source={icons.home}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:focused?COLORS.white: COLORS.reddish
                                }}
                            />
                            <Text style={{
                                color:focused?COLORS.white:COLORS.reddish,
                                
                            }}>HOME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Ride"
                component={Home}
            />
            <Tab.Screen
                name="Chat"
                component={Home}
            />
            <Tab.Screen
                name="Share"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
