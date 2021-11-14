import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import CreateAccount from './CreateAccount';

export default function SignIn({navigation}){
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
      <Button title="Create Account" onPress={() =>navigation.push("MessageDetails", {name:'This is the message thread with the clients'})} />
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
