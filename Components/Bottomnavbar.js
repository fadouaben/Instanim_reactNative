import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import { icons1 } from '../CommonCss/pagecss';
import PropTypes from 'prop-types';
export default function Bottomnavbar({ page, navigation }) {
   

    Bottomnavbar.propTypes = {
    page: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    };
  return (
    <View style={styles.container}>
      {page === 'MainPage' ? (
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color="#225c70"
          style={styles.activeicons1}
          onPress={() => {
            navigation.navigate('MainPage');
          }}
        />
      ) : (
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color="#225c70"
          style={icons1}
          onPress={() => navigation.navigate('MainPage')}
        />
      )}

      {page === 'TodoList' ? (
        <FontAwesome5
          name="clipboard-list"
          size={24}
          color="#225c70"
          style={styles.activeicons1}
          onPress={() => navigation.navigate('TodoList')}
        />
      ) : (
        <FontAwesome5
          name="clipboard-list"
          size={24}
          color="#225c70"
          style={icons1}
          onPress={() => navigation.navigate('TodoList')}
        />
      )}

      {page === 'Search' ? (
        <Fontisto
          name="search"
          size={24}
          color="#225c70"
          style={styles.activeicons1}
          onPress={() => navigation.navigate('Search')}
        />
      ) : (
        <Fontisto
          name="search"
          size={24}
          color="#225c70"
          style={icons1}
          onPress={() => navigation.navigate('Search')}
        />
      )}

      {page === 'PetCare' ? (
        <MaterialIcons
          name="pets"
          size={24}
          color="#225c70"
          style={styles.activeicons1}
          onPress={() => navigation.navigate('PetCare')}
        />
      ) : (
        <MaterialIcons
          name="pets"
          size={24}
          color="#225c70"
          style={icons1}
          onPress={() => navigation.navigate('PetCare')}
        />
      )}

      {page === 'Notification' ? (
        <Ionicons
          name="ios-heart"
          size={24}
          color="#225c70"
          style={styles.activeicons1}
          onPress={() => navigation.navigate('Notification')}
        />
      ) : (
        <Ionicons
          name="ios-heart"
          size={24}
          color="#225c70"
          style={icons1}
          onPress={() => navigation.navigate('Notification')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#cbedf9',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 100,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor:"#fdf9fa",
     borderWidth:2,
  },
  activeicons1: {
    backgroundColor: 'white',
    borderRadius: 50,
    fontSize: 30,
    padding: 10,
  },
});
