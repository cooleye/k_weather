import * as React from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// 导入七天趋势预报
import SevenDayScreen from './seven'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333'
    },
    centerBox: {
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tempSymbol: {
        color: "#fff",
        fontSize: 30,
        position: 'absolute',
        top: 0,
        right: 0
    },
    tempNum: {
        color: "#fff",
        fontSize: 160,
        padding: 0
    },
    tempText: {
        color: "#fff",
        fontSize: 30
    },
    content: {
        width: '100%',
        height: 160,
        marginTop: 50
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    col_l: {
        flex: 1,
        height: 40,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    col_r: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        paddingRight: 20,
        alignItems: 'flex-end'
    },
    checkMore: {
        position: 'absolute',
        bottom: 0
    },
    button:{
        backgroundColor: 'rgba(255,255,255,.2)',
        borderRadius: 25,
        width:300,
        height: 50,
        color:'#fff',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.centerBox}>
                <Text style={styles.tempSymbol}>℃</Text>
                <Text style={styles.tempNum}>9</Text>
                <Text style={styles.tempText}>阴</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={{color:'#fff'}}>☘️空气76</Text></View>
                    <View style={styles.col_r}><Text style={{color:'#fff'}}>💧降水概率0%</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={{color:'#fff'}}>☁今天·阴</Text></View>
                    <View style={styles.col_r}><Text style={{color:'#fff'}}>11℃/9℃</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={{color:'#fff'}}>⛅️明天·晴转多云</Text></View>
                    <View style={styles.col_r}><Text style={{color:'#fff'}}>11℃/9℃</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={{color:'#fff'}}>☀️后天·阴天</Text></View>
                    <View style={styles.col_r}><Text style={{color:'#fff'}}>11℃/9℃</Text></View>
                </View>
            </View>
            <Button title="查看近七日天气" onPress={() => navigation.navigate('seven')}/>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('seven')}
            >
                <Text style={{color:'#fff',fontSize: 20}}>查看近七日天气</Text>
            </TouchableOpacity>
        </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={{title: '余杭区'}}
                name="home"
                component={HomeScreen}/>
            <HomeStack.Screen options={{title: ''}} name="seven" component={SevenDayScreen}/>
        </HomeStack.Navigator>
    );
}