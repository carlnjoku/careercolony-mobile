import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Content from '../components/cards/Content';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';
import { TextInput } from 'react-native-paper';


import Stepper from "react-native-stepper-ui";

const Description = (props) => {
  return (
    <View style={{marginTop:40, marginBottom:40}}>
      <Text style={{marginBottom:10}}>{props.title}</Text>

      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
      />
    </View>
  );
};


const Skills = (props) => {
  return (
    <View style={{marginTop:40, marginBottom:40}}>
      <Text style={{marginBottom:10}}>{props.title}</Text>

      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
    </View>
  );
};
const MyComponent = (props) => {
  return (
    <View style={{marginTop:30, marginBottom:30}}>
      <Text style={{marginBottom:10}}>{props.title}</Text>

      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
      />
    </View>
  );
};

const content = [
  <Description title="Project description" />,
  <Skills title="Required Skills" />,
  <MyComponent title="Budget & Timeline" />,
  <MyComponent title="Preferences" />,
  <MyComponent title="Preview" />,
];




export default function Home({navigation}){
  const {signOut} = React.useContext(AuthContext)
  const [active, setActive] = React.useState(0);
  const [text, setText] = React.useState('');
  return (
    <>
    <Card style={{marginBottom:20}}>
      <Title style={{textAlign: 'center'}}>New Project</Title>
      <View style={{ marginVertical: 30, marginHorizontal: 20}}>
        <Stepper
          stepStyle = {{backgroundColor:"#00B7E3"}}
          buttonStyle = {{backgroundColor:"#00B7E3"}}
          active={active}
          content={content}
          onNext={() => setActive((p) => p + 1)}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => Alert.alert("Finish")}
        />
      </View>

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
