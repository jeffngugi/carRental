import 'react-native-gesture-handler';
import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './navigation/TabNavigator'
import Chat from './screens/Chat'
import Ride from './screens/Ride'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen
                name='Home'
                component={TabNavigator}
            />
            <Stack.Screen
                name='Ride'
                component={Ride}
            />
      </Stack.Navigator>
      {/* <TabNavigator /> */}
      {/* <Chat /> */}
    </NavigationContainer>
    
  )
}

export default App
