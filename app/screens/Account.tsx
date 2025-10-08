import { View, Text,StyleSheet,Image, TouchableOpacity,TextInput } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/Menus/FooterMenu'
import { AuthContext } from '../context/authContext'
import { useNavigation,useRoute} from '@react-navigation/native';



const Account = () => {
  const navigation = useNavigation();
 const route = useRoute();
    const[state ] = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>

      <View style={{marginBottom:40 }}>
          <Image
        source={require('../assets/user-profile.jpg')} style={{width: 80, height: 80, alignSelf: 'center',resizeMode: 'cover',borderRadius:10, }}/>
        </View >
      
         <View style={styles.formContainer}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                      style={styles.input}
                      value={state?.user?.name}
                      editable={false}
                      placeholder="Enter Name"
                    />
                  </View>
        
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                      style={styles.input}
                      value={state?.user?.email}
                      editable={false}
                    />
                  </View>
        
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                      style={styles.input}
                      value={state?.user?.password}
                      editable={false}
                      placeholder='Password is not displayed for security purpose!'
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
        
                  {/* <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
                    <Text style={styles.buttonText}>Update Profile</Text>
                  </TouchableOpacity> */}
                   <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate('EditProfileMenu')}}>
         <Text style={styles.textStyle}>EDIT PROFILE</Text>
         </TouchableOpacity>
                </View>
         
        

      <View style={{flex:1,justifyContent:'flex-end'}}>
        <FooterMenu/>
      </View>
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    padding:20,
   
    
  },
   formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  inputGroup: {
    marginBottom: 20,
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
  textStyle:{
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonStyle:{backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',}
})

export default Account