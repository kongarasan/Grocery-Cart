import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import MobileVerification from './components/MobileVerification';
import Otp from './components/Otp';

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

        initialRouteName="Landing">
        <Stack.Screen name='Landing' options={{ animation: 'fade', animationTypeForReplace:'fade', gestureEnabled: false}} component={Landing} />
        <Stack.Screen name='Signup'  options={{ animation: 'fade', animationTypeForReplace:'fade', gestureEnabled: false}} component={Signup} />
        <Stack.Screen name='Login'  options={{ animation: 'fade', animationTypeForReplace:'fade', gestureEnabled: false  }} component={Login} />
        <Stack.Screen name='MobileVerification'  options={{ animation: 'fade', animationTypeForReplace:'fade'  }} component={MobileVerification} />
        <Stack.Screen name='Otp'  options={{ animation: 'fade', animationTypeForReplace:'fade'  }} component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;