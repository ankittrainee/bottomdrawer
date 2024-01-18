import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
const Bottom = createBottomTabNavigator()
const BottomNavigation = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen name='Screen1' component={Screen1} options={{ headerShown: true }} />
            <Bottom.Screen name='Screen2' component={Screen2} options={{ headerShown: true }} />
            <Bottom.Screen name='Screen3' component={Screen3} options={{ headerShown: true  }} />
            <Bottom.Screen name='Screen4' component={Screen4} options={{ headerShown: true }} />
        </Bottom.Navigator>
    )
}

export default BottomNavigation