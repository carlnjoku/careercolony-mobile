import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import CreateAccount from './CreateAccount';

export default function HomeDetails({navigation, route}){

  return (
    <View style={styles.container}>
      {route.params.name && <Text>{route.params.name} {route.params._id}</Text>}
      <Button title="Open Drawer" onPress={() =>navigation.openDrawer("CreateAccount")} />
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
