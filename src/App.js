import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './pages/home'

export default function App() {
  return (
    <NavigationContainer>
        <HomeStackScreen/>
    </NavigationContainer>
  );
}