import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', alignItems: 'center', minHeight: "100%" }}>
      <View style={{ height: 400, width: "130%", backgroundColor: "#53B97C", borderBottomLeftRadius: 400, borderBottomRightRadius: 400, position: 'absolute', right: -20 }}></View>
      <View style={{ flexDirection: 'row', marginTop: 100, }}>
        <Text style={{ textAlign: 'center', fontSize: 28, color: "#E5E5E5" }}>Kangsayur</Text>
        <Image style={{ height: 30, width: 28, marginLeft: 5 }} source={require('../assets/carrot.png')}></Image>
      </View>
      <Image style={{ width: "80%", height: '50%', resizeMode: 'contain', marginTop: -50 }} source={require('../assets/login.png')}></Image>
      <TouchableOpacity style={{ height: 54, width: 335, backgroundColor: "#4CAD73", borderRadius: 10, alignItem: 'center', justifyContent: 'center' }}
        onPress={() => {
          navigation.navigate("Login")

        }}>
        <Text style={{ textAlign: 'center', fontSize: 18, color: "#FFF" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 54, width: 335, marginTop: 20, backgroundColor: "#FFF", borderRadius: 10, alignItem: 'center', justifyContent: 'center', borderWidth: 1, borderColor: "#4CAD73" }}
      >
        <Text style={{ textAlign: 'center', fontSize: 18, color: "#4CAD73" }}>Register</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 40, width: "90%", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: "30%", height: 1, backgroundColor: '#B9B9B9' }}></View>
        <Text style={{ fontSize: 14, color: "#656565", marginHorizontal: 8 }}>Or login with</Text>
        <View style={{ width: "30%", height: 1, backgroundColor: '#B9B9B9' }}></View>
      </View>
      <TouchableOpacity style={{ height: 45, width: 335, flexDirection: 'row', marginTop: 20, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#C5C5C5", justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: 18, width: 18, position: 'absolute', left: 10 }} source={require('../assets/google.png')}></Image>
        <Text style={{ fontSize: 18, color: "#4F4F4F" }}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 45, width: 335, flexDirection: 'row', marginTop: 20, backgroundColor: "#2D9CDB", borderRadius: 10, borderWidth: 1, borderColor: "#C5C5C5", justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ height: 18, width: 18, position: 'absolute', left: 10 }} source={require('../assets/facebook.png')}></Image>
        <Text style={{ fontSize: 18, color: "#FFF" }}>Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Landing

