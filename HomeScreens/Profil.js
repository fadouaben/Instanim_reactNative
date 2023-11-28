import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import Bottomnavbar from '../Components/Bottomnavbar'

export default function Profil({navigation}) {
  return (
    <View style={styles.container}>
      
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"Profil"} />
      <Bottomnavbar navigation={navigation} page={"Profil"} />

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