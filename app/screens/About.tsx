import { View, Text, StyleSheet,Image} from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterMenu from '../components/Menus/FooterMenu';
import { AuthContext } from '../context/authContext';



const About = () => {
     const[state ] = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>

      <View style={{flex:1, justifyContent:'flex-end'}}>
        <FooterMenu/>
      </View>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
  }
})


export default About