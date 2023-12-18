import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView,TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Listcards from "../UI components/Listcards";
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import { Feather } from '@expo/vector-icons';
const Home = ({navigation}) => {
	const [text,setText] = useState("")

	const data = [
		{
			name: "Fresh Carrot",
			price: "18,000",
			mrp: "21,000",
			image: require("../assets/freshcarrot.png")
		},
		{
			name: "Fresh Red Chilli",
			price: "12,000",
			mrp: "14,000",
			image: require("../assets/chilli.png")
		},
		{
			name: "Fresh Onion",
			price: "21,000",
			mrp: "29,000",
			image: require("../assets/onion.png")
		},
		{
			name: "Fresh Potato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/potato.png")
		},
		{
			name: "Fresh Tomato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/tomato.png")
		},
		{
			name: "Fresh Carrot",
			price: "18,000",
			mrp: "21,000",
			image: require("../assets/freshcarrot.png")
		},
		{
			name: "Fresh Red Chilli",
			price: "12,000",
			mrp: "14,000",
			image: require("../assets/chilli.png")
		},
		{
			name: "Fresh Onion",
			price: "21,000",
			mrp: "29,000",
			image: require("../assets/onion.png")
		},
		{
			name: "Fresh Potato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/potato.png")
		},
		{
			name: "Fresh Tomato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/tomato.png")
		},{
			name: "Fresh Carrot",
			price: "18,000",
			mrp: "21,000",
			image: require("../assets/freshcarrot.png")
		},
		{
			name: "Fresh Red Chilli",
			price: "12,000",
			mrp: "14,000",
			image: require("../assets/chilli.png")
		},
		{
			name: "Fresh Onion",
			price: "21,000",
			mrp: "29,000",
			image: require("../assets/onion.png")
		},
		{
			name: "Fresh Potato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/potato.png")
		},
		{
			name: "Fresh Tomato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/tomato.png")
		},{
			name: "Fresh Carrot",
			price: "18,000",
			mrp: "21,000",
			image: require("../assets/freshcarrot.png")
		},
		{
			name: "Fresh Red Chilli",
			price: "12,000",
			mrp: "14,000",
			image: require("../assets/chilli.png")
		},
		{
			name: "Fresh Onion",
			price: "21,000",
			mrp: "29,000",
			image: require("../assets/onion.png")
		},
		{
			name: "Fresh Potato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/potato.png")
		},
		{
			name: "Fresh Tomato",
			price: "10,000",
			mrp: "12,000",
			image: require("../assets/tomato.png")
		},
	]

	const [state, setState] = useState(data)


	useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (text != '') {
                setState(data.filter((current)=>current.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))
            }else{
				setState(data)
			}
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [text])



	return (
		<SafeAreaView style={{minHeight:'100%'}}>
		<StatusBar style="dark"/>
		<View style={{ height: 350, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20 }}></View>
		<View style={{ flexDirection: 'row', marginTop: 10 ,justifyContent:'center'}}>
        <Text style={{ textAlign: 'center', fontSize: 18, color: "#E5E5E5" }}>Kangsayur</Text>
        <Image style={{ height: 18, width: 16, marginLeft: 5 }} source={require('../assets/carrot.png')}></Image>
      </View>
	  <View style={{flexDirection:'row'}}>
		<View style={{  width: 280,height:36, marginTop: 12, marginHorizontal:15,backgroundColor: "#F5F5F5", borderRadius: 10, alignSelf: 'center', justifyContent: 'center'}}>
		<FontAwesome name="search" size={24} color="#BDBDBD" style={{position:'absolute',left:10}}/>
                <TextInput style={{ fontSize: 16, color: "#B9B9B9", paddingHorizontal: 40, height: 40, }}
                    placeholder="Search for fruits, vegetables, groce..."
                    onChangeText={Text => setText(Text)}
                    defaultValue={text}></TextInput>
				 
            </View>
			<TouchableOpacity><Feather name="mail" size={24} color="#FFF" style={{marginTop:16}} /></TouchableOpacity>
			<TouchableOpacity><FontAwesome name="bell-o" size={24} color="#FFF" style={{marginTop:16,marginHorizontal:15}} /></TouchableOpacity>
			</View>
			

			{/* <FlatList style={{marginTop:20}}
				data={state}
				renderItem={({ item, index }) => (
					<Listcards item={item}/>
				)} /> */}

		</SafeAreaView>

	);
};

export default Home;
