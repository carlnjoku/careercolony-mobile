import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import ScreenContainer from '../components/ScreenContainer';

export default function SignUp({navigation}){
  const {signUp} = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Text>Confirm a rest password link has been sent to email</Text>
      <Button title="SignUp" onPress={() =>signUp()} />
    </ScreenContainer>
  )
}
