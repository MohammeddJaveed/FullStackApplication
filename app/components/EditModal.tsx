import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const EditModal = ({modalVisible, setModalVisible,post}) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    //Handle Update 
    const updatePostHandler = async(id)=>{
      try{
        setLoading(true);
        const {data} = await axios.put(`/post/update-post/${id}`,
          {
            title,
            description
          }
        );
        Alert.alert(data?.message)
        navigation.push('MyPosts')

      }catch(error){
        setLoading(false)
        console.log(error)
        // Alert.alert(error)
      }

    }

    //initial
    useEffect(()=>{
          setTitle(post?.title)
          setDescription(post?.description)
    },[post])
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
       
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
            
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Update Post</Text>
              <Text style={styles.modalText} >Title</Text>
              <TextInput style={styles.input} value={title} onChangeText={(Text) =>{setTitle(Text)}}/>
              <Text style={styles.modalText}>Description</Text>
               <TextInput style={[styles.input, { height: 80 }]} value={description} multiline={true} onChangeText={(Text) =>{setDescription(Text)}}/>
               <View style = {styles.btnContainer}>

                 <Pressable
                style={ styles.button}
                onPress={() => {updatePostHandler(post && post._id),setModalVisible(!modalVisible)}}>
                <Text style={styles.textStyle}>Update</Text>
              </Pressable>
               <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
               </View>
             
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    width:350,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input:{
    backgroundColor:'lightgray',
    // height:30,
    borderRadius:7,
    marginBottom:15,
    padding:10
  },
  button: {
    borderRadius: 10,
    padding: 10, 
    elevation: 2,
    width:120,
    backgroundColor:'black',
    margin:10 
    
  },
  btnContainer:{
   flexDirection:'row',
   justifyContent:'space-between'
  },
  buttonOpen: {
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    
  },
});


export default EditModal