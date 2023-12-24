import React from "react";
import { SafeAreaView, ScrollView, Text, View,ImageBackground,Image ,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => {
return (
	<ScrollView  style={{backgroundColor:'white'}}>
		
			<View style={{height:360,width:"100%",backgroundColor:'white'}}>
			<ImageBackground source={require("../assets/background.png")} style={{height:360,width:"100%",alignItems:'center',justifyContent:'center'}}>
			<Ionicons name="settings" size={24} color="white"  style={{marginTop:40,marginLeft:300}}/> 
			<Image source={require("../assets/person2.png")} style={{height:230,width:230,marginTop:30}}></Image>
			</ImageBackground>
			</View>
			<View style={{flexDirection:'row'}}>
				<TouchableOpacity style={{height:50,width:180,backgroundColor:'#4CAD73',marginTop:10,marginHorizontal:10,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
					<Text style={{fontSize:18,color:'white'}}>Edit Profile</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{height:50,width:180,backgroundColor:'#4CAD73',marginTop:10,marginHorizontal:0,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
					<Text style={{fontSize:18,color:'white'}}>Add Wallet</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:40,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<AntDesign name="heart" size={24} color="#4CAD73" style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>Favourites</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:130}} />
			</TouchableOpacity>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<Entypo name="shopping-cart" size={24} color="#4CAD73"  style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>Your Orders</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:115}} />
			</TouchableOpacity>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<FontAwesome name="address-card-o" size={24} color="#4CAD73"  style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>Your Address</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:100}} />
			</TouchableOpacity>
			<View style={{height:2,width:340,backgroundColor:"#4CAD73",marginTop:10,marginHorizontal:22}}></View>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<FontAwesome name="language" size={24} color="#4CAD73"   style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>  Language</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:130}} />
			</TouchableOpacity>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<FontAwesome5 name="gifts" size={24} color="#4CAD73"    style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>Gifts</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:172}} />
			</TouchableOpacity>
			<View style={{height:2,width:340,backgroundColor:"#4CAD73",marginTop:10,marginHorizontal:22}}></View>
			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<MaterialCommunityIcons name="account-question-outline" size={28} color="#4CAD73"    style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>About Us</Text>
			<Entypo name="chevron-right" size={24} color="#4CAD73" style={{marginHorizontal:130}} />
			</TouchableOpacity>

			<TouchableOpacity style={{height:50,width:360,backgroundColor:"white",marginTop:15,marginHorizontal:15,flexDirection:'row',alignItems:'center'}}>
			<MaterialCommunityIcons name="logout" size={24} color="red"    style={{marginLeft:10}} />
			<Text style={{color:'black',fontSize:20,marginHorizontal:30}}>Log Out</Text>
			
			</TouchableOpacity>
		
		</ScrollView>
);
};

export default Profile;
