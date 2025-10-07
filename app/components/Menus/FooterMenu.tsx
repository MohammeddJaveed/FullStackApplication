import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Home, PlusSquare, Info, User } from 'lucide-react-native';

const FooterMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Home size={28} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <PlusSquare size={28} color="black" />
        <Text>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Info size={28} color="black" />
        <Text>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <User size={28} color="black" />
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
    },
    item: {
    alignItems: 'center',
  },
})

export default FooterMenu