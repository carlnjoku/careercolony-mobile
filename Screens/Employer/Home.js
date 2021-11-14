import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { Button } from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userService from '../../services/userService';



export default function Home({navigation}){
  const {signOut} = React.useContext(AuthContext)



  const[userInf, setUserInf] = React.useState("")
  const[firstname, setFirstname] = React.useState("")
  const[username, setUserName] = React.useState("")

  const userDetails = async() => {
    let userInfo;
    userInfo = null;
    try {
      userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
      const ui = userInfo
        setUserInf(ui)
        setFirstname(ui.firstname)
        console.log(ui.data)



        dispatch({type:'RETRIEVE_TOKEN', token:ui.data})
        console.log(ui)
      } catch (e) {
         // saving error
    }
  }

  React.useEffect(()=> {

    userDetails()
    // dispatch({type:'RETRIEVE_TOKEN'})

  },[])


  return (
    <ScreenContainer>
      <Text>This the employer Home screen </Text>
      <Button onPress={() =>navigation.push("HomeDetails", {name: "This is the new home screen"})}>
        Home Details
      </Button>
      <Button onPress={() =>navigation.push("")} onPress={() =>navigation.openDrawer()}>
        Open Drawer
      </Button>
      <Button onPress={() =>signOut()}>
        Sign Out
      </Button>
    </ScreenContainer>
  )
}
