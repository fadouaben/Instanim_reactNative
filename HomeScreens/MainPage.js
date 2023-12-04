import { View,StyleSheet, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottomnavbar from '../Components/Bottomnavbar'
import TopNavbar from '../Components/TopNavbar'
import FollowersPost from '../Components/FollowersPost'

const MainPage = ({navigation}) => {
  
  
  return (
    <View style={styles.container}>
      
      
      <StatusBar/>
      <TopNavbar navigation={navigation} page={"MainPage"}  />
      <FollowersPost/>
      <Bottomnavbar navigation={navigation} page={"MainPage"} />

    </View>
  )
}
export default MainPage;


const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#cbedf9',
      paddingVertical: 50,
  }
})

