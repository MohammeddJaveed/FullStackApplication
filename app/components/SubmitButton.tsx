import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({buttonTitle,loading,handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{loading? "Please wait...": buttonTitle}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginTop:20,
        width:300,
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        letterSpacing:0.3 ,
    }
})
export default SubmitButton