import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import Bottomnavbar from '../Components/Bottomnavbar'

export default function Chat({navigation}) {
  return (
    <View style={styles.container}>
      
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"Chat"} />
      <Bottomnavbar navigation={navigation} page={"Chat"} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#cbedf9',
        paddingVertical: 50,
    }
  })