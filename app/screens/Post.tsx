import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FooterMenu from '../components/Menus/FooterMenu'

const Post = () => {
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

export default Post