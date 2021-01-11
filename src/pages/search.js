import * as React from 'react';
import {Text, View, StyleSheet, TextInput,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from '../store'

// 获取屏幕宽高
const windowWidth = Dimensions
    .get('window')
    .width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: "#fff",
        fontWeight: '100'
    },
    searchBox: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 20,
        display: 'flex',
        position: 'relative',
        paddingLeft: 40,
        paddingRight: 20,
        backgroundColor: '#333'
    },
    searchInput: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#fff'
    },
    searchIcon: {
        position: 'absolute',
        left: 15,
        top: 10
    },
    cityList:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    cityItem:{
        backgroundColor: '#333',
        borderRadius: 30,
        width:(windowWidth-70)/3,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:5
    },
    cityName:{
        color:"#fff",
        fontSize:12
    }
})

export default function SearchCityScreen() {

    const [value,
        onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            
            {/* 搜索框 */}
            <View style={styles.searchBox}>
                <View style={styles.searchIcon}>
                    <Ionicons name='search' size={18} color={'#999'}/>
                </View>
                <TextInput
                    style={styles.searchInput}
                    placeholder="搜索全球天气"
                    placeholderTextColor="#999"
                    onChangeText={text => onChangeText(text)}
                    value={value}/>
            </View>

            {/* 热门城市列表 */}
            <View>
                <Text>热门城市</Text>
                <View style={styles.cityList}>
                    <View style={styles.cityItem}><Text style={styles.cityName}>定位</Text></View>
                    {
                        store.state.hotCities.map(city =>(
                        <View key={city.id} style={styles.cityItem}><Text style={styles.cityName}>{city}</Text></View>
                        ))
                    }
                </View>
            </View>

        </View>
    );
}
