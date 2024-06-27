import { ScrollView, StyleSheet, Text, View, ViewComponent } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style = { styles.headingText }>Flat Cards</Text>
        <View style = { styles.container } >
            <View style = {[styles.card, styles.cardOne ]}>
                <Text > Red </Text>
            </View>

            <View style = {[styles.card, styles.cardTwo ]}>
                <Text > Blue </Text>
            </View>

            <View style = {[styles.card, styles.cardThree ]}>
                <Text > Green </Text>
            </View>

            <View style = {[styles.card, styles.cardFour ]}>
                <Text > Purple </Text>
            </View>
        </View>

    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 5,
      
        
       
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 15,
        margin: 10,
    },
    cardOne: {
        backgroundColor: 'red'
    },
    cardTwo: {
        backgroundColor: 'blue'
    },
    cardThree: {
        backgroundColor: 'green'
    },
    cardFour: {
        backgroundColor: 'purple',
    }
})