import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>

        
        <ScrollView style = {styles.container} horizontal = {true}>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>Tap</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>me</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>to</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>scroll</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>more.....</Text>
            </View>
            <View style = {[styles.card, styles.cardElevated]}>
                <Text style = {styles.text}>😅</Text>
            </View>
        </ScrollView>
        

    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },

    container: {
        marginHorizontal: 5,
        paddingBottom: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 8,
        marginBottom: 10,
    
    },
    cardElevated: {
        backgroundColor: '#8B78E6',
        // elevation: 1
    },
    text: {
        color: 'white',
    }
})