import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ContactList = () => {

  const contacts = [
    {
        uid: 1,
        name: "Alice Johnson",
        status: "In a Design Meeting",
        imageURL: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        uid: 2,
        name: "Bob Smith",
        status: "Reviewing Project Plans",
        imageURL: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        uid: 3,
        name: "Charlie Brown",
        status: "Away",
        imageURL: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        uid: 4,
        name: "Diana Prince",
        status: "Busy",
        imageURL: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        uid: 5,
        name: "Eve Adams",
        status: "Conducting Research with ❤️",
        imageURL: "https://randomuser.me/api/portraits/women/5.jpg"
    }

  ];

  return (
    <View>
      <Text style ={styles.headingText}>Contact List</Text>
      <ScrollView 
      style = {styles.container}
      scrollEnabled={false}
      >
        {contacts.map( ({uid, name, status, imageURL }) => (
            <View key={uid} style = {styles.userCard}>
                <Image 
                source={{
                    uri: imageURL
                }}

                style = {styles.userImage}
                />
                <View>
                     <Text style = {styles.userName}>{name}</Text>
                     <Text style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#9932CC',
        padding: 10,
        borderRadius: 12,
    },
    userImage: {
        width: 60,
        height: 60,
        // borderColor: 'green',
        // borderWidth: 5,
        borderRadius: 60 / 2,
        marginRight: 15,
    },
    nameAndStatus: {
        backgroundColor: 'red',
    },
    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    userStatus: {
        fontSize: 16,
        color: '#D3D3D3'
    },

})