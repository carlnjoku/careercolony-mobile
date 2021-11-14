import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import SignIn from './SignIn';

export default function ScreenContainer({children}){
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
});
