import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Content from '../components/cards/Content';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import { TextInput } from 'react-native-paper';



export default function Home({navigation}){
  const {signOut} = React.useContext(AuthContext)
  const [active, setActive] = React.useState(0);
  const [text, setText] = React.useState('');
  return (
    <>
    <Card style={{marginBottom:20}}>
      <Title style={{textAlign: 'center'}}>New Project</Title>

      <Text>Home screens</Text>
      <Button onPress={() =>navigation.push("HomeDetails", {name: "This is the new home screen"})}>
        Home Details
      </Button>
      <Button onPress={() =>navigation.push("")} onPress={() =>navigation.openDrawer()}>
        Open Drawer
      </Button>
      <Button onPress={() =>signOut()}>
        Sign Out
      </Button>

  </Card>




    <ScreenContainer>
      <Text>Home screens</Text>
      <Button onPress={() =>navigation.push("HomeDetails", {name: "This is the new home screen"})}>
        Home Details
      </Button>
      <Button onPress={() =>navigation.push("")} onPress={() =>navigation.openDrawer()}>
        Open Drawer
      </Button>
      <Button onPress={() =>signOut()}>
        Sign Out
      </Button>
    </ScreenContainer>
    </>
  )
}
