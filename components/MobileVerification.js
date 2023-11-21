import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef } from "react";
import PhoneInput from 'react-native-phone-number-input'
import { StatusBar } from "expo-status-bar";

const MobileVerification = ({navigation}) => {

    const [number, setNumber] = useState("")
    const phoneInput = useRef()

    return (
        <SafeAreaView style={{ backgroundColor: 'white', alignItems: 'center' }}>
            <StatusBar
                background='white'
                backgroundColor='white'
                barStyle="dark-content"
                style={{ backgroundColor: 'white', flex: 1 }}
            ></StatusBar>



            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: 48 }}>

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 17,
                        color: 'black',
                        marginTop: 16
                    }}
                >
                    Enter your number for verification
                </Text>

            </View>


            <View style={{ paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center', width: '95%' }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 14,
                        color: 'black',
                        marginBottom: 32
                    }}
                >

                </Text>

                <PhoneInput
                    ref={phoneInput}
                    defaultCode="IN"
                    layout="first"
                    withShadow
                    onChangeCountry={(country) => {
                        // setCountryCode(country.callingCode[0])
                    }}
                    onChangeText={(text) => {
                        setNumber(text)
                    }}
                />

                <TouchableOpacity style={{ marginHorizontal: 26, height: 54, width: 335, marginTop: 20, backgroundColor: "#4CAD73", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}
                    onPress={() => {
                        navigation.navigate("Otp")

                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: "#FFF" }}>Login</Text>
                </TouchableOpacity>


            </View>


        </SafeAreaView>
    );
};

export default MobileVerification;
