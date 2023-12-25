import { View, Text,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import Vegetables from '../components/Vegetables'

const List2Card = (text,Image,navigation) => {
  return (
    
	<TouchableOpacity style={{ height: 180, width: 340, marginTop: 80, borderRadius: 20, marginHorizontal: 26,overflow: 'hidden', backgroundColor: "black",justifyContent:'center',alignItems:'center' }}>
	<ImageBackground style={{ height: 180, width: 340, borderRadius: 20 ,alignItems:'center',justifyContent:'center',marginTop:0}}
		source={require('../assets/offer6.png')}>
		
	</ImageBackground>
	</TouchableOpacity>
   
  )
}

export default List2Card