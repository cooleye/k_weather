import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import store from '../store'
// 渐变颜色
import LinearGradient from 'react-native-linear-gradient';
import {weather} from '../api'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerBox: {
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 40
    },
    col_l: {
        flex: 1,
        height: 50,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    col_r: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    colText: {
        color: '#fff',
        fontSize: 13
    },
    checkMore: {
        position: 'absolute',
        bottom: 0
    },
    button: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        width: 300,
        height: 50,
        color: '#fff',
        padding: 10,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})

export default class HomeScreen extends React.Component {

    state = {
        now: {}
    }

    componentDidMount() {
        this.getWeather()
    }

    // 获取本地天气
    getWeather() {

        // 获取天气之前，判断如果上次上次获取时间超过1个小时，则重新获取
        // if (store.state.now.updateTime) {
        //     let now = new Date().getTime()
        //     let last = new Date(store.state.now.updateTime).getTime()
        //     let rate = (now - last) / 1000
        //     if (rate > 10) {
        //         this.requestWeatherData()
        //     }
        // } else {
        //     this.requestWeatherData()
        // }
        this.requestWeatherData()
    }

    requestWeatherData() {
        let pos = store.state.position;
        // fetch('../mock/now.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         store.saveNow(data)
        //         this.setState({
        //             now: data
        //         })
        //     })
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#2B32B2', '#1488CC']}>

                <View style={styles.centerBox}>
                    <Text style={styles.tempSymbol}>℃</Text>
                    <Text style={styles.tempNum}>9</Text>
                    <Text style={styles.tempText}>阴</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.col_l}>
                            <Text style={styles.colText}>☘️ 空气76</Text>
                        </View>
                        <View style={styles.col_r}>
                            <Text style={styles.colText}>💧 降水概率 0%</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.col_l}>
                            <Text style={styles.colText}>☁ 今天·阴</Text>
                        </View>
                        <View style={styles.col_r}>
                            <Text style={styles.colText}>11℃ / 9℃</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('seven')}>
                    <Text
                        style={{
                        color: '#fff',
                        fontSize: 20
                    }}>查看近七日天气</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}