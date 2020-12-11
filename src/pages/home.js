import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import store from '../store'
// 渐变颜色
import LinearGradient from 'react-native-linear-gradient';
import {weather, air, threeDay} from '../api'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerBox: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:'red',
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
        fontSize: 130,
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
        fontSize: 12
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
        now: {},
        air: {},
        threeDay: []
    }

    componentDidMount() {
        this.getWeather()
    }

    // 获取本地天气
    getWeather() {

        // 获取天气之前，判断如果上次上次获取时间超过1个小时，则重新获取 if (store.state.now.updateTime) {     let now
        // = new Date().getTime()     let last = new
        // Date(store.state.now.updateTime).getTime()     let rate = (now - last) / 1000
        //     if (rate > 10) {         this.requestWeatherData()     } } else {
        // this.requestWeatherData() }

        this.requestWeatherData()

        this.requestAirData()

        this.requestThreeDay()

    }
    // 请求实时天气数据
    requestWeatherData() {
        // let pos = store.state.position;
        fetch(weather())
            .then(res => res.json())
            .then(data => {
                console.log(data)
                store.saveNow(data)
                this.setState({now: data.now})
            })
    }

    // 请求空气质量数据
    requestAirData() {
        fetch(air())
            .then(res => res.json())
            .then(data => {
                console.log(data)
                store.saveAir(data)
                this.setState({air: data.now})
            })
    }

    // 请求未来三天天气数据
    requestThreeDay() {
        fetch(threeDay())
            .then(res => res.json())
            .then(data => {
                store.saveThreeDay(data.daily)
                this.setState({threeDay: data.daily})
            })
    }

    render() {

        let {navigation} = this.props
        // 今日天气
        let {temp, text} = this.state.now
        // 空气指数
        let {aqi, category, pm2p5} = this.state.air
        // 未来三天天气数据
        let {threeDay} = this.state
        return (
            <LinearGradient style={styles.container} colors={['#2B32B2', '#1488CC']}>

                <View style={styles.centerBox}>
                    <Text style={styles.tempSymbol}>℃</Text>
                    <Text style={styles.tempNum}>{temp}</Text>
                    <Text style={styles.tempText}>{text}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.col_l}>
                            <Text style={styles.colText}>☘️质量:{aqi}{category}
                            </Text>
                        </View>
                        <View style={styles.col_r}>
                            <Text style={styles.colText}>🌫 PM2.5: {pm2p5}</Text>
                        </View>
                    </View>

                    {
                        threeDay.map(item => (
                            <View key={item.fxDate} style={styles.row}>
                                <View style={styles.col_l}>
                                    <Text style={styles.colText}>☁ 今天·{item.textNight}</Text>
                                </View>
                                <View style={styles.col_r}>
                                    <Text style={styles.colText}>{item.tempMax}℃ / {item.tempMin}℃</Text>
                                </View>
                            </View>
                        ))
                    }

                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('seven')}>
                    <Text
                        style={{
                        color: '#fff',
                        fontSize: 20
                    }}>查看近7日天气</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}