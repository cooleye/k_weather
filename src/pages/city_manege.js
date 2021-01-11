import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import store from '../store'

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
        // borderWidth: 1,
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
    placeholder:{
        color:"#999",
        position:'absolute',
        top:8,
        left:40,
        width:200,
        fontSize:14
    },  
    cityList: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        display: 'flex'
    },
    scrollView: {},
    cityItem: {
        width: '100%',
        height: 100,
        borderRadius: 20,
        // backgroundColor: '#33f',
        marginTop: 10
    },
    cityPos: {
        fontSize: 20,
        position: 'absolute',
        left: 20,
        top: 15,
        color: "#fff"
    },
    cityAir: {
        fontSize: 14,
        position: 'absolute',
        left: 20,
        top: 50,
        color: "#fff"
    },
    cityTemp: {
        fontSize: 40,
        position: 'absolute',
        right: 20,
        top: 15,
        color: "#fff"
    }
})

export default class  extends React.Component {

    state = {
        list:[]
    }

    componentDidMount(){
        this.setState({
            list: store.state.cities
        })
    }

    render(){

        let {list} = this.state;
        let {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>城市管理</Text>
                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate("search")
                }}>
                    <View style={styles.searchBox}>
                        <View style={styles.searchIcon}>
                            <Ionicons name='search' size={18} color={'#999'}/>
                        </View>
                        <Text style={styles.placeholder}> 搜索全球天气 </Text>
                    </View>
                </TouchableOpacity>
    
                <View style={styles.cityList}>
                    <SafeAreaView>
                        <ScrollView style={styles.scrollView}>
                            {list.map(item => (
                                <TouchableOpacity 
                                    key={item.id}
                                    onPress={()=>{
                                        navigation.navigate("city")
                                    }}
                                >
                                <LinearGradient  style={styles.cityItem} colors={['#2B32B2', '#1488CC' ]} >
                                    <View >
                                <Text style={styles.cityPos}>{item.name}</Text>
                                <Text style={styles.cityAir}>{item.category} {item.maxTemp}℃~{item.minTemp}℃</Text>
                                        <Text style={styles.cityTemp}>{item.temp}℃</Text>
                                    </View>
                                </LinearGradient>
                                   
                                </TouchableOpacity>
    
                            ))
    }
                        </ScrollView>
                    </SafeAreaView>
    
                </View>
            </View>
    
        );
    }
    
}