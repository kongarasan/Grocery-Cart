import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Categories = ({Image ,cat, onClick,flag}) => {
return (
	<View style={{height:95,width:100,backgroundColor:'white',marginTop:20,justifyContent:'center'}}>
			<TouchableOpacity 
			onPress={onClick}
			style={{height:75,width:74,backgroundColor:"#DCF2E5",marginHorizontal:13,marginTop:13,borderRadius:15}}>
				<ImageBackground  style={{height:50,width:70,justifyContent:'center',marginTop:10}}source={Image}></ImageBackground>
			</TouchableOpacity>
             <Text style={{fontSize:12,textAlign:'center',marginTop:8,fontWeight:'600',color:flag?'green':'black'}}>{cat}</Text>
			 {flag?
			
			 <View style={{height:6,width:66,marginTop:10,backgroundColor:"#51BC7D",marginHorizontal:18,borderTopLeftRadius:6,borderTopRightRadius:6}}></View>
			 :
			 <View style={{height:6,width:66,marginTop:10,marginHorizontal:18,borderTopLeftRadius:6,borderTopRightRadius:6}}></View>

			 }

			</View>

);
};

export default Categories;
