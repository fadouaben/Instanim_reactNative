import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function AddPost({profile_image,username}) {
    const [isDefault, setIsdefault] = useState(true);
    const [urlImage, seturlImage] = useState();

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
          const uri = result.assets[0].uri;
          setIsdefault(false);
          seturlImage(uri);
        }
      };
  return (
    <View style={styles.container}>
      
      <View style={styles.c1}>
        <Image source={require('../assets/post1.png')} style={styles.profilepic}/>
        <Text style={styles.username}>CouCou</Text>
      </View>
      <View style={styles.post}>
        <TextInput placeholder="Enter new description" multiline={true} style={[styles.post,{height:'55%'}]} numberOfLines={5} />
        <Image style={{width:100,height:100}} source={{uri:urlImage}}></Image>
        <MaterialIcons name="image" size={30} color="#225c70"  onPress={()=>{
                  pickImage();
                  

                }}/>
       
      </View>
      <View style={styles.post}>
        <Pressable style={[ { marginRight: 10, marginBottom:10 },{borderRadius: 50}, { width: '75%' },{ height: '20%' },{justifyContent: 'center',alignItems:'center'}]}  backgroundColor="#225c70">
            <Text style={{textAlign: 'center',color:"white"}}>Post</Text>
        </Pressable>
        <Pressable style={[ { marginRight: 10 },{borderRadius: 50}, { width: '75%' },{ height: '20%' },{justifyContent: 'center',alignItems:'center'}]}  backgroundColor="#fdf9fa">
            <Text style={{textAlign: 'center',color:"#225c70"}}>cancel</Text>
        </Pressable>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cbedf9',
      
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
      
    },
    profilepic:{
        width:30,
        height:30,
        borderRadius:30,
        borderColor : '#fdf9fa',
        borderWidth: 1,
    },
    username:{
        color: '#225c70',
        marginLeft:10,
        fontSize:17,
        fontWeight:'bold',

    },
    c1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#cbedf9',
    },
    post:{
        textAlign:"center",
        alignItems:'center'
    }
  });