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

const Stack = createNativeStackNavigator();


const App = () => {

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}

        initialRouteName="InitialPage">
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='InitialPage' component={InitialPage}/>
        <Stack.Screen name='Signup'   component={Signup} />
        <Stack.Screen name='Login'  component={Login} />
        <Stack.Screen name='MobileVerification'   component={MobileVerification} />
        <Stack.Screen name='Home'   component={Home} />
        <Stack.Screen name='Otp'  component={Otp} />
        <Stack.Screen name='Cart'  component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;