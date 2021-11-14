import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
 } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { Button } from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userService from '../../services/userService';



export default function Home({navigation}){
  const {signOut} = React.useContext(AuthContext)


  const[userInf, setUserInf] = React.useState()
  const[firstname, setFirstname] = React.useState("")
  const[lastname, setLastname] = React.useState("")
  const[userId, setUserId] = React.useState("")
  const[updates, setUpdates] = React.useState([])

  const userDetails = async() => {
    let userInfo;
    userInfo = null;
    try {
      const userInfo = await AsyncStorage.getItem('userInfo')

      const ui = JSON.parse(userInfo)
        console.log(ui)
        setUserInf(ui)
        setFirstname(ui.firstname)
        setLastname(ui.lastname)
        setUserId(ui._id)

        userService.getProjectFeeds(ui._id)
        .then(response => {
            const res = response.data.data;
            setUpdates(res)
            console.log(res)
            // setLoading(false)
            }
        )
        console.log(ui)
      } catch (e) {
         // saving error
    }
  }

  React.useEffect(()=> {

    userDetails()
    // dispatch({type:'RETRIEVE_TOKEN'})

  },[])

  return (
    <>
    <FlatList
      data={updates}
      renderItem={({item})=>(
        <View style={styles.view}>
        <TouchableOpacity onPress={() =>navigation.navigate("JobDetails", {name: item.jobs.title, jobId: item.jobs.projectId, userId: userId})}>
          <Text style={styles.item}>
          {item.jobs.title}

          </Text>

          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.descption}>
          {item.jobs.job_description}
          </Text>
        </TouchableOpacity>
        </View>
      )}
       // ItemSeparatorComponent={renderSeparator}


    />



    </>
  )
}


const styles = StyleSheet.create({
    item: {
        padding: 20,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold'
    },
    descption: {
      color:'#8C8C8C',
      fontSize:14,
      paddingLeft: 20,
      paddingRight: 20,
    },

    view: {
      height: 100,
        width: "97%",
        margin: 5,
        backgroundColor: "#fff",

        borderColor: "black",
        alignSelf: "center",
        shadowOpacity: 1,
    }
})
