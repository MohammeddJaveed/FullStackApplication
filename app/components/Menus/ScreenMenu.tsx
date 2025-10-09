import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import Home from '../../screens/Home';
import { AuthContext } from '../../context/authContext';
import HeaderMenu from './HeaderMenu';
import Post from '../../screens/Post';
import About from '../../screens/About';
import Account from '../../screens/Account';
import EditProfileMenu from './EditProfileMenu';
import Myposts from '../../screens/Myposts';



const ScreenMenu = () => {

    //Global State
    const[state] = useContext(AuthContext);

    // Authenticated USer
    const AuthenticatedUser = state?.user && state?.token;

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator > 
        {AuthenticatedUser ? (
          <><Stack.Screen name="Home" component={Home} options={{ title: 'My Application ', headerTitleAlign: 'left', headerRight: () => <HeaderMenu />, headerLeft: () => null,
    gestureEnabled: false,
  }} />
          <Stack.Screen name="Post" component={Post} options={{ headerBackTitleVisible:false ,headerRight: () => <HeaderMenu /> , headerLeft: () => null,
    gestureEnabled: false,
  }} />
          <Stack.Screen name="About" component={About} options={{ headerBackTitleVisible:false ,headerRight: () => <HeaderMenu />, headerLeft: () => null,
    gestureEnabled: false,
  }} />
  <Stack.Screen name="MyPosts" component={Myposts} options={{ headerBackTitleVisible:false ,headerRight: () => <HeaderMenu />, headerLeft: () => null,
    gestureEnabled: false,
  }} />
          <Stack.Screen name="Account" component={Account} options={{ headerBackTitleVisible:false ,headerRight: () => <HeaderMenu />, headerLeft: () => null,
    gestureEnabled: false,
  }} />
  <Stack.Screen name="EditProfileMenu" component={EditProfileMenu} options={{ title: 'My Application ', headerTitleAlign: 'left', headerRight: () => <HeaderMenu />, headerLeft: () => null,
    gestureEnabled: false,
  }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }}/>
            
          </>
        )}
      </Stack.Navigator>
  )
}

export default ScreenMenu