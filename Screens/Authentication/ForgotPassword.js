import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';

export default function SignUp({navigation}){
  console.log(navigation)
  return (
    <ScreenContainer>
      <Text>Forgot password page</Text>
      <Button title="Create Account" onPress={() =>navigation.push("CreateAccount")} />
    </ScreenContainer>
  )
}
