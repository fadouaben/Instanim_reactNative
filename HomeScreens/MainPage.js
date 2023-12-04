import { View,StyleSheet, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottomnavbar from '../Components/Bottomnavbar'
import TopNavbar from '../Components/TopNavbar'
import FollowersPost from '../Components/FollowersPost'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MainPage = ({navigation}) => {
  const [userdata, setUserdata] =useState(null);
  useEffect(()=>{
    AsyncStorage.getItem('user')
      .then(data => {
        setUserdata(JSON.parse(data))
      })
      .catch(err => alert(err))

  },[])
  
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

