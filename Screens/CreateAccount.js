import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
// import SignIn from './SignIn';

export default function CreateAccount({navigation}){
  return (
    <ScreenContainer>
      <Text>To share a photo from your phone with a friend, just press the button below!</Text>
      <Button title="SignIn" onPress={() =>navigation.push("SignIn")} />
    </ScreenContainer>
  )
}


const styles = StyleSheet.create({
  something: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
