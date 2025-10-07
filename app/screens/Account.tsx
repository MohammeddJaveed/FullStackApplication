import { View, Text,StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/Menus/FooterMenu'
import { AuthContext } from '../context/authContext'

const Account = () => {
    const[state ] = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
         <Text>NAME : {state?.user?.name}</Text>
         <Text>EMAIL : {state?.user?.email}</Text>
         <Text>ROLE : {state?.user?.role}</Text>
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
    padding:20
  }
})

export default Account