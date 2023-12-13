import React from "react";
import { Text, View ,Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InitialPage = ({navigation}) => {
return (
    <View style={{ backgroundColor: '#4CAD73', alignItems: 'center', minHeight: "100%" }}>
      <View style={{ height: 400, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20 }}></View>
      <View style={{ flexDirection: 'row', marginTop: 100, }}>
        <Text style={{ textAlign: 'center', fontSize: 28, color: "#E5E5E5" }}>Kangsayur</Text>
        <Image style={{ height: 30, width: 28, marginLeft: 5 }} source={require('../assets/carrot.png')}></Image>
      </View>
      <View style={{height:280,width:130,marginTop:50,flexDirection:'row',marginRight:150}}>
        <Image style={{ width: 150, height: 290, resizeMode: 'contain'}} source={require('../assets/image5.png')}></Image>
        <Image style={{ width: 150, height: 290, resizeMode: 'contain'}} source={require('../assets/image6.png')}></Image>
        </View>
        <Text style={{color:'white',marginTop:70,fontSize:18,alignItems:'center',justifyContent:'center',textAlign:'center'}}>Kangsayur is a solution for Grocery {'\n'}
            Shopping every you need</Text>
	<TouchableOpacity style={{height:55,width:340,backgroundColor:'white',marginTop:100,borderRadius:10}}
     onPress={() => {
          navigation.navigate("Landing")

        }}>
    <Text style={{alignItems:'center',textAlign:'center',justifyContent:'center',fontSize:18,color:'#4CAD73',marginTop:18}}>Get Started</Text>

    </TouchableOpacity>
	
	</View>
);
};

export default InitialPage;