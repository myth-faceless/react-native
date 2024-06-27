import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style = { styles.headingText }>Action Card</Text>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  }
})