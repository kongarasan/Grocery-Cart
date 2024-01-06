import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
const Listcards = ({ item, onClick }) => {
    const [liked, setLiked] = useState(false)
    const [count,setCount] =useState(0)
    return (
        <TouchableOpacity onPress={onClick} style={{ height: 130, width: "90%", marginTop: 10, marginHorizontal: 20, borderRadius: 20, flexDirection: 'row' }}>
            <TouchableOpacity 
            onPress={()=>{setLiked(!liked)}}
             style={{ position: 'absolute', top: 12, left: 12, zIndex: 4 }}>
                {
                    liked ?
                        <AntDesign name="heart" size={24} color="red" style={{ zIndex: 4 }} />
                        :
                        <AntDesign name="heart" size={24} color="white" style={{ zIndex: 4 }} />

                }
            </TouchableOpacity>

            <Image source={item.image} style={{ height: 130, width: "50%", borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}></Image>
            <View style={{ height: 130, width: "50%", borderBottomRightRadius: 20, borderTopRightRadius: 20, backgroundColor: "white" }}>
                <Text style={{ fontSize: 16, fontWeight: 700, marginTop: 20, textAlign: 'center', lineHeight:16 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 5, textAlign: 'center', color: '#4CAD73',  lineHeight:16 }}>Rp{item.price}/kg</Text>
                <Text style={{ fontSize: 14, fontWeight: 600, marginTop: 5, textAlign: 'center', color: '#4CAD73' }}>MRP:Rp {item.mrp}</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                    onPress={()=>{
                        if(count >0)
                        {
                            setCount(count-1)
                        }
                        
                        }}>
                        <Entypo name="circle-with-minus" size={28} color="#4CAD73" />
                    </TouchableOpacity>
                    <View style={{ height: 28, width: 28, backgroundColor: '#DBF4EB', borderRadius: 6, marginHorizontal: 6, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#4CAD73', textAlign: 'center' }}>{count}</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{setCount(count+1)}}>
                        <Entypo name="circle-with-plus" size={28} color="#4CAD73" />
                    </TouchableOpacity>


                </View>
            </View>

        </TouchableOpacity>
    );
};

export default Listcards;
