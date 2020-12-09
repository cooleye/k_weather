import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


export default function CityManageScreen() {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>城市管理!</Text>
        </View>
    );
}
