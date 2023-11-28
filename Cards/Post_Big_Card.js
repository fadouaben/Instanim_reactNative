import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { icons1 } from '../CommonCss/pagecss';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function Post_Big_Card({post_pic, profile_image,username,likes,comments}) {
    const [isliked, setIsliked] = useState(false);
    const [showcomments, setShowcomments] = useState(false);
    return (
    <View style={styles.contaiiner}>
      <View style={styles.c1}>
        <Image source={profile_image} style={styles.profilepic}/>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={post_pic} style={styles.image}/>
      <View style={styles.s2}>
            {
                isliked ?
                    (<View style={styles.s21}>
                        <AntDesign name="heart" size={24} color='black' style={styles.iconliked} 
                            onPress={()=>{
                                setIsliked(false);
                            }}
                        />
                        <Text style={styles.liked}>{likes.length + 1}</Text>
                    </View>)
                    :
                    (<View style={styles.s21}>
                        <AntDesign name="hearto" size={24} color='black' style={icons1} 
                            onPress={()=>{
                                setIsliked(true);
                            }}
                        />
                        <Text style={styles.liked}>{likes.length}</Text>
                    </View>)
            }
            <View style={styles.s22}>
                <FontAwesome name='comment' size={24} color='black' style={icons1} 
                    onPress={()=>{
                        setShowcomments(!showcomments);
                    }}
                />  
            </View>
        </View>
      {
        showcomments == true &&
        <View style={styles.s3}>
            {
                comments.map((item,index)=>{
                    return(
                        <View style={styles.s31} key={item.id}>
                            <Text style={styles.commentuser}>{item.username}</Text>
                            <Text style={styles.commenttext}>{item.Comment}</Text>
                        </View>
                    )
                })
            }
        </View>
      }
    </View>
  )
}
const styles = StyleSheet.create({
    contaiiner:{
        backgroundColor:'#fdf9fa',
        width:'100%',
        borderRadius:10,
        marginVertical:10,
        overflow:'hidden',
        borderColor:'#fdf9fa',
        borderWidth: 1,

    },
    c1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#cbedf9',
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
    image:{
        width:'100%',
        aspectRatio:1 ,
        height:undefined,
    },
    s2:{
        width: '100%',
        flexDirection:'row',
        backgroundColor:'#cbedf9',
        padding:10,
        alignItems:'center',
    },
    s21:{
        backgroundColor:'#cbedf9',
        flexDirection:'row',
        alignItems:'center',
    },
    notliked:{
        color:'grey',
        marginLeft:5,
        fontSize:25,
    },
    liked: {
        color:'#5799b1',
        fontSize:20,
    },
    iconliked:{
        color:'#DC143C',
        fontSize:30,
    },
    s22:{
        marginLeft:20,
        backgroundColor:'#cbedf9',

    },
    s3:{
        width:'100%',
        backgroundColor:'#cbedf9',
        padding:10,
    },
    commentuser:{
        color: '#225c70',
        fontSize:17,
        fontWeight:'bold',
    },
    commenttext:{
        color:'#5799b1',
        fontSize:17,
        marginLeft:5,
    },
    s31:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:3,
    }


})