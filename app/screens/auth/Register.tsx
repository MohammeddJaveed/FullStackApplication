import { View, Text , StyleSheet, TextInput, Alert} from 'react-native'
import React,{useState}from 'react'
import RegisterComponenet from '../../components/InputBox';
import InputBox from '../../components/InputBox';
import SubmitButton from '../../components/SubmitButton';
import axios from 'axios';



const Register = ({navigation}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');  
  const [loading,setLoading] = useState(false);

  const handleSubmit = async() => {
    try{
     
      setLoading(true);
      if(!name || !email || !password){
        setLoading(false);
       return Alert.alert("Please fill all the fields");
      }
      setLoading(false);
       const {data} = await axios.post('user/register',{name,email,password});
       Alert.alert(data && data.message);
        navigation.navigate('Login');
       console.log("data",{name,email,password});
       setName('');
       setEmail('');
       setPassword('');  
    }catch(error){ 
      Alert.alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <InputBox inputTitle={'Name'} value={name} setvalue={setName}/>
      <InputBox  inputTitle={'Email'}
      keyboardType='email-address'  value={email} setvalue={setEmail}/>
      <InputBox  inputTitle={'Password'}
      secureTextEntry ={true}  value={password} setvalue={setPassword }/>
      <View>
      {/* <Text>{JSON.stringify({name,email,password}, null,4)}</Text> */}
   <SubmitButton buttonTitle={'Register'} loading={loading} handleSubmit={handleSubmit}/>
   <Text style={styles.text}>Already have an account? <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
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

export default Register