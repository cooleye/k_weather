import * as React from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 获取屏幕宽高
const windowWidth = Dimensions
    .get('window')
    .width;
// const windowHeight = Dimensions.get('window').height;

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
    scrollView: {
        height: 400,
        marginTop:40
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
        fontSize:12,
        color:"#fff"
    },
    t3:{
        fontSize:14,
        color:"#fff",
        marginTop:20
    }
})

export default function CityScreen() {

    let [list,setList] = React.useState([1,2,3,4,5,6,7])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>上海市</Text>

            <SafeAreaView >
                <ScrollView style={styles.scrollView} horizontal={true}>
                   {list.map(item =>(
                       <View style={styles.dayItem} key={item}>
                            <Text style={styles.t1}>昨天</Text>
                            <Text style={styles.t2}>12月7日</Text>
                            <Text style={styles.t3}>☁️</Text>
                            <Text style={styles.t3}>12℃</Text>
                            <Text style={styles.t3}>8℃</Text>
                            <Text style={styles.t3}>☁️</Text>
                            <Text style={styles.t3}>阴天</Text>
                            <Text style={styles.t3}>🌪5级</Text>
                        </View>
                   ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
