import * as React from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';

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
        backgroundColor: '#33f',
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

export default function CityManageScreen({navigation}) {

    const [list,
        setList] = React.useState([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ]);

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
                                key={item}
                                onPress={()=>{
                                    navigation.navigate("city")
                                }}
                            >
                                <View style={styles.cityItem}>
                                    <Text style={styles.cityPos}>景兴录</Text>
                                    <Text style={styles.cityAir}>空气良 11℃~7℃</Text>
                                    <Text style={styles.cityTemp}>9℃</Text>
                                </View>
                            </TouchableOpacity>

                        ))
}
                    </ScrollView>
                </SafeAreaView>

            </View>
        </View>

    );
}

// const CityManageStack = createStackNavigator(); export default function
// CityManageStackScreen() {     return (         <CityManageStack.Navigator>
//          <CityManageStack.Screen                 options={{title: '111'}}
//             name="city_manage"                 component={CityManageScreen}/>
//         </CityManageStack.Navigator>     ); }