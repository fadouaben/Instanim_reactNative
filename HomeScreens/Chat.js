import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import TopNavbar from '../Components/TopNavbar'
import Bottomnavbar from '../Components/Bottomnavbar'
import AllChats from './ChatScreens/AllChats'
export default function Chat({navigation,route}) {
  const{ currentUser} =  route.params;

  return (
    <View style={styles.container}>
      
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"Chat"} />
      <Bottomnavbar navigation={navigation} page={"Chat"}  />
      <AllChats navigation={navigation} />
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