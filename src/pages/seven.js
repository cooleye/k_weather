import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView
} from 'react-native';

// 获取屏幕宽高
const windowWidth = Dimensions
    .get('window')
    .width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
        // padding:10
        // marginTop: 60
    },
    title:{
        fontSize:30,
        margin:20,
        color:"#fff"
    },  
    scrollView: {
        // backgroundColor: 'pink',
        height: 400
        // marginHorizontal: 20
    },
    dayItem:{
        width: windowWidth/5,
        borderRadius:10,
        height:'100%',
        // backgroundColor:'#333',
        textAlign:'center',
        // justifyContent:'center',
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
});
export default function SevenDayScreen() {

    let [list,setList] = React.useState([1,2,3,4,5,6,7])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>七天趋势预报</Text>
            
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
