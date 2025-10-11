import { View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native'
import React,{use, useCallback, useContext, useState} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/Menus/FooterMenu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { postContext } from '../context/PostContext';
import PostCard from '../components/PostCard';





const Home = () => {
    const [posts,getAllposts] = useContext(postContext)
    const[refreshing, setRefresing] = useState(false)

    //Refresh control
    const onRefresh = useCallback(()=>{
     setRefresing(true)
     getAllposts()
     setTimeout(()=>{
      setRefresing(false)
     },2000)
    },[])
   
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop:-57}}
       refreshControl={<RefreshControl refreshing={refreshing}
       onRefresh={onRefresh} />}>
        <PostCard posts={posts}/>
        {/* <Text>{JSON.stringify(posts,  null,4)}</Text> */}
      </ScrollView>
      
      <FooterMenu/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-between',
    paddingHorizontal:10
  }
})
export default Home