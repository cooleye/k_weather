import * as React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// 导入七天趋势预报
import SevenDayScreen from './seven'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    centerBox:{
        width:120,
        height:150,
        // borderWidth:1,
        // borderColor:'#f00',
        // borderStyle:'solid',
        justifyContent:'center',
        alignItems:'center'
    },
    tempSymbol:{
        color:"#fff",
        fontSize:30,
        position:'absolute',
        top:0,
        right:0
    },
    tempText:{
        color:"#fff",
        fontSize:160,
        // position:'absolute'
    }
})

function HomeScreen({navigation}) {
    return (
        <View
            style={styles.container}>
           <View style={styles.centerBox}>
                <Text style={styles.tempSymbol}>℃</Text>
                <Text style={styles.tempText}>9</Text>
           </View>
            <Button title="查看近七日天气" onPress={() => navigation.navigate('seven')}/>
        </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen  options={{ title: '余杭区' }} name="home" component={HomeScreen}/>
            <HomeStack.Screen name="seven" component={SevenDayScreen}/>
        </HomeStack.Navigator>
    );
}