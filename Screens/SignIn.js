import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import {AuthContext} from '../context/AuthContext';
import { Button } from 'react-native-paper';


export default function SignIn({navigation}){
  const { signIn } = React.useContext(AuthContext)
  return (
    <ScreenContainer>
      <Text>Sign In Page</Text>
        <Button icon="camera" size="small" mode="contained" onPress={() =>signIn()} >
                Sign In
        </Button>

      <Text onPress={() =>navigation.push("SignUp")}>Don't have account yet? Sign up</Text>
      <Text onPress={() =>navigation.push("ForgotPassword")}>Forgot password ?</Text>
    </ScreenContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
