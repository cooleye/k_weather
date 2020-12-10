import * as React from 'react';
import {TouchableOpacity, Alert,PermissionsAndroid} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';

import HomeScreen from './home'
// 导入七天趋势预报
import SevenDayScreen from './seven'
// 城市管理页面
import CityManage from './city_manege'
// 导入城市天气页面
import CityScreen from './city'
// 城市搜索页面
import SearchScreen from './search'

// 导入api接口
import {city, weather} from '../api'
// 导入store
import store from '../store'
const HomeStack = createStackNavigator();

// 请求获得地理位置的权限
const requestGeolocationPermission = async(getPostion) => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: "地理位置",
            message: "请求允许获取地理位置，以提供更好的体验",
            buttonNeutral: "稍后再问我",
            buttonNegative: "取消",
            buttonPositive: "好的"
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("你可以获取地理位置了");
            getPostion()
        } else {
            console.log("未获得权限");
        }
    } catch (err) {
        console.warn(err);
    }
};

// 获取地理坐标，并保存到store中
function getPostion(){
    Geolocation.getCurrentPosition(info => {
        
        let position = {
            latitude: info.coords.latitude,
            longitude: info.coords.longitude
        }
        store.savePostion(position)

        // 获取天气之前，判断如果上次上次获取时间超过1个小时，则重新获取
        let now = new Date().getTime()
        let last = new Date(store.state.threeDay?.updateTime).getTime()
        if((now - last)/1000 > 10){
            getWeather(position)
            getLocation(position)
        }
    });
}

// 获取地理位置数据
function getLocation(pos){
    fetch(city({localtion:pos.longitude + ',' + pos.latitude}))
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        store.saveLocation(data.location[0])
    })
}

export default function HomeStackScreen() {

    let [location,setLocation] = React.useState(store.state.location)
    React.useEffect(() => {
        requestGeolocationPermission(getPostion)
    })

    return (
        <HomeStack.Navigator>
            {/* 首页 */}
            <HomeStack.Screen
                options={({navigation}) => ({
                title: location.name,
                headerStyle: {
                    backgroundColor: '#2B32B2'
                },
                headerTintColor: '#fff',
                headerLeft: () => (
                    <TouchableOpacity
                        style={{
                        paddingLeft: 10
                    }}
                        onPress={() => {
                        navigation.navigate('city_manage')
                    }}>
                        <Ionicons name='add' size={30} color={'#fff'}/>
                    </TouchableOpacity>
                )
            })}
                name="home"
                component={HomeScreen}/>
                 {/* 最近七天趋势 */}
            <HomeStack.Screen
                options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: '#fff'
            }}
                name="seven"
                component={SevenDayScreen}/> 
                {/* 城市管理 */}
            <HomeStack.Screen
                options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: '#fff'
            }}
                name="city_manage"
                component={CityManage}/> 
                {/* 某个城市 */}
            <HomeStack.Screen
                options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: '#fff'
            }}
                name="city"
                component={CityScreen}/>
                 {/* 搜索城市 */}
            <HomeStack.Screen
                options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000'
                },
                headerTintColor: '#fff'
            }}
                name="search"
                component={SearchScreen}/>
        </HomeStack.Navigator>
    );
}