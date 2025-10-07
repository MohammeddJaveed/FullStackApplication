import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
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
      
        
         <Text style={styles.textStyle}>NAME : {state?.user?.name}</Text>
         <Text style={styles.textStyle}>EMAIL : {state?.user?.email}</Text>
         <Text style={styles.textStyle}>ROLE : {state?.user?.role}</Text>
         <TouchableOpacity style={styles.buttonStyle} onPress={() => {navigation.navigate('EditProfileMenu')}}>
         <Text style={styles.textStyle}>EDIT PROFILE</Text>
         </TouchableOpacity>

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
  textStyle:{
    fontSize:16,marginVertical:10
  },
  buttonStyle:{backgroundColor:'#ddd',padding:10,alignItems:'center',borderRadius:5,marginBottom:20}
})

export default Account