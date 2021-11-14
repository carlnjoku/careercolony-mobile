import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignIn from '../Screens/Authentication/SignIn';
import SignUp from '../Screens/Authentication/SignUp';
import SignUp2 from '../Screens/Authentication/SignUp2';
import ForgotPassword from '../Screens/Authentication/ForgotPassword';
import Home from '../Screens/Home';
import EmployerHome from '../Screens/Employer/Home';
import FreelancerHome from '../Screens/Freelancer/Home';
import JobDetails from '../Screens/Freelancer/JobDetails';
import ConversationList from '../Screens/chat/ConversationList'
import Message from '../Screens/Message';
import MessageDetails from '../Screens/MessageDetails';
import Profile from '../Screens/Profile';
import { AuthContext } from '../context/AuthContext';
import ScreenContainer from '../components/ScreenContainer';
import Appbar from '../components/appbar/Appbar';
import DrawerContents from "../components/DrawerContents";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





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


export default function Main() {

  const initialLoginState = {
    isLoading:true,
    userToken:null,
    user_type:null,
  }

  // const[isLoading, setIsLoading] = React.useState(true)
  // const[isToken, setIsToken] = React.useState("")
  // const[userToken, setUserToken] = React.useState("")
  // const[userInfo, setUserInfo] = React.useState("")

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
      return{
        ...prevState,
        userId: action._id,
        userToken: action.token,
        isLoading:false,
      }
      case 'SIGNIN':
      return{
        ...prevState,
        userId: action._id,
        userToken: action.token,
        user_type: action.userType,
        isLoading:false,
      }
      case 'SIGNOUT':
      return{
        ...prevState,
        userId: null,
        userToken: null,
        isLoading:false,
      }
      case 'SIGNUP':
      return{
        ...prevState,
        userId: action._id,
        userToken: action.token,
        isLoading:false,
      }

    }
  }

  const[loginstate, dispatch] = React.useReducer(loginReducer, initialLoginState)


  const authContext = React.useMemo(() => {
    return {
       signIn: async(data) => {
         console.log(data.data.data)
         const token = data.data.data
         const userType = data.data.user_type
         const userDetails = data.data
         console.log(token)
         console.log(data.data)


        try {
          await AsyncStorage.setItem('userInfo', JSON.stringify(userDetails))
        } catch (e) {
          // saving error
        }

       dispatch({type:'SIGNIN', userType: userType, token:token})

       },

       signUp: async(data)=> {

         const token = data.data.data
         const userType = data.data.user_type
         dispatch({type:'SIGNUP', userInfo: data, token:token})
         // setIsLoading(false)
         // setUserToken(token)
         // setUserInfo(data)
       },
       signOut: async()=> {

         dispatch({type:'SIGNOUT'})
       }
    }
  },[])

  React.useEffect(()=>{
    setTimeout(async()=> {
      console.log(loginstate)
      console.log(loginstate.userToken)
      // setIsLoading(false)
      let userInfo;
      userInfo = null

      try {
        userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
          console.log(userInfo)
        } catch (e) {
           // saving error
      }

      console.log("hey")

      // dispatch({type:'RETRIEVE_TOKEN', token:"vuuytd56e54"})
      dispatch({type:'SIGNUP', token:userInfo})

    },1000)
  },[])

  if(loginstate.isLoading) {
    return (
      <ScreenContainer>
        <ActivityIndicator size="large" />
     </ScreenContainer>


   )
  }



  const AuthStack = createStackNavigator()
  const SignupStack = createStackNavigator()
  const Tabs = createMaterialBottomTabNavigator()
  const HomeStack = createStackNavigator()
  const MessageStack = createStackNavigator()
  const JobDetailStack = createStackNavigator()
  const ProfileStack = createStackNavigator()
  const Drawer = createDrawerNavigator()
  const RootStack = createStackNavigator()

  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const SignUpStackScreen = () => (
    <SignupStack.Navigator headerMode="none">
      <SignupStack.Screen name="SignUp" component={SignUp}/>
      <SignupStack.Screen name="SignUp2" component={SignUp2}/>
    </SignupStack.Navigator>

  )

  const AuthStackScreen = () => (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUpStackScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  )
  const DrawerScreen = ({navigation}) => (
    <>

    <Drawer.Navigator
      initialRouteName="Home"
      headerMode="none"
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name);
          console.log(options)
          console.log(props)

          return (
            <Appbar
              navigation={navigation}
              route = {route}
              title={title}
              leftButton={
                back ? <MaterialCommunityIcons name="back" onPress={navigation.goBack} /> : undefined
              }
              style={options.headerStyle}
            />
          );
        }
      }}
    >
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
    </>
  )



  const HomeStackScreen = ({navigation}) => {

      if(loginstate.user_type === 'employer'){
        return <HomeStack.Navigator>
              <HomeStack.Screen
                name = "Home"
                component={EmployerHome}
                options={{
                  headerLeft: () => (<MaterialCommunityIcons
                    name="menu"
                    size={26}
                    onPress={() =>navigation.toggleDrawer()} />

                  )
                }}
                />
              <HomeStack.Screen
                name = "JobDetails"
                component={JobDetails}
                options = {({route})=>({
                  title:route.params.name,
                  tabBarVisible: false,
                })}

              />
      </HomeStack.Navigator>

    }else {
      return <HomeStack.Navigator>
        <HomeStack.Screen
          name = "Home"
          component={TabsStackScreen}
          options={{
            headerLeft: () => (<MaterialCommunityIcons
              name="menu"
              size={26}
              onPress={() =>navigation.toggleDrawer()} />
            )
          }}
          />
          <HomeStack.Screen
            name = "JobDetails"
            component={JobDetails}
            options = {({route})=>({
              title:route.params.name
            })}
          />
      </HomeStack.Navigator>
    }


  }

  const MessageStackScreen = () => (
    <MessageStack.Navigator>
      <MessageStack.Screen name = "Message" component={Message} />
        <MessageStack.Screen
          name = "MessageDetails"
          component={MessageDetails}
          options = {({route})=>({
            title:route.params.name
          })}
        />
    </MessageStack.Navigator>
  )


  


  const TabsStackScreen = () => (

    <Tabs.Navigator
      activeColor="#00B7E3"
      barStyle={{ backgroundColor: '#FFFFFF' }}

    >
      <Tabs.Screen
        name="Home"
        component={FreelancerHome}
        options={{
          title:'Home',
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}

      />

      <Tabs.Screen
        name="Messages"
        component={Message}
        options={{
          title:'Messages',
          tabBarLabel: 'Messages',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email" color={color} size={30} />
          )
        }}

      />
      <Tabs.Screen
        name="Chat"
        component={ConversationList}

        options = {({route})=>({
          title:"Chat",
          tabBarVisible: false,
          tabBarLabel: 'Chat',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment" color={color} size={30} />
          ),
        })}
      />

      <Tabs.Screen
        name="Search"
        component={Message}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={30} />
          ),
        }}

      />
    </Tabs.Navigator>
  )



  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profiles" component={Profile} />
    </ProfileStack.Navigator>
  )


  const RootStackScreen = () => (
    <RootStack.Navigator headerMode="none">

        {loginstate.userToken ?
          <RootStack.Screen name="App" component={DrawerScreen} />
          :
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        }
    </RootStack.Navigator>
  )

  const RootStackScreenEmployer = () => (

    <RootStack.Navigator headerMode="none">
        {loginstate.userToken ?
          <RootStack.Screen name="App" component={DrawerScreen} />
          :
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        }
    </RootStack.Navigator>
  )


  return (
      <AuthContext.Provider value = {authContext}>
        <NavigationContainer>
          {loginstate.user_type === 'developer' ?
            <RootStackScreen />
          :
            <RootStackScreenEmployer />
          }

        </NavigationContainer>
      </AuthContext.Provider>

  );
}
