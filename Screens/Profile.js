import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {AuthContext} from '../context/AuthContext';

export default function SignIn({navigation}){
  const {signOut} = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
      <Button title="Open Drawer" onPress={() =>navigation.openDrawer()} />
      <Button title="Sign Out" onPress={() =>signOut()} />
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
