import { View, Text , StyleSheet, TextInput, Alert} from 'react-native'
import React,{useState,useContext}from 'react'
import RegisterComponenet from '../../components/InputBox';
import InputBox from '../../components/InputBox';
import SubmitButton from '../../components/SubmitButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';


const Login = ({navigation}) => {
  //G;obal state
  const [state, setState] = useContext(AuthContext);
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');  
      const [loading,setLoading] = useState(false);
    
      const handleSubmit = async() => {
        try{
         
          setLoading(true);
          if( !email || !password){
            setLoading(false);
           return Alert.alert("Please fill all the fields");
          }
          setLoading(false);
          
          const {data} = await axios.post('http://localhost:8080/api/v1/user/login',{email,password});
setState(data);
          await AsyncStorage.setItem('@auth', JSON.stringify(data));
            Alert.alert(data && data.message);
            navigation.navigate('Home');
            setLoading(false);
           console.log("data",{email,password});
           setEmail('');
           setPassword('');  
        }catch(error){ 
          Alert.alert(error.response.data.message);
          setLoading(false);
          console.log(error);
        }
      }
      const getLocalSTorage = async() => {
        const data = await AsyncStorage.getItem('@auth');
        console.log("data from local storage", data);
      }
      getLocalSTorage();
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      
      <InputBox  inputTitle={'Email'}
      keyboardType='email-address'  value={email} setvalue={setEmail}/>
      <InputBox  inputTitle={'Password'}
      secureTextEntry ={true}  value={password} setvalue={setPassword }/>
      <View>
      {/* <Text>{JSON.stringify({name,email,password}, null,4)}</Text> */}
   <SubmitButton buttonTitle={'Login'} loading={loading} handleSubmit={handleSubmit}/>

   <Text style={styles.text}>Don't have an account? <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
    </View>
    </View>  
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peachpuff',
  },
  pageTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 25,
   
  },
  text:{
    alignSelf:'center',
    marginTop:20,
    fontSize:16,
  },
  linkText:{
    color:'red',
    fontWeight:'bold',
    textDecorationLine:'underline',
  }
});

export default Login