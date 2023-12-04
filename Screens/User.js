import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { BackHandler,  ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState,useRef} from 'react'
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import firebase from '../Config';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const auth = firebase.auth();
const database = firebase.database();

export default function User({route,navigation}) {
  
  const {email,password} = route.params;
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [error, setError] = useState('');
  const [isDefault, setIsDefault] = useState(true);
  const [uricod, setUricod] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      /*setIsdefault(false);
      seturlImage(result.assets[0].uri);*/
      const uri = result.assets[0].uri;
      setIsDefault(false);
      setUricod(uri);
    }
  };
  const imageToBlob = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob"; //bufferArray
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    return blob;
  };

  /*const uploadLocalImage = async (urilocal)=>{
    //covertir l'image  to blob 
    const blob = await imageToBlob(urilocal);

    //save blob to reference
    const ref_mes_images = storage.ref().child('MesImages');
    const ref_une_image = ref_mes_images.child('Image'+currentId+'.png');
    ref_une_image.put(blob);

    //get uri
    const uri =await ref_une_image.getDownloadURL();
    return uri;
  }*/
  
  const linkAnimalToOwner = (ownerId, animalId) => {
    const ref_user_animals = database.ref(`user_animals/${ownerId}`);
    ref_user_animals.push(animalId);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo3.png")}/>
      <View style={styles.addAnim}>
       
        <Text style={{color: '#225c70',
                marginTop: 20,
                fontWeight: '700',
                fontSize: 24,
                textAlign: 'center',
                }}>
            Personal Information
        </Text>
        <Text style={{textAlign: 'center',color:"#5799b1",fontSize:10}}>Continue with entering your pet's information.</Text>
        <Text style={{ color: 'red' }}>{error}</Text>
        <TouchableOpacity style={{width:'50%',height:'20%',marginTop:5,marginBottom:30}} onPress={()=>{
                  pickImage();
                  

                }}>
                  <Image source={isDefault ?  require("../assets/images.png") : {uri:uricod}} 
                      style={styles.image}
                  />
          </TouchableOpacity>

        <Text>Enter Your First Name *</Text>

        <TextInput 
          
          blurOnSubmit={false}
          style={styles.textinput} 
          placeholder='Name'
          onChangeText={(text) => setNom(text)}
          
        ></TextInput>      
        <Text>Choose Your Last Name *</Text>

        <TextInput 
          
          blurOnSubmit={false}
          style={styles.textinput} 
          placeholder='Prenom'
          onChangeText={(text) => setPrenom(text)}
        ></TextInput>   
           
        
        

        <Pressable
            onPress={(e)=>{
                if (nom === '' || prenom === '' ){
                    setError('Enter important information (*)');
                    }
                else{
                    const nomPrenom = nom+" "+prenom
                    navigation.navigate('AddAnimal',{email,password,nomPrenom,uricod});
                    
                    }
                
            }}
            //title="Submit"
            style={[styles.button_conf,{borderRadius: 50}, { width: '100%' },{ height: '10%' },{justifyContent: 'center'}]}  backgroundColor="#225c70">
              <Text style={{textAlign: 'center',color:"white"}}>Next</Text>
        </Pressable>

      </View>
      
    </View>
  )
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
    justifyContent:"center"
    

  },
  button_conf:{
    
  },
  addAnim:{
    width: '75%',
    height:500,
    padding: 10,
    backgroundColor: "#fdf9fa",
    marginTop: 30,
    marginLeft:20,
    position: 'relative',
    textAlign :'justify',
    padding: 16, // 1rem is assumed to be 16px
    borderRadius: 5,
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
  image:{
    //padding: 10,
    borderRadius: 200,
    width:"100%",
    justifyContent:'center',
    height:"130%",
   


  },
});