import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { User, Clock, Trash } from "lucide-react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";



const PostCard = ({ posts,myPostScreen}) => {
  const navigation = useNavigation();

  // local state
  const [loading,setLoading] = useState(false)

  //Handle delete prompt
  const handleDeletePrompt =(id)=>{
    Alert.alert('Attention', 'Are you sure you want to delete this post?',
    [{
      text : 'cancel',
      onPress :()=>{
         console.log("cancel pressed")
      },
    },
    {
      text : 'Delete',
      onPress:()=>{
        handleDeletePost(id)
      }
    }
   ])
  }

  //delete post data
  const handleDeletePost =async(id)=>{
    try{
    setLoading(true)
    const {data} = await axios.delete(`/post/delete-post/${id}`)
    setLoading(false)
    Alert.alert(data?.message)
    navigation.navigate('Home')
    }catch(error){
      setLoading(false),
      console.log(error)
      Alert.alert("something went wrong")
    }

  }
  return (
    <View>
        {posts?.length === 0 ? <Text style={[styles.heading,{color:'red'}]}>No Content Please add posts to display</Text>:
      <Text style={styles.heading}>Total Posts: {posts.length}</Text>}

      {posts?.map((post, i) => (
        <View key={i} style={styles.card}>
         <View>
     {myPostScreen &&(
      // <TouchableOpacity>
        <Text style={{alignSelf:'flex-end'}}>
             <Trash size={18} color="red" onPress={()=> handleDeletePrompt(post?._id)}/>
          </Text>
      // </TouchableOpacity>
      
        )}     
         </View>
          <Text style={styles.title}>{post?.title}</Text>
          <Text style={styles.description}>{post?.description}</Text>

          <View style={styles.footerCard}>    
            <View style={styles.footerItem}>
             
          {post?.postedBy?.name &&( <Text style={styles.author}>
             <User size={15} color="orange" />
                {post?.postedBy?.name || "Unknown"}
              </Text>)}    
            </View>

            <View style={styles.footerItem}>
              <Clock size={15} color="orange" />
              <Text style={styles.date}>
                {moment(post?.createdAt).format("DD:MM:YYYY")}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  heading: {
    color: "green",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    borderWidth: 0.4,
    borderColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
    lineHeight: 20,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    paddingTop: 8,
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",  
  },
  author: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "500",
    color: "#2b7a78",
  },
  date: {
    marginLeft: 5,
    fontSize: 12,
    color: "#888",
  },
});
