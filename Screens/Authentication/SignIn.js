import React from 'react';
import {
   TouchableOpacity,
   TextInput,
   Platform,
   StyleSheet ,
   StatusBar,
   Alert,
   Text,
   View,
   ActivityIndicator,
 } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import ScreenContainer from '../../components/ScreenContainer';



import { Button, Card, Title, Paragraph } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import Validation from './Validation';
import FormHook from './FormHook';
import { useTheme } from 'react-native-paper';
import userService from '../../services/userService';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function SignIn({navigation}, props){
  // const { signIn } = React.useContext(AuthContext)

  // const {
  //   handleSubmit,
  //   // handleChange,
  //   handleChangeEmail,
  //   handleChangePassword,
  //   handleBlur,
  //   handleClickShowPassword,
  //   handleMouseDownPassword,
  //   values,
  //   errors,
  //   isSubmitting,
  // } = FormHook(INITIAL_STATE, Validation, authenticateUser);
  //
  // const [authenticateError, setAuthenticateError] = React.useState(null);
  //
  // async function authenticateUser() {
  //    const credentials = { username: values.email, password: values.password };
  //
  //    await userService
  //      .userLogin(credentials)
  //      // await Axios.post('http://localhost:5000/api/v1/auth/login', credentials)
  //      .then(res => {
  //        // console.log(res.data.status)
  //        // console.log(res.data.user_type)
  //        if (
  //          res.data.status === 'success' &&
  //          res.data.user_type === 'employer'
  //        ) {
  //          // console.log(res);
  //          localStorage.setItem('userInfo', JSON.stringify(res.data));
  //          // console.log(setUserDetails)
  //          let userinfo = {firstname:res.data.firstname, lastname: res.data.lastname}
  //          // createUser(userinfo)
  //          console.log('Redirect to employer dashboard');
  //
  //          // navigation.push("Home", {data:res.data})
  //
  //          signIn({data:res.data})
  //
  //          props.history.push('/emp/projects/mpjs');
  //        } else if (
  //          res.data.status === 'success' &&
  //          res.data.user_type === 'developer' &&
  //          res.data.confirm_email != true &&
  //          res.data.professional_title === ''
  //        ) {
  //          localStorage.setItem('userInfo', JSON.stringify(res.data));
  //          console.log('Rediret to developer email_confirmation');
  //          props.history.push('/confirm_email');
  //        } else if (
  //          res.data.status === 'success' &&
  //          res.data.user_type === 'developer' &&
  //          res.data.confirm_email == true &&
  //          res.data.professional_title === ''
  //        ) {
  //          localStorage.setItem('userInfo', JSON.stringify(res.data));
  //          console.log('Rediret to developer add_profile');
  //          console.log(res);
  //          props.history.push('/add_profile');
  //        } else if (
  //          res.data.status === 'success' &&
  //          res.data.user_type === 'developer' &&
  //          res.data.confirm_email == true &&
  //          res.data.professional_title !== ''
  //        ) {
  //          localStorage.setItem('userInfo', JSON.stringify(res.data));
  //          // createUser(res.data)
  //          console.log('Rediret to developer dashboard');
  //          console.log(res);
  //
  //          signIn({data:res.data})
  //          props.history.push('/frl/my_projects');
  //        } else {
  //          console.log('Something went wrong');
  //        }
  //      })
  //
  //      .catch(err => {
  //        // console.log(err)
  //        setAuthenticateError(
  //          'Either username or password is incorrect. Try again.',
  //        );
  //      });

  const [authenticateError, setAuthenticateError] = React.useState(null);
  const [data, setData] = React.useState({
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      isValidUser: true,
      isValidPassword: true,
  });

  const { colors } = useTheme();

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
      console.log(val)
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              email: val,
              check_textInputChange: true,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
              email: val,
              check_textInputChange: false,
              isValidUser: false
          });
      }
  }

  const handlePasswordChange = (val) => {
      if( val.trim().length >= 8 ) {
          setData({
              ...data,
              password: val,
              isValidPassword: true
          });
      } else {
          setData({
              ...data,
              password: val,
              isValidPassword: false
          });
      }
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }

  const handleValidUser = (val) => {
      if( val.trim().length >= 4 ) {
          setData({
              ...data,
              isValidUser: true
          });
      } else {
          setData({
              ...data,
              isValidUser: false
          });
      }
  }

  const loginHandle = () => {

      // const foundUser = Users.filter( item => {
      //     return userName == item.username && password == item.password;
      // } );
      //
      // if ( data.username.length == 0 || data.password.length == 0 ) {
      //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
      //         {text: 'Okay'}
      //     ]);
      //     return;
      // }
      //
      // if ( foundUser.length == 0 ) {
      //     Alert.alert('Invalid User!', 'Username or password is incorrect.', [
      //         {text: 'Okay'}
      //     ]);
      //     return;
      // }
      // signIn(foundUser);



        // const credentials = { username: values.email, password: values.password };
        const credentials = { username: data.email, password: data.password };

        userService.userLogin(credentials)
          // await Axios.post('http://localhost:5000/api/v1/auth/login', credentials)
          .then(res => {
            // console.log(res.data.status)
            // console.log(res.data.user_type)
            if (
              res.data.status === 'success' &&
              res.data.user_type === 'employer'
            ) {

              // createUser(userinfo)
              console.log('Redirect to employer dashboard');
              signIn({data:res.data})

            } else if (
              res.data.status === 'success' &&
              res.data.user_type === 'developer' &&
              res.data.confirm_email != true &&
              res.data.professional_title === ''
            ) {
              localStorage.setItem('userInfo', JSON.stringify(res.data));
              console.log('Rediret to developer email_confirmation');
              props.history.push('/confirm_email');
            } else if (
              res.data.status === 'success' &&
              res.data.user_type === 'developer' &&
              res.data.confirm_email == true &&
              res.data.professional_title === ''
            ) {
              localStorage.setItem('userInfo', JSON.stringify(res.data));
              console.log('Rediret to developer add_profile');
              console.log(res);
              props.history.push('/add_profile');
            } else if (
              res.data.status === 'success' &&
              res.data.user_type === 'developer' &&
              res.data.confirm_email == true &&
              res.data.professional_title !== ''
            ) {

              console.log('Rediret to developer dashboard');
              signIn({data:res.data})

            } else {
              console.log('Something went wrong');
            }
          })

          .catch(err => {
            // console.log(err)
            setAuthenticateError(
              'Either username or password is incorrect. Try again.',
            );
          });

   }
  return (
    <>
    <View style={styles.container}>
          <StatusBar backgroundColor='#00B7E3' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Sign In</Text>
        </View>
        <Animatable.View
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }


            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInUp" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }


            <TouchableOpacity>
                <Text style={{color: '#00B7E3', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>


                <TouchableOpacity
                    onPress={() => {loginHandle()}}
                    style={[styles.signIn, {
                        backgroundColor: '#00B7E3',
                        borderWidth: 0,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#FFF'
                    }]}>Sign In Now</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.signIn, {
                        borderColor: '#00B7E3',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#00B7E3'
                    }]}>Register New Account</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>


  </>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00B7E3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',

        marginLeft:10,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        alignSelf: 'stretch'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
