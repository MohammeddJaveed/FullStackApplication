
import { NewAppScreen } from '@react-native/new-app-screen';
import { enableScreens } from 'react-native-screens';
enableScreens(); // This improves performance and is necessary for react-native-screens to work properly

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/authContext';
import Home from './screens/Home';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider style ={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AuthProvider>
      <NavigationContainer>
   <stack.Navigator initialRouteName='Login'>
    <stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
    <stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
    <stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
   </stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
    
    </SafeAreaProvider>
  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default App;
