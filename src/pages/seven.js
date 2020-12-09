import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


export default function SevenDayScreen() {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>七天预报!</Text>
        </View>
    );
}
