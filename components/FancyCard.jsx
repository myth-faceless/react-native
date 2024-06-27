import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style = { styles.headingText }>Trending</Text>
      <View style = {[ styles.card, styles.cardElevated ]}>
        <Image 
            source={{uri: 'https://cdn.tripspoint.com/uploads/attraction/-vWHdYPqI6_u0ViI4LQYg1CUFkEZnQsV.jpg'}} 
            style = { styles.cardImage}    
        />

        <View style = { styles.cardBody}>
            <Text style = { styles.cardTitle }> Swayambhunath  </Text>
            <Text style = { styles.cardLabel }> UNESCO World Heritage Site  </Text>
            <Text style = { styles.cardDescription }>Swayambhunath, also known as the Monkey Temple, is an ancient Buddhist stupa located in the Kathmandu Valley, west of Kathmandu city. It is one of the holiest Buddhist stupas in Nepal and a UNESCO World Heritage Site.  </Text>
            <Text style = { styles.cardFooter }>15 mins away </Text>
        
        </View>

      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    card: {
        width: 392,
        height: 420,
        borderRadius: 7,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    cardElevated: {
        backgroundColor: 'white',
        elevation: 4,
        shadowOffset: {
            width: 1, 
            height: 1,
        }
    },
    cardImage: {
        height: 250,
        marginBottom: 8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,


    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: 'grey',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 6,
        textAlign: 'justify',
        
    },
    cardFooter: {
        color: 'grey',
        fontSize: 14,
        textAlign: 'center'
    },

})