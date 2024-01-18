import { View, Text } from 'react-native'
import React from 'react'

const Screen1 = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'red'}}>
      <Text style={{color: 'white' }} onPress={() => navigation.openDrawer()}>Open Side Drawer</Text>
    </View>
  )
}

export default Screen1