import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import HomeStack from './HomeStack'
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
                tabStyle:{
                    borderTopRightRadius:20,
                    borderTopLeftRadius:20,
                    paddingVertical:3
                },
                style:{
                    position:'absolute',
                    bottom:0,
                    right:0,
                    left:0,
                    elevation:0,
                    height:60,

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
                name="Rides"
                component={Home}
                options={{
                    tabBarIcon:({focused })=> (
                        <View style={{
                                alignItems:'center',
                                justifyContent:'center',
                                }}>
                            <Image 
                                source={icons.steer}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:focused?COLORS.white: COLORS.reddish
                                }}
                            />
                            <Text style={{
                                color:focused?COLORS.white:COLORS.reddish,
                                
                            }}>RIDES</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Home}
                options={{
                    tabBarIcon:({focused })=> (
                        <View style={{
                                alignItems:'center',
                                justifyContent:'center',
                                }}>
                            <Image 
                                source={icons.chat}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:focused?COLORS.white: COLORS.reddish
                                }}
                            />
                            <Text style={{
                                color:focused?COLORS.white:COLORS.reddish,
                                
                            }}>CHAT</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Share"
                component={Home}
                options={{
                    tabBarIcon:({focused })=> (
                        <View style={{
                                alignItems:'center',
                                justifyContent:'center',
                                }}>
                            <Image 
                                source={icons.suv}
                                resizeMode='contain'
                                style={{
                                    width:30,
                                    height:30,
                                    tintColor:focused?COLORS.white: COLORS.reddish
                                }}
                            />
                            <Text style={{
                                color:focused?COLORS.white:COLORS.reddish,
                                
                            }}>SHARE RIDE</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

