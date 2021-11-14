import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Platform, TouchableOpacity } from 'react-native';

export default function Home({navigation, route}){

return (
  <View>
  <Text>The live converstaion {route.params.name} </Text>
  </View>
)

}
