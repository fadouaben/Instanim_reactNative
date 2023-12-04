import { StatusBar } from 'expo-status-bar';
import { BackHandler,  ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState,useRef} from 'react'
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import firebase from '../Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = firebase.auth();
export default function Auth({navigation}) {
  const [email,setEmail]=useState("A");
  const [pwd,setPwd]=useState("0");
  const refinput2 = useRef()
  return (
    <View style={styles.container}>
      
      <Image source={require("../assets/logo3.png")}/>
      <View style={styles.authentif}>
        <Text style={{color: '#225c70',
                marginTop: 20,
                fontWeight: '700',
                fontSize: 24,
                textAlign: 'center'
                }}>Sign In</Text>

        <TextInput 
          onSubmitEditing={()=>{refinput2.current.focus()}}
          blurOnSubmit={false}
          style={styles.textinput} 
          placeholder='Email'
          onChangeText={(text)=>{setEmail(text)}}
          keyboardType='email-address'
        ></TextInput>
        <TextInput 
          ref={refinput2}
          onChangeText={(text)=>setPwd(text)}
          secureTextEntry={true} 
          style={styles.textinput} 
          placeholder='Password'></TextInput>
        <View style={{ flex: 0, flexDirection: "row",justifyContent: 'center', width: '50%',height:'20%'}}>
          <Pressable
            onPress={()=>{
              auth.signInWithEmailAndPassword(email,pwd)
              .then(async ()=>{
                await AsyncStorage.setItem('user', JSON.stringify(auth.currentUser));
                navigation.navigate('MainPage',auth.currentUser)})
              .catch ((err)=>{alert(err)})
            }}
            //title="Submit"
            style={[styles.button_conf, { marginRight: 10 },{borderRadius: 50}, { width: '150%' },{ height: '50%' },{justifyContent: 'center'}]}  backgroundColor="#225c70">
              <Text style={{textAlign: 'center',color:"white"}}>Submit</Text>
            </Pressable>
            
        </View>
        
        <TouchableOpacity style={{alignItems:"flex-end",paddingRight:20,margin:12, width:"100%"}}>
          <Text  
            onPress={()=> {
              navigation.navigate("Register");
            }
          }
            style={{color:"#5799b1", fontWeight:"bold", textDecorationLine:"underline"}}>
            Create New ?
          </Text>
        </TouchableOpacity>

      </View>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cbedf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    width: "90%",
    textAlign: 'center',
    borderWidth: 1,
    padding:10,
    margin:12,
    borderRadius:15,
    fontSize:15,
    fontFamily:"serif"
    
    
    
  },
  authentif: {
    backgroundColor: "#0003",
    alignContent:"center",
    alignItems: 'center',//align hor
    width:"85%",
    height:320,
    borderRadius: 50,
    justifyContent:"center",
    padding: 10,
    backgroundColor: "#fdf9fa",
    
    position: 'relative',
    textAlign :'justify',
    padding: 16, // 1rem is assumed to be 16px
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  button_conf:{
    
  }
});