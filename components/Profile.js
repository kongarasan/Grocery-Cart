import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
	<Text style={{ color: "#006600", fontSize: 40 }}>User Screen!</Text>
	<Ionicons name="md-person-circle-outline" size={80} color="#006600" />
	</View>
);
};

export default Profile;
