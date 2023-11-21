import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { StatusBar } from "expo-status-bar";
const Otp = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <StatusBar
                background='white'
                backgroundColor='white'
                barStyle="dark-content"
                style={{ backgroundColor: 'white', flex: 1 }}
            ></StatusBar>


            <View style={{ marginTop: '15%', paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center', width: '95%' }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 14,
                        color: 'black',
                        marginBottom: 32
                    }}
                >
                    Enter 4 digit code that sent to your phone number
                </Text>


                <OTPInputView
                    style={{ width: '80%', height: 100 }}
                    pinCount={4}
                    autoFocusOnLoad = {false}
                    codeInputFieldStyle={{
                        width: 54,
                        height: 54,
                        borderWidth: 1,
                        borderRadius: 12,
                        backgroundColor: '#e5e5e5',
                        color:'black'
                    }}
                    codeInputHighlightStyle={{ borderColor: 'blue' }}
                    onCodeFilled={(code => {
                        navigation.navigate("Home")

                    })}
                />

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        color: 'blue',
                        textDecorationLine: 'underline'

                    }}
                >
                    Resend Code
                </Text>
                <TouchableOpacity style={{ marginHorizontal: 26, height: 54, width: 335, marginTop: 20, backgroundColor: "#4CAD73", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#F5F5F5" }}
                    onPress={() => {
                        navigation.navigate("Home")

                    }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: "#FFF" }}>Verify Now</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default Otp;
