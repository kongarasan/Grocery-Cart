import React from "react";
import { SafeAreaView, Text, View ,TouchableOpacity,Image,boder} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Fav = () => {
	
		const [liked, setLiked] = useState(false)
		const [count,setCount] =useState(0)
return (
	<SafeAreaView style={{backgroundColor:'white',height:"100%"}}>
	<Text style={{fontSize:22,textAlign:'center',marginTop:20,color:'#4CAD73'}}>My Favourites</Text>
	

	</SafeAreaView>
);
};

export default Fav;
