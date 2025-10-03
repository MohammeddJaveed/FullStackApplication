import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
// import Icon from "react-native-vector-icons/FontAwesome5";
const FooterMenu = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
           <Icon name="home" size={24} color="#000" solid />
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Icon name="plus-square" size={24} color="#000" solid />
      <Text>Post</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Icon name="infocircle" size={24} color="#000" solid />
      <Text>About</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Icon name="user" size={24} color="#000" solid />
      <Text>Account</Text>
    </TouchableOpacity>
    </View>
    
  )
} 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
    }
})

export default FooterMenu