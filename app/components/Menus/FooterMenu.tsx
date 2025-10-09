import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Home, PlusSquare, Info, User, List } from 'lucide-react-native';
import { useNavigation,useRoute} from '@react-navigation/native';

const FooterMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  }}>
        <Home size={28} color={route.name === 'Home' ? 'orange' : 'black'}/>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('Post')}}>
        <PlusSquare size={28} color={route.name === 'Post' ? 'orange' : 'black'} />
        <Text>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('MyPosts')}}>
        <List size={28} color={route.name === 'MyPosts' ? 'orange' : 'black'} />
        <Text>My posts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => {navigation.navigate('Account')}}>
        <User size={28} color={route.name === 'Account' ? 'orange' : 'black'} />
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