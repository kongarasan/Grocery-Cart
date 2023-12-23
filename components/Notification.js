import React from "react";
import { Text, View ,Image, SafeAreaView,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({navigation}) => {
return (
    <SafeAreaView>
	<Image source={require('../assets/notification.png')} style={{height:170,width:170,marginTop:200,marginHorizontal:110}}></Image>
    <Text style={{fontSize:24,marginHorizontal:75,marginTop:50}}>No Notification Here!</Text>
    <TouchableOpacity style={{height:50,width:230,backgroundColor:"#4CAD73",marginTop:50,marginHorizontal:80,borderRadius:20}}
    onPress={()=>
    {
        navigation.navigate("Home")
    }}>
     <Text style={{justifyContent:'center',textAlign:'center',marginTop:14,fontSize:16,color:'white',fontWeight:500}}>Return to Home page</Text>
    </TouchableOpacity>
    </SafeAreaView>
);
};

export default Notification;
