import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

//context
const postContext = createContext();

const PostProvider = ({children}) => {
    const[loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);

    const getAllposts = async()=>{
     setLoading(true);
     try{
        const {data} = await axios('post/get-all-posts');
        setLoading(false)
        setPosts(data.posts)

     }catch(error){
        console.log(error),
        setLoading(false)
     }
    }

    useEffect(()=>{
        getAllposts();
    },[])

    return(
        <postContext.Provider value ={[posts,getAllposts]}>
        {children}
        </postContext.Provider>
    )
  
}

export{postContext,PostProvider};