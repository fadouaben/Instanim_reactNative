import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { BackHandler,  ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {useState,useRef} from 'react'
import { Image, Platform } from 'react-native';
import { Pressable } from 'react-native';
import firebase from '../Config';
const storage = firebase.storage();

import DateTimePicker from '@react-native-community/datetimepicker';
const auth = firebase.auth();
const database = firebase.database();

export default function AddAnimal({route,navigation}) {
  console.log(route.params);
  const {email,password,nomPrenom,uricod} = route.params;
  const [date, setDate] = useState(new Date());
  //const [url, setUrl] = useState('');
  const [dateText, setDateText] = useState('');
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

  const uploadLocalImage = async (urilocal,userId)=>{
    //covertir l'image  to blob 
    const blob = await imageToBlob(urilocal);

    //save blob to reference
    const ref_mes_images = storage.ref().child('MesImages');
    const ref_une_image = ref_mes_images.child('Image'+userId+'.png');
    ref_une_image.put(blob);

    //get uri
    const uri =await ref_une_image.getDownloadURL();
    return uri;
  }
  const [showDatePicker, setShowDatePicker] = useState(false);


  
  
  const toggleDatepicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onDateChange = ({type}, selectedDate) => {
    if (type == "set"){
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === 'android'){
        toggleDatepicker();
        setDateText(currentDate.toDateString());
      }
    }
    else{
      toggleDatepicker();
    }
    
  };

  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const linkAnimalToOwner = (ownerId, animalId) => {
    const ref_user_animals = database.ref(`user_animals/${ownerId}`);
    ref_user_animals.push(animalId);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo3.png")}/>
      <View style={styles.addAnim}>
        <Image source={require("../assets/poppy-removebg.png")} 
            style={{
                position: 'absolute',
                zIndex: 1,
                top: -150,
                right: -10,
                width: 150, 
                height: 250, 
            }}/>
        <Image source={require("../assets/cat-removebg.png")}
            style={{
                position: 'absolute',
                zIndex: 1,
                bottom: -20,
                left:-115,
                width: 115, 
                height: 450, 
                
                
              }}
        />
        <Text style={{color: '#225c70',
                marginTop: 20,
                fontWeight: '700',
                fontSize: 24,
                textAlign: 'center',
                }}>
        Add Animal
        </Text>
        <Text style={{textAlign: 'center',color:"#5799b1",fontSize:10}}>Continue with entering your pet's information.</Text>
        <Text style={{ color: 'red' }}>{error}</Text>

        <Text>Enter Your Pet's Name *</Text>

        <TextInput 
          
          blurOnSubmit={false}
          style={styles.textinput} 
          placeholder='Name'
          onChangeText={(text) => setNom(text)}
          
        ></TextInput>      
        <Text>Choose Your Pet's Type *</Text>

        <TextInput 
          
          blurOnSubmit={false}
          style={styles.textinput} 
          placeholder='Type'
          onChangeText={(text) => setType(text)}
        ></TextInput>   
           
        <Text>Choose Your Pet's Birth *</Text>
        {
          showDatePicker && (
            <DateTimePicker
              mode='date'
              disabled="spinner"
              value={date}
              onChange={onDateChange}
            />
          )
        }

        {
          !showDatePicker && (
            <Pressable
            onPress={toggleDatepicker}
            >
              <TextInput 
                style={styles.textinput} 
                placeholder='Sat Dec 21 2023'
                value={dateText}
                editable={false}
                onChangeText={(text) => setDateText(text)}
              />  
            </Pressable>
          )
        }

       

        
        

        <Pressable
            onPress={async (e)=>{
              //console.log(uricode);
                if (nom === '' && type === ''){
                    setError('Enter important information (*)');
                    }
                else{
                   await auth.createUserWithEmailAndPassword(email,password)
                        .then(async (userCredential) => {
                            const userId = userCredential.user.uid;
                            console.log(uricod)
                            const url =await uploadLocalImage(uricod,userId);
                            
                            
                            const ref_users = database.ref("users");
                            const ref_unuser = ref_users.child('user'+userId);
                            ref_unuser.set({
                              id:userId,
                              name:nomPrenom,
                              url:url,
                            
                            })
                            const ref_animals = database.ref("animals");
                            const key = ref_animals.push().key;
                            const ref_unanimal = ref_animals.child("animal" + key);
                            ref_unanimal.set({
                                name:nom,
                                type:type,
                                daten:dateText,
                            });
                            linkAnimalToOwner(userId, key);
                            navigation.navigate('Auth');})
                        .catch ((err) => { alert(err)});
                    
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
    marginTop: 90,
    marginLeft:70,
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
  }
});