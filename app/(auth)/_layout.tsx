import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slot } from 'expo-router'

export default function Auth_layout() {
  return (
    <SafeAreaView>
      <Text>Auth</Text>
      <Slot/>
    </SafeAreaView>
  )
}