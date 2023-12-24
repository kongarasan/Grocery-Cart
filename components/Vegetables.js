import React from "react";
import { SafeAreaView, Text, View ,Image,TextInput ,TouchableOpacity,FlatList} from "react-native";
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

const Vegetables = ({navigation}) => {
    const [text,setText] = useState("")
    const [title,setTitle] = useState("")

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
	
				<SafeAreaView style={{minHeight:'100%',backgroundColor:'white'}}>
		<StatusBar style="dark"/>
		{/* <View style={{ height: 350, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20 }}></View> */}
		<View style={{ flexDirection: 'row', marginTop: 10 ,justifyContent:'center'}}>
        <Text style={{ textAlign: 'center', fontSize: 18, color: "#4CAD73" }}>Kangsayur</Text>
        <Image style={{ height: 18, width: 16, marginLeft: 5 }} source={require('../assets/carrotG.png')}></Image>
      </View>
	  <View style={{flexDirection:'row'}}>
		<View style={{  width: 325,height:36, marginTop: 20, marginHorizontal:15,backgroundColor: "#F5F5F5", borderRadius: 10, alignSelf: 'center', justifyContent: 'center'}}>
		<FontAwesome name="search" size={24} color="#BDBDBD" style={{position:'absolute',left:10}}/>
                <TextInput style={{ fontSize: 16, color: "#B9B9B9", paddingHorizontal: 40, height: 40, }}
                    placeholder="Search for fruits, vegetables, groce..."
                    onChangeText={Text => setText(Text)}
                    defaultValue={text}></TextInput>
				 
            </View>
			
			<TouchableOpacity><AntDesign name="shoppingcart" size={24} color="black"  style={{marginTop:24}} /></TouchableOpacity>
			</View>
            <View style={{height:130}}>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{backgroundColor:'white'}}>
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
            <View style={{height:2,width:"100%",backgroundColor:'#E6E6E6'}}></View>
 <ScrollView showsVerticalScrollIndicator={false}>

            <FlatList style={{marginTop:20}}
				data={state}
				renderItem={({ item, index }) => (
					<Listcards item={item}/>
				)} />
                </ScrollView>

            </SafeAreaView>
            
);
};


export default Vegetables;
