import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Home from "./Home";
import Infrom from "./Infrom";
 const BottonT=()=>{
        return (
                <NavigationContainer>
                <Tab.Navigator  s screenOptions={{
                 tabBarStyle: { backgroundColor: 'black', },
                 headerShown: false,
                tabBarActiveTintColor: 'red',
      }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Infrom" component={Infrom} />
              </Tab.Navigator>   
               </NavigationContainer> 
        )
 } 
 export default BottonT