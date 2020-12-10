import React from 'react'
import {Alert} from 'react-native'
function sucessHandler(position) {
    return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
}
function errorHandler(error) {
    let str = ''
    switch (error.code) {
        case error.PERMISSION_DENIED:
            str = "用户拒绝对获取地理位置的请求。";
            break;
        case error.POSITION_UNAVAILABLE:
            str = "位置信息是不可用的。";
            break;
        case error.TIMEOUT:
            str = "请求用户地理位置超时。";
            break;
        case error.UNKNOWN_ERROR:
            str = "未知错误。";
            break;
    }
    return str;
}

/* 获取某地经纬度 */  
export function getLocation(sucessHandler,errorHandler) {
    if (navigator.geolocation) {
        navigator
            .geolocation
            .getCurrentPosition(sucessHandler,errorHandler);
    } else {
        console.log('设备不支持定位(⊙︿⊙)')
        Alert.alert(
            "Alert Title",
            `设备不支持定位(⊙︿⊙)`
          );
    }
}

export function getWeather(poistion,setList){
    fetch(weather + poistion).then((res) => {
        return res.json()
    }).then(data => {
        console.log(data)
        setList(data)
    })
}

