import { View, Text,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'

const OfferCard = (text,Image) => {
  return (
    
	<TouchableOpacity style={{ height: 270, width: 340, marginTop: 20, borderRadius: 20, marginHorizontal: 20,overflow: 'hidden', backgroundColor: "black" }}>
	<ImageBackground style={{ height: 270, width: 340, borderRadius: 20 }}
		source={require('../assets/tomato.png')}>
		<Text style={{ marginTop: 10, marginHorizontal: 18, fontSize: 16, color: "white" }}>F O O D</Text>
		<Text style={{ marginTop: 10, marginHorizontal: 10, fontSize: 26, color: 'white' }}>50% Discout & {'\n'} Free Delivery</Text>
	<View style={{height:35,width:100,backgroundColor:"#808080",marginTop:115,borderRadius:10,marginHorizontal:20}}>
		<Text style={{fontSize:16,textAlign:"center",marginTop:8}}>ORDER Now</Text>
	</View>
	</ImageBackground>
	</TouchableOpacity>
   
  )
}

export default OfferCard