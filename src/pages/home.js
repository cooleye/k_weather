import * as React from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// 导入七天趋势预报
import SevenDayScreen from './seven'
import CityManage from './city_manege'
// 导入城市天气页面
import CityScreen from './city'
import SearchScreen from './search'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    centerBox: {
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:'#fff',
        // borderWidth:1,
        height: 160
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
        fontSize: 140,
        padding: 0
    },
    tempText: {
        color: "#fff",
        fontSize: 30
    },
    content: {
        width: '100%',
        height: 160,
        marginTop: 130
    },
    row: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    col_l: {
        flex: 1,
        height: 50,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    col_r: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    colText:{
        color:'#fff',
        fontSize: 13
    },
    checkMore: {
        position: 'absolute',
        bottom: 0
    },
    button:{
        backgroundColor: '#333',
        borderRadius: 25,
        width:300,
        height: 50,
        color:'#fff',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
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
                    <View style={styles.col_l}><Text style={styles.colText}>☘️ 空气76</Text></View>
                    <View style={styles.col_r}><Text style={styles.colText}>💧 降水概率 0%</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={styles.colText}>☁ 今天·阴</Text></View>
                    <View style={styles.col_r}><Text style={styles.colText}>11℃ / 9℃</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={styles.colText}>⛅️ 明天·晴转多云</Text></View>
                    <View style={styles.col_r}><Text style={styles.colText}>11℃ / 9℃</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.col_l}><Text style={styles.colText}>☀️ 后天·阴天</Text></View>
                    <View style={styles.col_r}><Text style={styles.colText}>11℃ / 9℃</Text></View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('seven')}
            >
                <Text style={{color:'#aaa',fontSize: 20}}>查看近七日天气</Text>
            </TouchableOpacity>
        </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={({navigation,route}) =>({
                title: '余杭区',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                    <TouchableOpacity style={{paddingLeft:10}}
                        onPress={() => {
                            console.log('home.....=======>')
                            navigation.navigate('city_manage')
                        }} >
                        <Ionicons name='add' size={30} color={'#fff'} />
                    </TouchableOpacity>
                  ),
                })}
                name="home"
                component={HomeScreen}/>
            <HomeStack.Screen options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',}} 
                name="seven" component={SevenDayScreen}/>

            <HomeStack.Screen options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',}} 
                name="city_manage" component={CityManage}/>

                <HomeStack.Screen options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',}} 
                    name="city" component={CityScreen}/>
    
                <HomeStack.Screen options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTintColor: '#fff',}} 
                    name="search" component={SearchScreen}/>
        </HomeStack.Navigator>
    );
}