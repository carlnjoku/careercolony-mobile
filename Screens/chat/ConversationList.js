import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
 } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import Conversation from './Conversation';
import { Button, List } from 'react-native-paper';
import { ListItem, Avatar } from 'react-native-elements'


import {AuthContext} from '../../context/AuthContext';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userService from '../../services/userService';

import io from 'socket.io-client';


export default function ConversationList({navigation}){
  const {signOut} = React.useContext(AuthContext)

  const socket = io("http://localhost:5001/private");

  const[userInf, setUserInf] = React.useState()
  const[userId, setUserId] = React.useState("")
  const[conversations, setConversations] = useState([]);
  const[userType, setUserType] = useState('')



  const userDetails = async() => {
    let userInfo;
    userInfo = null;
    try {
      const userInfo = await AsyncStorage.getItem('userInfo')

      const ui = JSON.parse(userInfo)
        console.log(ui)
        setUserInf(ui)
        setUserId(ui._id)
        setUserType(ui.user_type)

        if(ui.user_type === 'employer'){
            // Fetch employer active chats
          await userService.getActiveRoomByEmployer(`${ui._id}`)
            .then(response => {
              console.log(response.data.data)
              let newConversations = response.data.data.map(result => {
                return {
                  photo: result.avatar,
                  name: `${result.firstname} ${result.lastname}`,
                  room: result.room,
                  message: result.message,
                  unread_counted: result.unread_counted,
                  unread_chat_count: result.unread_chats,
                  project_title: result.project_title,
                  sender_type: result.sender_type,
                  latest_message: result.latest_message,
                  created_on: result.created_on,
                  presence_status:result.presence_status,
                  timezoneName:result.timezoneName,
                };
              });
              setConversations([...conversations, ...newConversations])

            })
        }else if(ui.user_type === 'developer'){
            // Fetch freelancer active chats
          await  userService.getActiveRoomByUser(`${ui._id}`)
              .then(response => {
                console.log(response.data.data)
                let newConversations = response.data.data.map(result => {
                  return {
                    photo: result.avatar,
                    name: `${result.firstname} ${result.lastname}`,
                    room: result.room,
                    message: result.message,
                    unread_counted: result.unread_counted,
                    unread_chat_count: result.unread_chats,
                    project_title: result.project_title,
                    sender_type: result.sender_type,
                    latest_message: result.latest_message,
                    created_on: result.created_on,
                    presence_status:result.presence_status,
                    timezoneName:result.timezoneName,
                  };
                });
                setConversations([...conversations, ...newConversations])

            })
        }else{

        }
        console.log(socket)
        socket.emit('message1', {
           room: ui._id,
           message: 'just entered roooooooooooooooomList '+ ui._id,
           sender_type:user_type
         })

      } catch (e) {
         // saving error
    }
  }


  const getRoomActiveRoomList = async(type, uid) => {
    // Check for user type
    if(type === 'employer'){
        // Fetch employer active chats
      await userService.getActiveRoomByEmployer(`${uid}`)
        .then(response => {
          console.log(response.data.data)
          let newConversations = response.data.data.map(result => {
            return {
              photo: result.avatar,
              name: `${result.firstname} ${result.lastname}`,
              room: result.room,
              message: result.message,
              unread_counted: result.unread_counted,
              unread_chat_count: result.unread_chats,
              project_title: result.project_title,
              sender_type: result.sender_type,
              latest_message: result.latest_message,
              created_on: result.created_on,
              presence_status:result.presence_status,
              timezoneName:result.timezoneName,
            };
          });
          setConversations([...conversations, ...newConversations])

        })
    }else if(type === 'developer'){
        // Fetch freelancer active chats

      await  userService.getActiveRoomByUser(`${uid}`)
          .then(response => {
            console.log(response.data.data.unread_chats)
            console.log(response.data.data)
            let newConversations = response.data.data.map(result => {
              return {
                photo: result.avatar,
                name: `${result.firstname} ${result.lastname}`,
                room: result.room,
                message: result.message,
                unread_counted: result.unread_counted,
                unread_chat_count: result.unread_chats,
                project_title: result.project_title,
                sender_type: result.sender_type,
                latest_message: result.latest_message,
                created_on: result.created_on,
                presence_status:result.presence_status,
                timezoneName:result.timezoneName,
              };
            });
            setConversations([...conversations, ...newConversations])

        })
    }else{

    }
  }

  React.useEffect(()=> {

    userDetails()

    getRoomActiveRoomList(userType, userId)
    // dispatch({type:'RETRIEVE_TOKEN'})

  },[])

  return (
    <>
    <FlatList
      data={conversations}
      renderItem={({item})=>(
        <View style={styles.view}>
        <TouchableOpacity onPress={() =>navigation.navigate("Conversation", {room: item.room, userId: userId})}>
          <Avatar.Image size={24} source={item.photo} />
          <Text style={styles.item}>
          {item.name}

          </Text>

          <Text ellipsizeMode='tail' numberOfLines={2} style={styles.descption}>
          {item.latest_message}
          </Text>
        </TouchableOpacity>
        </View>
      )}
       // ItemSeparatorComponent={renderSeparator}


    />


    <View>
  {
    conversations.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: item.photo}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.latest_message}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>


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
