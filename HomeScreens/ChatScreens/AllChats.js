import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../../Config'
import { Ionicons } from '@expo/vector-icons';
import { searchbar } from '../../CommonCss/pagecss';
import { TextInput } from 'react-native';
import ChatCard from '../../Cards/ChatCard';
const auth = firebase.auth();
export default function AllChats({navigation}) {
    const [chats, setChats] = useState(null);
    const currentUser =auth.currentUser;
    const currentId = currentUser.uid;
    const MsgMap = new Map();
    const [user, setUser] = useState({});
    const [keyword, setKeyword] = useState('')
    useEffect(()=>{
        const fetchData = async () =>
        {try{
            const messagesRef = firebase.database().ref('messages');
            
            
            messagesRef.on('value',snapshot => {
              
              if (snapshot.exists()){
                 
                snapshot.forEach(childSnp =>{
                    const roomId = childSnp.key;
                    const roomSpilt = roomId.split('_');
                    if(roomSpilt.length>=3){
                        if (roomSpilt[1] === currentId ||roomSpilt[1] === currentId){
                            const roomRef = messagesRef.child(roomId);
                            const roomMsgsRef = roomRef.child('messages');

                            roomMsgsRef.orderByChild('date').limitToLast(1).on('value',msgsnap=>{
                                msgsnap.forEach(msgchild =>{
                                    const lastMsg = msgchild.val();
                                    const otherId = roomSpilt[1] === currentId ? roomSpilt[2] : roomSpilt[1] ; 
                                    if (!MsgMap.has(otherId) || lastMsg.date > MsgMap.get(otherId).message.date){
                                        MsgMap.set(otherId,{message:lastMsg});
                                    }

                                });
                            });
                        }
                        
                    }

                });
                setChats(Array.from(MsgMap.entries)).sort((a, b) => b.date - a.date);
                

               
              }
            });
        }catch(error){
            console.error("Error get data",error);
        }};

        const fetchUser = async ()=>{
            const refUser = firebase.database().ref('users');
            const usersSnap = await refUser.once('value');
            if (usersSnap.exists()){
                const users = usersSnap.val();
                setUser(users);
            }
        };

        fetchData();
        fetchUser();
      },[]);

    
    

  return (
    <ScrollView style={styles.container}>
        <Ionicons name='chevron-back-circle' size={24} color="white" style={styles.gohomeicon}
            onPress={()=>navigation.navigate('MainPage')}
        />

        <View style={styles.c1}>
            <Text style={styles.formHead2}>Your Chats</Text>
            <Ionicons name="ios-add-circle-sharp" size={30} color="#225c70" onPress={()=>{
                navigation.navigate('MessagePage',{currentId});

                }}
            />
            <TextInput style={searchbar} placeholder='Search'
                onChangeText={(text)=>setKeyword(text)}
            />
        </View>

        <View style={styles.c2}>
            {
                
                chats !== null && chats.filter(
                    (chat)=>{
                        if (keyword == ''){
                            return chat
                        }
                        else if (chat.username.toLowerCase().includes(keyword.toLowerCase()) || chat.message.toLowerCase().includes(keyword.toLowerCase())){
                            return chat
                        }
                    }

                ).map(([otherId,{message}])=>{ return <ChatCard username={user[otherId]?.name} message={message} navigation={navigation} otherId={otherId}/>})
            }
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