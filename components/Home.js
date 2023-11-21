import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from 'lottie-react-native';

const Home = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<LottieView source={require('../Animation2.json')} autoPlay loop></LottieView>
	
	</View>
);
};

export default Home;
