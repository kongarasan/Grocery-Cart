import 'react-native-gesture-handler';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import MobileVerification from './components/MobileVerification';
import Otp from './components/Otp';
import Home from './components/Home';
import Cart from './components/Cart';
import { Platform } from 'react-native';
import InitialPage from './components/InitialPage';
import BottomNav from './components/BottomNav';
import { useState } from 'react';
import Vegetables from './components/Vegetables';

const Stack = createNativeStackNavigator();


const App = () => {
  const [auth, setAuth] =useState(false)

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });



  function login(){

 setAuth(true)
  }
  function logout(){
    setAuth(false)
  }


  return (
    <NavigationContainer >
   {auth == true ?   <Stack.Navigator screenOptions={{
        headerShown: false,
      }}

        initialRouteName="BottomNav">
        <Stack.Screen name='BottomNav' component={BottomNav}/>
        <Stack.Screen name='Vegetables' component={Vegetables}/>

      </Stack.Navigator> :    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}

        initialRouteName="InitialPage">
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='InitialPage' component={InitialPage}/>
        <Stack.Screen name='Signup'   component={Signup} />
        <Stack.Screen name='Login'  component={Login} initialParams={{login: login}} />
        <Stack.Screen name='MobileVerification'   component={MobileVerification} />
        <Stack.Screen name='Otp'  component={Otp}  />

      </Stack.Navigator>}
    </NavigationContainer>
  )
}

export default App;