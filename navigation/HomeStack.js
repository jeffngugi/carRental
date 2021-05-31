import React from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Ride from '../screens/Ride'
import Home from '../screens/Home'



const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Ride'
                component={Ride}
            />
        </Stack.Navigator>
    )
}

export default HomeStack
