import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Categories = ({Image ,cat}) => {
return (
	<View style={{height:120,width:100,backgroundColor:'white',marginTop:20,justifyContent:'center'}}>
			<TouchableOpacity style={{height:75,width:74,backgroundColor:"#DCF2E5",marginHorizontal:13,marginTop:13,borderRadius:15}}>
				<ImageBackground  style={{height:50,width:70,justifyContent:'center',marginTop:10}}source={Image}></ImageBackground>
			</TouchableOpacity>
             <Text style={{fontSize:12,textAlign:'center',marginTop:8,fontWeight:'600'}}>{cat}</Text>
			</View>

);
};

export default Categories;
