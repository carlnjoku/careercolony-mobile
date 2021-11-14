import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Platform, TouchableOpacity } from 'react-native';
import { Card, Chip, Title, Paragraph, Button, TextInput, Divider} from 'react-native-paper';
import FixedButtom from '../../components/FixedButtom';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import socketService from '../../socketio/socketService';



import userService from '../../services/userService';

export default function JobDetails({navigation, route}){

  const { colors } = useTheme();

  const [userId, setUserId] = useState(route.params.name)
  const [projectDetail, setProjectDetail] = useState('')
  const [employerDetails, setEmployerDetails] = useState('')
  const [count, setCount] = useState('')
  const [required_skills, setRequiredSkills] = useState([])
  const [proposals_in, setProposalsIn] = useState([])
  const [hires_in, setHiresIn] = useState([])
  const [isOpenJobDetails, setIsOpenJobDetails] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(()=>{
    userService.getProjectById(route.params.jobId)
      .then(response => {
          const res = response.data.data;
          setProjectDetail(res)
          setRequiredSkills(res.required_skills)
          setProposalsIn(res.proposals)
          setHiresIn(res.hires)
          console.log(res.required_skills)
            //setLoading(false)
            // Get post count
            postCount(res.employerId)
            getEmployerDetails(res.employerId)
            console.log(res)
          }

      )


    },[])

    const postCount = (userId) => {
        userService.getPostCount(userId)
        .then(response => {
            const res = response.data.data
            setCount(res)
        })
    }

    const getEmployerDetails = (userId) => {
        userService.getUser(userId)
        .then(response => {
            const res = response.data.data
            setEmployerDetails(res)
        })
    }


    const sendProposal = () => {
        event.preventDefault();
        //const avatar = faker.Image.avatar();
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          },
        };

          const room_members = [
            {
              'userId': developerId,
              'projectId' : projectDetails.projectId,
              'project_title'  : projectDetails.title,
              'firstname'  : devDetails.firstname,
              'lastname'  : devDetails.lastname,
              'email' : devDetails.email,
              'created_on'  : Date.now(),
              'avatar':devDetails.avatar,
              'isRoomAdmin': true,
              'member_type': 'Admin'
          },
          {
              'userId': projectDetails.employerId,
              'projectId' : projectDetails.projectId,
              'project_title'  : projectDetails.title,
              'company_name': projectDetails.company_name,
              'employer_firstname'  : projectDetails.firstname,
              'employer_lastname'  : projectDetails.lastname,
              'email' : projectDetails.email,
              'created_on'  : Date.now(),
              'avatar':'',
              'isRoomAdmin': true,
              'member_type': 'Owner'
          }
        ]

          const data = {
            'developerId': developerId,
            'employerId': projectDetails.employerId,
            'projectId': projectDetails._id,
            'titleId': props.titleId,
            'project_title': projectDetails.title,
            'firstname': devDetails.firstname,
            'lastname': devDetails.lastname,
            'avatar': devDetails.avatar,
            'employer_firstname'  : projectDetails.firstname,
            'employer_lastname'  : projectDetails.lastname,
            'email': devDetails.email,
            'proposal_amount': parseInt(proposal_amount),
            'estimated_finish_time': estimated_finish_time,
            'cover_letter': cover_letter,
            'room_members': room_members,
            'created_on': Date.now()

          }




        //Axios.post('http://localhost:5000/api/v1/project/proposal', data)
        userService.postNewProposal(data)
          .then(response => {
          console.log(response);
          });


        // On submit proposal notify the employer if online

        socketService.privateConnection().emit('proposal_notification', {
          'project_title': this.state.projectDetails.title,
          'room': this.state.projectDetails.employerId,
          'developer_avatar': this.state.devDetails.avatar,
          'developer_fname': this.state.devDetails.firstname,
          'developer_lname': this.state.devDetails.lastname,
          'developer_profile_link':'http://www.devporte.com/',
          'message':this.state.devDetails.firstname+ 'sent you a proposal on'+ this.state.projectDetails.title
        })


      }



  return (

    <Animatable.View
        animation="fadeInUpBig"
        style={styles.container}
    >
    <Modal visible={isOpenModal}>
      <View style={styles.container_modal}>
        <MaterialCommunityIcons
          name="close"
          size={26}
          onPress={() =>setIsOpenModal(false)}
          style={styles.close}
        />

        <View style={styles.header}>
            <Text style={styles.text_header}>{projectDetail.title}</Text>
        </View>

          <Animatable.View
              animation="fadeInUpBig"
              style={[styles.footer_modal, {
                  backgroundColor: colors.background
              }]}
          >

              <View style={styles.action}>

                  <TextInput
                      placeholder="Proposal amount"
                      placeholderTextColor="#666666"
                      mode='outlined'
                      label='Proposal amount'
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                  />
                  <TextInput
                      placeholder="How long to finish"
                      placeholderTextColor="#666666"
                      mode='outlined'
                      theme={{
                        colors: {
                          primary: '#FFF' // Outline color here
                        }
                      }}
                      label='Proposal amount'
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                      // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                  />


              </View>

              <View style={styles.action}>
                  <TextInput
                      placeholder="Cover Letter"
                      label="Cover Letter"
                      multiline={true}
                      numberOfLines={5}
                      mode="outlined"
                      style={[styles.textInput, {
                          color: colors.text
                      }]}
                      autoCapitalize="none"
                      // onChangeText={(val) => handlePasswordChange(val)}
                  />

              </View>



              <TouchableOpacity>
                  <Text style={{color: '#7A7A7A', fontWeight:500, marginTop:0, fontSize:18, marginLeft:0}}>

                  <MaterialCommunityIcons
                    name="attachment"
                    size={30}
                    onPress={() =>setIsOpenModal(false)}
                    style={styles.attachment}
                  />
                  Upload Attachment</Text>
              </TouchableOpacity>
              <View style={styles.button}>


                  <TouchableOpacity
                      // onPress={() => {loginHandle()}}
                      style={[styles.signIn, {
                          backgroundColor: '#00B7E3',
                          borderWidth: 0,
                          marginTop: 15
                      }]}
                  >
                      <Text style={[styles.textSign, {
                          color: '#FFF'
                      }]}>Submit Proposal</Text>
                  </TouchableOpacity>


              </View>
          </Animatable.View>
      </View>
    </Modal>

      <Card>
        <Card.Content>
          <Title>{projectDetail.title}</Title>
          <Paragraph>
            <Text ellipsizeMode='tail' numberOfLines={5}>{projectDetail.job_description}</Text>
          </Paragraph>

          <Title>Paymet Type: {projectDetail.payment_type}</Title>
          <Paragraph>
            <Text>$20/hr</Text>
          </Paragraph>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
        <ScrollView>
          <Divider />
            <Title>Required Skills</Title>
          <Divider />

          <View style={styles.chipWrapper}>
            {required_skills.map((item,index) => (
                <Chip  style={styles.chip} onPress={() => console.log('Pressed')}>{item.name}</Chip>
            ))}
          </View>

          <Title>About Employerb</Title>

          <Title>Verification status</Title>
          <Paragraph>
            <Text ellipsizeMode='tail' numberOfLines={5}>{projectDetail.job_description}</Text>
          </Paragraph>

          </ScrollView>
        </Card.Content>
      </Card>




      <FixedButtom>
        <Button mode="contained" onPress={()=>setIsOpenModal(true)} labelStyle={{ color: "white", fontSize: 18 }} >Send Proposal</Button>
      </FixedButtom>

    </Animatable.View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container_modal: {
    flex: 1,
    backgroundColor: '#00B7E3'
  },
  footer_modal: {
      flex: 6,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  chipWrapper: {
    flexDirection: 'row',
    // alignItems: 'left',
    flexWrap: 'wrap',

  },
  chip: {
      margin:3
   },

  close: {
    flex:1,
    margin:20,
    alignSelf: 'flex-end',
    color:"#F0F0F0"
  },
  attachment: {

    margin:20,
    marginTop:10,
    alignSelf: 'flex-end',
    color:"#8A8A8A"
  },
  textInput: {
    width: "100%",
    borderRadius: 10,
    padding: 10,


  }, header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 30
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
      textInput: {
      outlineStyle: "none",
      outlineWidth: 0,
      outlineColor: "transparent",
      borderColor:'red'
  }
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
