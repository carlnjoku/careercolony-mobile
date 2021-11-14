import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function SignUp({navigation}){
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Forgot password page</Text>
      <Button title="Create Account" onPress={() =>navigation.push("CreateAccount")} />
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
