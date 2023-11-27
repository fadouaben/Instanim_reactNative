import { View, Text } from 'react-native'
import React from 'react'
import Auth from './Screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Register';
import AddAnimal from './Screens/AddAnimal';
import Home from './Screens/Home';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen
          name= "Auth"
          component = {Auth}
        />
        <Stack.Screen
          name= "Register"
          component = {Register}
        />
        <Stack.Screen
          name= "AddAnimal"
          component = {AddAnimal}
        />
         <Stack.Screen
          name= "Home"
          component = {Home}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

