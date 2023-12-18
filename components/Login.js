import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const popAction = StackActions.pop(1);
const Login = ({ navigation, route }) => {
    const [text, setText] = useState('');
    const [Password, setPassword] = useState('');
    const [passIcon, setPassIcon] = useState(false)



    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentContainerStyle={{minHeight:'100%'}}>
        <View style={{ backgroundColor: 'white', minHeight:'100%' }}>
            <View style={{ height: 400, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20, flexDirection: 'column-reverse' }}>
                <Text style={{ textAlign: 'center', fontSize: 34, color: "#FFF", zIndex: 20, marginBottom: 60, marginRight: 200 }}>Login</Text>
            </View>
            <Image style={{ width: "80%", height: '40%', resizeMode: 'contain', marginLeft: 150, marginTop: 110 }} source={require('../assets/person1.png')}></Image>




            <TouchableOpacity
                onPress={() => {
                    navigation.dispatch(popAction);
                }} style={{ position: 'absolute', left: 16, top: 50 }}>
                <Ionicons name="ios-arrow-back-circle-sharp" size={34} color="white" />
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 30, color: "#333333", fontSize: 14 }}>Email</Text>
            <TouchableOpacity style={{ marginHorizontal: 26, width: 335, marginTop: 10, backgroundColor: "#F5F5F5", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}>
                <TextInput style={{ fontSize: 16, color: "#B9B9B9", paddingHorizontal: 10, height: 54, }}
                    placeholder="Enter username"
                    onChangeText={Text => setText(Text)}
                    defaultValue={text}></TextInput>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 30, color: "#333333", fontSize: 14, marginTop: 18 }}>password</Text>
            <TouchableOpacity style={{ marginHorizontal: 26, width: 335, marginTop: 10, backgroundColor: "#F5F5F5", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}>
                <TextInput style={{ fontSize: 16, color: "#B9B9B9", marginHorizontal: 10,  height: 54, }}
                    placeholder="Password"
                    secureTextEntry={passIcon}
                    onChangeText={Text => setPassword(Text)}
                    defaultValue={Password}></TextInput>
                <TouchableOpacity
                    style={{ position: "absolute", right: 24 }}
                    onPress={() => {
                        setPassIcon(!passIcon)
                    }}>

                    {passIcon ?
                        <Entypo name="eye-with-line" size={24} color="#BDBDBD" />
                        : <AntDesign name="eye" size={24} color="#BDBDBD" />
                    }
                </TouchableOpacity>
            </TouchableOpacity>



            <Text style={{ textAlign: 'right', color: "#0EB177", fontSize: 10, marginTop: 6, marginRight: 28 }}>Forgot Password</Text>
            <TouchableOpacity style={{ marginHorizontal: 26, height: 54, width: 335, marginTop: 10, backgroundColor: "#4CAD73", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}
            onPress={() => {
                route.params.login()
            // navigation.navigate("Home")

          }}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: "#FFF" }}>Login</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{ marginHorizontal: 26, height: 54, width: 335, marginTop: 10, backgroundColor: "#4CAD73", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}
            onPress={() => {
            navigation.navigate("MobileVerification")

          }}>
                <Text style={{ textAlign: 'center', fontSize: 18, color: "#FFF" }}>Via Phone Number</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 10, alignItem: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "#4CAD73", fontSize: 12 }}>Not have an account?</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#4CAD73", fontSize: 12, fontWeight: 600 }}> Register</Text>
                </TouchableOpacity>

            </View>


        </View>
        </ScrollView>
    );
}

export default Login
