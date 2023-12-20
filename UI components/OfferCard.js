import { View, Text,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'

const OfferCard = ({Image}) => {
  return (
    
	<TouchableOpacity style={{height:130,width:130,backgroundColor:'black',marginTop:16,marginHorizontal:10,borderRadius:10,overflow:'hidden'}}>

			<ImageBackground style={{height:130,width:130,justifyContent:'center'}} source={Image} ></ImageBackground>

			</TouchableOpacity>
   
  )
}

export default OfferCard