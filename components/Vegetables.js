import React from "react";
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import Carousel from 'react-native-reanimated-carousel';
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Feather } from '@expo/vector-icons';
import Listcards from "../UI components/Listcards";
import Categories from "../UI components/Categories";

const Vegetables = ({ navigation }) => {
	const [text, setText] = useState("")
	const [title, setTitle] = useState("All")

	const data = [
		{
			name: "Fresh Carrot",
			price: "100",
			mrp: "130",
			category: "Vegetables",
			details: "The carrot is a root vegetable, most commonly observed as orange in color, though purple, black, red, white, and yellow cultivars exist, all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.",
			image: require("../assets/freshcarrot.png")
		},
		{
			name: "Broccoli",
			price: "250",
			mrp: "350",
			category: "Vegetables",
			details:"Broccoli contains many vitamins, minerals, fiber, and antioxidants. Broccoli's benefits include helping reduce inflammation, keeping blood sugar stable, and strengthening the immune system. Broccoli is a green vegetable that vaguely resembles a miniature tree. It belongs to the plant species known as Brassica oleracea.",
			image: require("../assets/broccoli.jpg")
		},
		{
			name: "Fresh Onion",
			price: "21,000",
			mrp: "29,000",
			category: "Vegetables",
			details:"Onions are high in vitamin C, which may help regulate your immune health, collagen production, and iron absorption. It's also a powerful antioxidant that could help protect your cells from unstable, damaging molecules called free radicals. Onions are rich in B vitamins, including folate and vitamin B6.",
			
			image: require("../assets/onion.png")
		},
		{
			name: "Fresh Potato",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			details:"They're rich in vitamin C, which is an antioxidant. Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy. Another major nutrient in potatoes is potassium, an electrolyte which aids in the workings of our heart, muscles, and nervous system.",
			image: require("../assets/potato.png")
		},
		{
			name: "Fresh Tomato",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			details:"Tomato (Lycopersicon esculentum) is an annual or short lived perennial pubescent herb and greyish green curled uneven pinnate leaves. The flowers are off white bearing fruits which are red or yellow in colour. It is a self pollinated crop.",
			image: require("../assets/tomato.png")
		},
		{
			name: "Cauliflower",
			price: "18,000",
			mrp: "21,000",
			category: "Vegetables",
			image: require("../assets/flower.jpg")
		},
		{
			name: "Fresh Red Chilli",
			price: "12,000",
			mrp: "14,000",
			category: "Vegetables",
			image: require("../assets/chilli.png")
		},
		{
			name: "Fresh Capsicum",
			price: "21,000",
			mrp: "29,000",
			category: "Vegetables",
			image: require("../assets/capsicum.jpg")
		},
		{
			name: "Coconut",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			image: require("../assets/coconut.jpg")
		},
		{
			name: "Fresh Corn",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			image: require("../assets/corn.jpg")
		}, {
			name: "Fresh Cucumber",
			price: "18,000",
			mrp: "21,000",
			category: "Vegetables",
			image: require("../assets/cucumber.jpg")
		},
		{
			name: "LadiesFinger",
			price: "12,000",
			mrp: "14,000",
			category: "Vegetables",
			image: require("../assets/ladiesfinger.jpg")
		},
		{
			name: "Fresh Pea",
			price: "21,000",
			mrp: "29,000",
			category: "Vegetables",
			image: require("../assets/pea.jpg")
		},
		{
			name: "Fresh Pumkin",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			image: require("../assets/pumkin.jpg")
		},
		{
			name: "Fresh Radish",
			price: "10,000",
			mrp: "12,000",
			category: "Vegetables",
			image: require("../assets/radish.jpg")
		}, {
			name: "Fresh Pineapple",
			price: "18,000",
			mrp: "21,000",
			category: "Fruits",
			image: require("../assets/pineapple.jpg")
		},
		{
			name: "Avacado",
			price: "12,000",
			mrp: "14,000",
			category: "Fruits",
			image: require("../assets/avagado.jpg")
		},
		{
			name: "Banana",
			price: "21,000",
			mrp: "29,000",
			category: "Fruits",
			image: require("../assets/banana.jpg")
		},
		{
			name: "Blueberry",
			price: "10,000",
			mrp: "12,000",
			category: "Fruits",
			image: require("../assets/blueberry.jpg")
		},
		{
			name: "Cherry",
			price: "10,000",
			mrp: "12,000",
			category: "Fruits",
			image: require("../assets/cherry.jpg")
		},
		{
			name: "Fig",
			price: "10,000",
			mrp: "12,000",
			category: "Fruits",
			image: require("../assets/fig.jpg")
		},
		{
			name: "Grapes",
			price: "10,000",
			mrp: "12,000",
			category: "Fruits",
			image: require("../assets/grapes.jpg")
		},
		{
			name: "Kiwi",
			price: "10,000",
			mrp: "12,000",
			category: "Fruits",
			image: require("../assets/kiwi.jpg")
		},
		{
			name: "Beef",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/beef.jpg")
		},
		{
			name: "Biscuits",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/biscuits.jpg")
		},
		{
			name: "Brown Chocolate cookie",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/brown.jpg")
		},
		{
			name: "Chicken",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/chicken.jpg")
		},
		{
			name: "Egg",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/egg.jpg")
		},
		{
			name: "Mutton",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/mutton.jpg")
		},
		{
			name: "Prawn",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/prawn.jpg")
		},
		{
			name: "Pork",
			price: "10,000",
			mrp: "12,000",
			category: "Meats",
			image: require("../assets/pork.jpg")
		},
		{
			name: "Chocolate cookie",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/chocolatecookie.jpg")
		},
		{
			name: "Croissant",
			price: "200",
			mrp: "200",
			category: "Bakers",
			image: require("../assets/croissant.jpg")
		},
		{
			name: "Cup Cake",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/cupcake.jpg")
		},
		{
			name: "Donut",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/donut.jpg")
		},
		{
			name: "French Macaron",
			price: "10,000",
			mrp: "12,000",
			category: "Bakers",
			image: require("../assets/frenchmacaron.jpg")
		},
		{
			name: "Fruit Juice",
			price: "10,000",
			mrp: "12,000",
			category: "Drinks",
			image: require("../assets/fruitjuice.jpg")
		},
		{
			name: "Milk",
			price: "10,000",
			mrp: "12,000",
			category: "Drinks",
			image: require("../assets/milk.jpg")
		},
	]

	const [state, setState] = useState(data)


	useEffect(() => {
		const filterList = data.filter((ele) => ele.category == title)
		if (title == "All") setState(data)
		else setState(filterList)

	}, [title])


	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (text != '') {
				setState(data.filter((current) => current.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))
			} else {
				setState(data)
			}
		}, 500)
		return () => clearTimeout(delayDebounceFn)
	}, [text])
	return (

		<SafeAreaView style={{ minHeight: '100%', backgroundColor: 'white' }}>
			<StatusBar style="dark" />
			{/* <View style={{ height: 350, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20 }}></View> */}
			<View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
				<Text style={{ textAlign: 'center', fontSize: 18, color: "#4CAD73" }}>Kangsayur</Text>
				<Image style={{ height: 18, width: 16, marginLeft: 5 }} source={require('../assets/carrotG.png')}></Image>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ width: 325, height: 36, marginTop: 20, marginHorizontal: 15, backgroundColor: "#F5F5F5", borderRadius: 10, alignSelf: 'center', justifyContent: 'center' }}>
					<FontAwesome name="search" size={24} color="#BDBDBD" style={{ position: 'absolute', left: 10 }} />
					<TextInput style={{ fontSize: 16, color: "#B9B9B9", paddingHorizontal: 40, height: 40, }}
						placeholder="Search for fruits, vegetables, groce..."
						onChangeText={Text => setText(Text)}
						defaultValue={text}></TextInput>

				</View>

				<TouchableOpacity><AntDesign name="shoppingcart" size={24} color="black" style={{ marginTop: 24 }} /></TouchableOpacity>
			</View>
			<View style={{ height: 130 }}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ backgroundColor: 'white' }}>
					<Categories Image={require("../assets/aaaa.png")} cat="All" flag={title == "All"}
						onClick={() => {
							setTitle('All')
							// navigation.navigate("Vegetables")
						}}
					/>
					<Categories Image={require("../assets/veg.png")} cat="Vegetables" flag={title == "Vegetables"}
						onClick={() => {
							setTitle('Vegetables')
							// navigation.navigate("Vegetables")
						}}
					/>
					<Categories Image={require("../assets/fruits.png")} cat="Fruits" flag={title == "Fruits"}
						onClick={() => {
							setTitle('Fruits')
							// navigation.navigate("Vegetables")
						}}
					/>
					<Categories Image={require("../assets/meat.png")} cat="Meats" flag={title == "Meats"}
						onClick={() => {
							setTitle('Meats')
							// navigation.navigate("Vegetables")
						}}
					/>
					<Categories Image={require("../assets/drinks.png")} cat="Drinks" flag={title == "Drinks"}
						onClick={() => {
							setTitle('Drinks')
							// navigation.navigate("Vegetables")
						}}
					/>
					<Categories Image={require("../assets/baker.png")} cat="Bakers" flag={title == "Bakers"}
						onClick={() => {
							setTitle('Bakers')
							// navigation.navigate("Vegetables")
						}}
					/>

				</ScrollView>
			</View>
			{/* <View style={{height:6,width:66,backgroundColor:"#51BC7D",marginHorizontal:18,borderTopLeftRadius:6,borderTopRightRadius:6}}></View> */}
			<View style={{ height: 2, width: "100%", backgroundColor: '#E6E6E6' }}></View>
			<ScrollView showsVerticalScrollIndicator={false}>

				<FlatList style={{ marginTop: 20, paddingBottom:300 }}
					data={state}
					renderItem={({ item, index }) => (
						<Listcards item={item} onClick={()=>{
							navigation.navigate("DetailsPage", item)
						}} />
					)} />
			</ScrollView>

		</SafeAreaView>

	);
};


export default Vegetables;
