import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/logo3.png'
import { icons1, logo2 } from '../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const TopNavbar = ({ navigation, page }) => {

    // console.log(page)
    return (
        <View style={styles.container}>
            

            <Image source={logo} style={logo2} />
                <View style={styles.page}>
                {page === 'MyPets' ? (
                        <FontAwesome5 name="dog" size={24} color="#225c70"  style={[styles.activeicons1,{marginRight:25,}]}  onPress
                            ={
                                () => navigation.navigate('MyPets')
                            } 
                        />   
                    ) : 
                    (
                        <FontAwesome5 name="dog" size={24} color="#225c70"  style={[icons1,{marginRight:25,}]}  onPress
                            ={
                                () => navigation.navigate('MyPets')
                            } 
                        />   
                    )
                }

                {page === 'Chat' ? (
                        <Ionicons name="chatbubbles" size={24} color="#225c70" style={[styles.activeicons1,{marginRight:15,}]} onPress
                            ={
                                () => navigation.navigate('Chat')
                            } 
                        />  
                    ) : 
                    (
                        <Ionicons name="chatbubbles" size={24} color="#225c70" style={[icons1,{marginRight:15,}]} onPress
                            ={
                                () => navigation.navigate('Chat')
                            } 
                    />  
                    )
                }
                {page === 'Profil' ? (
                        <FontAwesome name="user" size={24} color="#225c70" style={[styles.activeicons1,{marginRight:15,}]} onPress
                            ={
                                () => navigation.navigate('Profil')
                            } 
                        />  
                    ) : 
                    (
                        <FontAwesome name="user" size={24} color="#225c70" style={[icons1,{marginRight:15,}]} onPress
                            ={
                                () => navigation.navigate('Profil')
                            } 
                    />  
                    )
                }

            
           
            </View>
            

            
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        //paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: "#cbedf9",
        borderColor:"#fdf9fa",
        borderWidth:2,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,


    },
    page:{
        flexDirection: 'row',
        

    },
    activeicons1: {
        backgroundColor: 'white',
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
      },
})