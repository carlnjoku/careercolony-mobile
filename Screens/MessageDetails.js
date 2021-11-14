import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import CreateAccount from './CreateAccount';

export default function MessageDetails({navigation, route}){
  console.log(route)
  return (
    <View style={styles.container}>
      {route.params.name && <Text>{route.params.name}</Text>}
      <Text>Message Details screen</Text>
      <Button
        title="Go To Home"
        onPress={() => {
          navigation.navigate("Home", {
            screen:"HomeDetails",
            params:{name:route.params.name}
          })}
        }
      />
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
