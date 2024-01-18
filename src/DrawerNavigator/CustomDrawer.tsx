import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Screen1 from '../BottomTabs/Screen1';

const CustomDrawer = ({navigation}: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginVertical: 40}}>
      <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
        <Text style={{color: 'black'}}>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical: 20,}} onPress={() => navigation.navigate('Screen2')}>
        <Text style={{color: 'black'}}>Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical: 20,}} onPress={() => navigation.navigate('Screen3')}>
        <Text style={{color: 'black'}}>Screen 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical: 20,}} onPress={() => navigation.navigate('Screen4')}>
        <Text style={{color: 'black'}}>Screen 4</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer