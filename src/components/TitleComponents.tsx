import React from 'react' 
import { StyleSheet, Text, useWindowDimensions } from 'react-native' 
 
//indica las propiedades de nuestro componente reutilizable 
interface TitleProps{ 
    title: string; 
} 
 
export const TitleComponent = ({title}:TitleProps) => { 
 
  const{height}=useWindowDimensions(); 
     
  return ( 
    <Text style={{ 
        height:height*0.12, 
        ...styles.title}}>{title}</Text> 
  ) 
} 
 
 
const styles=StyleSheet.create({ 
    title:{ 
        color:'white', 
        backgroundColor:'#6CCFE7',
        fontSize:27, 
        fontWeight:'bold', 
        paddingHorizontal:30, 
        paddingVertical:30 
    } 
})