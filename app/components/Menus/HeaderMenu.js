import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { LogOut } from 'lucide-react-native';
import { AuthContext } from '../../context/authContext'
import AsyncStorage from '@react-native-async-storage/async-storage';


const HeaderMenu = () => {
    const [state, setState] = useContext(AuthContext); 

    //Handle Logout
    const handleLogout = async() =>{
    setState({taken :'', user: null});
    await AsyncStorage.removeItem('auth');
    Alert.alert('Logged out');
    }

  return (
    <View>
      <TouchableOpacity onPress={handleLogout} style={{flexDirection:'row', alignItems:'center'}}>
                <LogOut size={24} color="#000" />
         </TouchableOpacity>
    </View>
  )
}

export default HeaderMenu