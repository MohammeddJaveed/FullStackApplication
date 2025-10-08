import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../../context/authContext';
import FooterMenu from './FooterMenu';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  //Global State
  const [state, setState] = useContext(AuthContext);
  const {user,token} = state;

  //Local State for form inputs
  const[name, setName] = useState(user?.name);
  const[email] = useState(user?.email || '');
  const[password, setPassword] = useState(user?.password);
  const[role, setRole] = useState(state?.user?.role || '');
  const [loading,setLoading] = useState(false);

  const handleUpdateProfile = async() => {
    // Handle profile update logic here
    try{
   setLoading(true)
   const {data} = await axios.put('user/update-user',{
    name,
    password,
    email})
   setLoading(false)
   let UD = JSON.stringify(data)
   setState({...state, user:UD.UpdatedUser})
   Alert.alert(data && data.message)
    }catch(err){
        console.log(err);
        Alert.alert(err.response.data.message);
        setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/user-profile.jpg')}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
               onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Enter Name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              editable={false}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Enter Password"
              secureTextEntry
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Role:</Text>
            <TextInput
              style={styles.input}
              value={state?.user?.role}
                editable={false}
              placeholder="Role"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FooterMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80, // leave space for FooterMenu
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  formContainer: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default EditProfileMenu;
