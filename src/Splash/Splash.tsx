import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Parent')
        }, 2000);
    }, [])
    
  return (
    <View>
      <Text style={{color: 'black'}}>Splash</Text>
    </View>
  )
}

export default Splash