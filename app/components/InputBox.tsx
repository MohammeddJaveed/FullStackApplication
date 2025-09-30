import { View, Text,StyleSheet,TextInput, Keyboard } from 'react-native'
import React from 'react'


const InputBox = ({inputTitle,keyboardType,autoComplete,secureTextEntry = false, value,setvalue}) => {
  return (
    <View>
      
           <View>
             <Text style={styles.textstyle}>{inputTitle}</Text>
             <TextInput style={styles.textinputStyle}
              placeholder={`Enter ${inputTitle}`}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType={keyboardType}
              autoComplete={autoComplete}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={text => setvalue(text)}
             />
              
           </View>
    </View>
  )
}
const styles = StyleSheet.create({
  textinputStyle:{
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom:15,
    padding: 10,},
    textstyle:{
      fontWeight: 'bold',
    }
});

export default InputBox