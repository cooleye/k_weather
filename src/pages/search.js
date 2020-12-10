import * as React from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    }
})

export default function SearchCityScreen() {

    const [value,
        onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
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

        </View>
    );
}
