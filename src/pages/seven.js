import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native';

import store from '../store'
import {sevenDay} from '../api'
// 获取屏幕宽高
const windowWidth = Dimensions
    .get('window')
    .width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    title:{
        fontSize:30,
        margin:20,
        color:"#fff"
    },  
    scrollView: {
        height: 400
    },
    dayItem:{
        width: windowWidth/5,
        borderRadius:10,
        height:'100%',
        textAlign:'center',
        alignItems:'center'
    },
    t1:{
        fontSize:18,
        color:"#fff"
    },
    t2:{
        fontSize:8,
        color:"#fff"
    },
    t3:{
        fontSize:14,
        color:"#fff",
        marginTop:20
    }
});

export default class SevenDayScreen extends React.Component{

    state = {
        list:[1,2,3,4,,5,6,7]
    }

    componentDidMount(){
        this.requestSevenDay()
    }

    requestSevenDay(){
        fetch(sevenDay())
        .then(res => res.json())
        .then(data => {
            this.setState({
                list: data.daily
            })
        })
    }

    getWeekText(index){
        let weeks = ['日','一','二','三','四','五','六']
        return weeks[index];
    }
    
    render(){

        let { list } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>七天趋势预报</Text>
                
                <SafeAreaView >
                    <ScrollView style={styles.scrollView} horizontal={true}>
                       {list.map(item =>(
                           <View style={styles.dayItem} key={item.fxDate}>
                                <Text style={styles.t1}>{ '周' +  this.getWeekText(new Date(`${item.fxDate}`).getDay()) }</Text>
                                <Text style={styles.t2}>{item.fxDate}</Text>
                                <Text style={styles.t3}>☁️</Text>
                                <Text style={styles.t3}>{item.tempMax}℃</Text>
                                <Text style={styles.t3}>{item.tempMin}℃</Text>
                                <Text style={styles.t3}>☁️</Text>
                                <Text style={styles.t3}>{item.textDay}</Text>
                                <Text style={styles.t3}>🌪 {item.windDirDay}</Text>
                            </View>
                       ))}
                    </ScrollView>
                </SafeAreaView>
    
            </View>
        );
    }
    
}
