import { StatusBar } from 'expo-status-bar';
import { BackHandler,  ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState,useRef} from 'react'
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import firebase from '../Config';
const auth = firebase.auth();

export default function Register({navigation}) {
  const [email,setEmail]=useState("A");
  const [pwd,setPwd]=useState("0");
  const [confirm,onChangeConfirm] = useState();
  const refinput2 = useRef()

  return (
    <View style={styles.container} >
      
      <Image source={require("../assets/logo3.png")}/>
      <View style={styles.authentif}>
        <Text style={{fontSize:32, fontWeight:"bold",color: '#225c70'}}> Sign Up </Text>

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
        <TextInput onChangeText={onChangeConfirm} style={styles.textinput} placeholder='Confirm Password' secureTextEntry={true}></TextInput>

        <View style={{ flex: 0, flexDirection: "row",justifyContent: 'center', width: '50%',height:'20%'}}>
          <Pressable
            onPress={()=>{
                if (pwd == confirm){
                    navigation.navigate('User',{email,password:pwd});
        
                    }
            }}
            //title="Submit"
            style={[styles.button_conf,{borderRadius: 50}, { width: '150%' },{ height: '50%' },{justifyContent: 'center'}]}  backgroundColor="#225c70">
              <Text style={{textAlign: 'center',color:"white"}}>Next</Text>
            </Pressable>
             
        </View>
        
        <TouchableOpacity style={{alignItems:"flex-end",paddingRight:20, width:"100%"}}>
          <Text  
            onPress={()=> {navigation.navigate("Auth");}
          }
            style={{color:"#5799b1", fontWeight:"bold", textDecorationLine:"underline"}}>
            You have alrady an account ?
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
      alignItems: 'center',//align hor
      justifyContent: 'center',//align vert
    },
    textinput:{
      width: "90%",
      textAlign: 'center',
      borderWidth: 1,
      padding:10,
      margin:12,
      borderRadius:15,
      fontSize:15,
      fontFamily:"serif",
      
      
    },
    authentif: {
      backgroundColor: "#0003",
      alignContent:"center",
      alignItems: 'center',//align hor
      width:"85%",
      height:390,
      borderRadius: 50,
      justifyContent:"center",
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
  