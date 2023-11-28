import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Bottomnavbar from '../Components/Bottomnavbar'
import TopNavbar from '../Components/TopNavbar'

export default function MyPets({navigation}) {
  return (
    <View style={styles.container}>
      
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"MyPets"} />
      <Bottomnavbar navigation={navigation} page={"MyPets"} />

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