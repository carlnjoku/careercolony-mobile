import React from 'react';
import {View, StyleSheet } from 'react-native';

const FixedButtom = ({children}) => {
  return (
    <View style={styles.container}>
      {children && React.cloneElement(children, {styles:styles.btn})}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left:0,
    right: 0,
    padding:20,
    height:80,
  },
  btn: {
    height:'100%',
    justifyContent: 'center',
    color:'#fff'
  }
    // alignItems: 'center',
    // justifyContent: 'center',
});

export default FixedButtom;
