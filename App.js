import React from 'react'
import Auth from './Screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Screens/Register';
import AddAnimal from './Screens/AddAnimal';
import Home from './Screens/Home';
import Todolist from './HomeScreens/Todolist';
import Search from './HomeScreens/Search';
import PetCare from './HomeScreens/PetCare';
import Notification from './HomeScreens/Notification';
import MainPage from './HomeScreens/MainPage';
import Chat from './HomeScreens/Chat';
import MyPets from './HomeScreens/Chat';
import Profil from './HomeScreens/Profil';

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

        <Stack.Screen
          name= "MainPage"
          component = {MainPage}
        />
        <Stack.Screen
          name= "TodoList"
          component = {Todolist}
        />
        <Stack.Screen
          name= "Search"
          component = {Search}
        />
        <Stack.Screen
          name= "PetCare"
          component = {PetCare}
        />
        <Stack.Screen
          name= "Notification"
          component = {Notification}
        />
        <Stack.Screen
          name= "Chat"
          component = {Chat}
        />
        <Stack.Screen
          name= "MyPets"
          component = {MyPets}
        />
        <Stack.Screen
          name= "Profil"
          component = {Profil}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

