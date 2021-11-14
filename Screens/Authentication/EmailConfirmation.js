import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import ScreenContainer from '../components/ScreenContainer';
import { Button } from 'react-native-paper';




export default function SignUp({navigation}){
  const {signUp} = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Text>Email confirmation </Text>
      <Button title="SignUp" />
      <Button icon="camera" size="small" mode="contained" onPress={() =>signUp()} >
        Press me
      </Button>
    </ScreenContainer>
  )
}
