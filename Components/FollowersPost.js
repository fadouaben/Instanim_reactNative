import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Post_Big_Card from '../Cards/Post_Big_Card'
export default function FollowersPost() {

    var data = [
        {
            id:1,
            username:'coucou',
            profile_image:require('../assets/post1.png'),
            image:require('../assets/post1.png'),
            likes:[
                'boby',
                'dou'
            ],
            Comments : [
                {
                    id:1,
                    username:'boby',
                    Comment:'nice'
                },
                {
                    id:2,
                    username:'dou',
                    Comment:'beauty'
                }
            ]
        },
        {
            id:2,
            username:'boby',
            profile_image:require('../assets/post2.png'),
            image:require('../assets/post2.png'),
            likes:[
                'coucou'
            ],
            Comments : [
                {
                    id:1,
                    username:'coucou',
                    Comment:'nice nice'
                },
                {
                    id:2,
                    username:'dou',
                    Comment:'beauty'
                }
            ]
        },
        {
            id:3,
            username:'dou',
            profile_image:require('../assets/post3.png'),
            image:require('../assets/post3.png'),
            likes:[
                'boby',
                'coucou'
            ],
            Comments : [
                {
                    id:1,
                    username:'boby',
                    Comment:'nice'
                },
                {
                    id:2,
                    username:'coucou',
                    Comment:'beauty'
                }
            ]
        }

    ]

  return (
    <ScrollView style={styles.container}>
        {
            data.map((item) => {
                return (
                    <Post_Big_Card key={item.id} username={item.username} profile_image={item.profile_image} post_pic={item.image} likes={item.likes} comments={item.Comments}/>
                )

            })
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'column',
        marginTop:30,
        marginBottom:30

    }
})