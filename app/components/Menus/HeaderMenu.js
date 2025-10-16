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

    const handlepopup =()=>{
       Alert.alert('Attention', 'Are you sure you want to Logout',
    [{
      text : 'cancel',
      onPress :()=>{
         console.log("cancel pressed")
      },
    },
    {
      text : 'Yes',
      onPress:()=>{
        handleLogout()
      }
    }
   ])
  }
  return (
    <View>
      <TouchableOpacity onPress={handlepopup} style={{backgroundColor: '#ff4400ff',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center', }}>
                {/* <LogOut size={24} color="#000" /> */}
                <Text style ={{color: '#fff',
    fontWeight: '600',
    fontSize: 16,}}> Logout</Text>
         </TouchableOpacity>
    </View>
  )
}

export default HeaderMenu