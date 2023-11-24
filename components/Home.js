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
		<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginTop:50}}>
		<View style={{  width: 300, marginTop: 10, backgroundColor: "#F5F5F5", borderRadius: 10, alignSelf: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "black" }}>
                <TextInput style={{ fontSize: 16, color: "#B9B9B9", paddingHorizontal: 10, height: 40, }}
                    placeholder="Search Item"
                    onChangeText={Text => setText(Text)}
                    defaultValue={text}></TextInput>
				 <FontAwesome name="search" size={24} color="black" style={{position:'absolute',right:10}}/>
            </View>
			<TouchableOpacity style={{marginLeft:14,marginTop:4}}
			 onPress={() => {
            navigation.navigate("Cart")

          }}>
			<Entypo name="shopping-cart" size={24} color="black" />
			</TouchableOpacity>
			</View>

			<FlatList style={{marginTop:20}}
				data={state}
				renderItem={({ item, index }) => (
					<Listcards item={item}/>
				)} />

		</SafeAreaView>

	);
};

export default Home;
