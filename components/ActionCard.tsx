import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style = { styles.headingText }>Action Card</Text>
      <View style = { [styles.card, styles.elevatedCard] }>
        <View style = { styles.headingContainer }>
            <Text style = {styles.headerText}>
              Read more about swayambhunath here..
            </Text> 
        </View> 
        <Image source={{ 
          uri: 'https://cdn.tripspoint.com/uploads/attraction/-vWHdYPqI6_u0ViI4LQYg1CUFkEZnQsV.jpg'
          }}
          style = {styles.cardImage}
          />

          <View style = { styles.bodyContainer}>
            <Text numberOfLines={3} style = {styles.bodyText} >
                Swayambhunath is an old architectural site on top of a hill in Kathmandu Valley, Nepal.
                The name is taken from the Tibetan language which means
                ‘Sublime Trees’ and a great variety of trees are found on the hill.
                In day to day religious rituals of Buddhist, this stupa has a central place. According to some accounts,
            </Text>
          </View>

          <View style = { styles.footerContainer}>
            <TouchableOpacity
            onPress={ () => openWebsite('https://www.tripspoint.com/attraction/swayambhunath')}
            >
              <Text>Read more...</Text>
            </TouchableOpacity>
          </View>

      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {},
  elevatedCard: {
    
  },
  headingContainer: {
  
  },
  headerText: {
    fontSize: 20,
    padding: 10,
  },
  cardImage: {
    height: 250,
  },
  bodyContainer: {},
  bodyText: {
    textAlign: 'justify',
    padding: 10,
  },
  footerContainer: {
    padding: 10,
  },
})