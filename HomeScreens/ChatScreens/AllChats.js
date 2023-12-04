import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../Config'
import { Ionicons } from '@expo/vector-icons';
import { searchbar } from '../../CommonCss/pagecss';
import { TextInput } from 'react-native';
import ChatCard from '../../Cards/ChatCard';

export default function AllChats() {
    

    
    

  return (
    <ScrollView style={styles.container}>
        <Ionicons name='chevron-back-circle' size={24} color="white" style={styles.gohomeicon}
            onPress={()=>navigation.navigate('MainPage')}
        />

        <View style={styles.c1}>
            <Text style={styles.formHead2}>Your Chats</Text>
            <TextInput style={searchbar} placeholder='Search'
                onChangeText={(text)=>setKeyword(text)}
            />
        </View>

        <View style={styles.c2}>
            
        </View>        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#cbedf9',
    },
    gohomeicon: {
        position: 'absolute',
        top: 45,
        left: 20,
        zIndex: 10,
        color: 'white',
        fontSize: 30,
    },
    c1: {
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: '#cbedf9',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#5799b1',
        borderWidth: 1,
        marginTop:35,
    },
    searchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 18,
    },
    c2: {
        width: '100%',
        padding: 10,
    },
    formHead2: {
        fontSize: 20,
        color: '#5799b1',
        textAlign: 'center',
        // fontWeight: 'bold',
        // backgroundColor: 'white',
    },

})