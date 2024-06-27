import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  // container: {
    // flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'green'
  // },
  // // safearea: {
  //   backgroundColor: 'gray'
  // },
})