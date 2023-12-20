import { View, Text,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'

const DealCard = (text,Image) => {
  return (
    
	<TouchableOpacity style={{ height: 180, width: 340, marginTop: 80, borderRadius: 20, marginHorizontal: 26,overflow: 'hidden', backgroundColor: "black",justifyContent:'center',alignItems:'center' }}>
	<ImageBackground style={{ height: 240, width: 340, borderRadius: 20 ,alignItems:'center',justifyContent:'center',marginTop:20}}
		source={require('../assets/offer.png')}>
		
	</ImageBackground>
	</TouchableOpacity>
   
  )
}

export default DealCard