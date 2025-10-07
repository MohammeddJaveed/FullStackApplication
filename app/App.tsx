
import { NewAppScreen } from '@react-native/new-app-screen';
import { enableScreens } from 'react-native-screens';
enableScreens(); // This improves performance and is necessary for react-native-screens to work properly
import { StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider,} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '../app/Navigation/Navigation';



function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider style ={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      
      <NavigationContainer>
      <RootNavigation/>
      </NavigationContainer>
      
    
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default App;
