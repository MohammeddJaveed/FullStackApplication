import { View, Text,StyleSheet,ScrollView, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'


import FooterMenu from '../components/Menus/FooterMenu'
import axios from 'axios';
import PostCard from '../components/PostCard';

const Myposts = () => {
//Local state
 const [posts,setPosts] = useState([]);
 const [loading,setLoading] = useState(false)

 //Get posts
 const getallUserPosts = async()=>{
    try{
        setLoading(true)
        const {data} = await axios.get('/post/get-user-posts');
         setLoading(false)
         setPosts(data?.userPosts)

    }catch(error)
    {
     setLoading(false)
     console.log(error)
    }
 }

 //Initial
 useEffect(()=>{
    getallUserPosts();
 },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop:-57}}>
        <PostCard posts={posts} myPostScreen={true} />
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
export default Myposts