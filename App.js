import { AppRegistry } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './navigation/Main';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00B7E3',
    accent: 'yellow',
  },
};


export default function App() {

  return (
    <PaperProvider theme = {theme}>
      <Main />
    </PaperProvider>


  );
}
