import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import SignIn from './SignIn';



  export const SignIn = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Sign In Page</Text>
        <Button title="Create Account" onPress={() =>navigation.push("CreateAccount")} />
      </View>
    )
  }

  export const CreateAccount = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Create account page!</Text>
        <Button title="SignIn" onPress={() =>navigation.push("SignIn")} />
      </View>
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
