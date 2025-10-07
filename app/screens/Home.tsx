import { View, Text, StyleSheet} from 'react-native'
import React,{use, useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/Menus/FooterMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    const[state] = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(state, null,4)}</Text>
      <FooterMenu/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
  }
})
export default Home