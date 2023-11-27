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
const auth = firebase.auth();
const database = firebase.database();

export default function AddAnimal({route,navigation}) {
  const {email,password} = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // On iOS, showDatePicker remains true
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
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
           
        <Text>Enter Your Pet's Birthday Date *</Text>

        <TextInput
            style={styles.textinput}
            placeholder={format(date, 'dd/MM/yyyy')} 
            onFocus={showDatepicker}
            value={format(date, 'dd/MM/yyyy')}
        />
        
        {showDatePicker && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
            />
        )}

        <Pressable
            onPress={(e)=>{
                if (nom === '' && type === ''){
                    setError('Enter important information (*)');
                    }
                else{
                    auth.createUserWithEmailAndPassword(email,password)
                        .then((userCredential) => {
                            const userId = userCredential.user.uid;
                            const ref_animals = database.ref("animals");
                            const key = ref_animals.push().key;
                            const ref_unanimal = ref_animals.child("animal" + key);
                            ref_unanimal.set({
                                name:nom,
                                type:type,
                                daten:date,
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