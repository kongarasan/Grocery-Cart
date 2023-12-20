
import React from "react";
import { Text, View, Image, TouchableOpacity, FlatList, SafeAreaView,TextInput ,ScrollView} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Listcards from "../UI components/Listcards";
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import Carousel from 'react-native-reanimated-carousel';
import { StatusBar } from "expo-status-bar";
import OfferCard from "../UI components/OfferCard";
import DealCard from "../UI components/DealCard";

import { Feather } from '@expo/vector-icons';
import Categories from "../UI components/Categories";
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
		<ScrollView  style={{backgroundColor:'white'}}>
				<SafeAreaView style={{minHeight:'100%',backgroundColor:'white'}}>
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
			<Carousel
                loop
                width={400}
                height={300 }
                autoPlay={true}
                data={[...new Array(2).keys()]}
                scrollAnimationDuration={5000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
				index%2 == 0 ? (
                 <DealCard />
				) : <DealCard/> 
                )}
            />
			<Text style={{fontSize:18,marginHorizontal:20,fontWeight:700}}>Categories</Text>
			{/* <View style={{height:120,width:100,backgroundColor:'white',marginHorizontal:20,marginTop:20,justifyContent:'center'}}>
			<View style={{height:75,width:74,backgroundColor:"#DCF2E5",marginHorizontal:13,marginTop:13,borderRadius:15}}>
				<Image  style={{height:50,width:70,justifyContent:'center',marginTop:10}}source={require('../assets/veg.png')}></Image>
			</View>
             <Text style={{fontSize:12,textAlign:'center',marginTop:8}}>vegetables</Text>
			</View> */}
			<View style={{height:130}}>

			<ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{backgroundColor:'white'}}>
               <Categories Image={require("../assets/veg.png")} cat="Vegetables"/>
			   <Categories Image={require("../assets/fruits.png")} cat="Fruits"/>
			   <Categories Image={require("../assets/meat.png")} cat="Meats"/>
			   <Categories Image={require("../assets/drinks.png")} cat="Drinks"/>
			   <Categories Image={require("../assets/baker.png")} cat="Bakers"/>

			</ScrollView>
			</View>

			<View style={{ width: "100%", height: 1, backgroundColor: '#BDBDBD' }}></View>
			<View style={{flexDirection:'row'}}>
			<Text style={{marginTop:20,marginHorizontal:20,fontSize:18,fontWeight:600}}>Special Deal</Text>
			<Text style={{marginTop:22,marginHorizontal:150,fontSize:13,color:"#4CAD73",fontWeight:"300"}}>See more</Text>
			<Entypo name="chevron-right" size={20} color="#4CAD73" style={{marginTop:21,marginHorizontal:-150}} />

			</View>

			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       <OfferCard Image={require("../assets/spl.png")}/>
	   <OfferCard Image={require("../assets/tomatos.png")}/>
	   <OfferCard Image={require("../assets/market.png")}/>


			</ScrollView>

			{/* <FlatList style={{marginTop:20}}
				data={state}
				renderItem={({ item, index }) => (
					<Listcards item={item}/>
				)} /> */}
		

		</SafeAreaView>
		</ScrollView>


	);
};

export default Home;
