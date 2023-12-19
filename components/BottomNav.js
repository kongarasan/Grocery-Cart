import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNavigationContainerRef } from "@react-navigation/native"
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AddCart from './AddCart';
import Fav from "./Fav";
import Profile from "./Profile";
import Home from './Home';


const Tab = createBottomTabNavigator();



export default function BottomNav() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'green', backgroundColor: "white" }}>
            <Tab.Screen name={'Home'} component={Home} options={{
                title:"",
                tabBarIcon: (tabInfo) => (
                    <Entypo name="home" 
                        style={{marginTop:7}}
                        size={tabInfo.focused ? 30 : 28}
                        color={tabInfo.focused ? '#4CAD73' : 'black'}
                    />
                ),
            }} />
            <Tab.Screen name={'Likes'} component={Fav} options={{
                 title:"",
                tabBarIcon: (tabInfo) => (
                    <MaterialIcons name="favorite"  
                        style={{marginTop:5}}
                        size={tabInfo.focused ? 30 : 28}
                        color={tabInfo.focused ? '#4CAD73' : 'black'  }
                    />
                ),
                

            }}
             />
             <Tab.Screen name={'AddCart'} component={AddCart} options={{
                 title:"",
                tabBarIcon: (tabInfo) => (
                    <Entypo name="shopping-cart" 
                        style={{marginTop:6}}
                        size={tabInfo.focused ? 30 : 28}
                        color={tabInfo.focused ? '#4CAD73' : 'black' }
                    />
                ),
                

            }}
             />
             <Tab.Screen name={'Profile'} component={Profile} options={{
                 title:"",
                tabBarIcon: (tabInfo) => (
                    <Ionicons name="person" 
                        style={{marginTop:5}}
                        size={tabInfo.focused ? 30 : 28}
                        color={tabInfo.focused ? '#4CAD73' : 'black' }
                    />
                ),
                

            }}
             />
        </Tab.Navigator>
    );
}
