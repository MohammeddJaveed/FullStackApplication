import { View, Text,StyleSheet,TextInput, TouchableOpacity,ActivityIndicator, Alert} from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/Menus/FooterMenu'
import { AuthContext } from '../context/authContext'
import axios from 'axios'

const Post = ({navigation}) => {
  //local state
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const[loading,setLoading] = useState(false)

  const handleSubmit = async() =>{

    try{
      if(!title || !description){
        setLoading(false)
        Alert.alert("Please fill all the fields")
      }
  
      const {data} = await axios.post('/post/create-post',{title,description})
      setLoading(false)
      Alert.alert(data.message)
      navigation.navigate('Home')

    }catch(error){
      console.log(error)
      setLoading(false)
      Alert.alert(error.response.data.message)

    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
         <Text style={styles.heading}>Create a New Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter post title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Create Post</Text>
        )}
      </TouchableOpacity>
      </View>
    

     <FooterMenu /> 
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#a0c4ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default Post