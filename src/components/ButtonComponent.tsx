import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponent = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}
    onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    button: {
        backgroundColor: '#328BB2',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      },
      buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 0,
        fontFamily:'times new roman'
      }
})