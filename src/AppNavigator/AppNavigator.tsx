import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Splash/Splash'
import Parent from '../Splash/Parent/Parent'

const Stack = createStackNavigator()
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen options={{headerShown:false}} name='Splash' component={Splash}/>
        <Stack.Screen name='Parent' options={{headerShown:false}} component={Parent}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator