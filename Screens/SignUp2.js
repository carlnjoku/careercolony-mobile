import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import ScreenContainer from '../components/ScreenContainer';

export default function SignUp({navigation}){
  const {signUp} = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Text>This is the signup page -- To share a photo from your phone with a friend, just press the button below!</Text>
      <Button title="SignUp" onPress={() =>signUp()} />
    </ScreenContainer>
  )
}
