import { View, Text } from 'react-native'
import React from 'react'

const CustomInput = ({
    placeholder= 'Enter text',
    value,
    onChangeText,
    label,
    secureTextEntery = false,
    keyboardType="default"
}: CustomInputProps) => {
  return (
    <View>
      <Text>CustomInput</Text>
    </View>
  )
}

export default CustomInput