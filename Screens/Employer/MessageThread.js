import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { Button } from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';


export default function Home({navigation}){
  const {signOut} = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Text>Home screen</Text>
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
