import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ChatCard({username,message,navigation,otherId}) {
  return (
    <View style={styles.ChatCard}>
      <View style={styles.c1}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.lastmessage}>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ChatCard: {
      backgroundColor: '#111111',
      width: '100%',
      marginTop: 10,
      borderRadius: 20,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
  },
  image: {
      width: 40,
      height: 40,
      borderRadius: 50,
  },
  username: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
  c1: {
      marginLeft: 20,
  },
  lastmessage: {
      color: 'gray',
      fontSize: 19,
  }
})