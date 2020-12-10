import * as React from 'react';
navigator.geolocation = require('@react-native-community/geolocation');
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './pages/home_stack'

export default function App() {
  return (
    <NavigationContainer>
        <HomeStackScreen/>
    </NavigationContainer>
  );
}