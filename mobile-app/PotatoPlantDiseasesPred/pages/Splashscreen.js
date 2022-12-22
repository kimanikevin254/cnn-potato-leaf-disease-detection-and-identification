import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Splashscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.img}>
            <Image source={require('../assets/img/scrn1.png')} />
        </View>

        <View style={styles.msg}>
            <Text style={styles.msg1}>Welcome!</Text>
            <Text style={styles.msg2}>Glad to have you here. Let us help you save your potato plants.</Text>
        </View>

        <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Instructions')}>
                <Text style={{color: 'white', fontSize: 20, fontFamily: 'Roboto-Medium'}}>SHOW ME HOW</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        fontFamily: 'Roboto',
        padding: 20
    },
    img: {
        alignSelf: 'center',
        marginTop: -80
    },
    msg: {
        marginTop: -100
    },
    msg1: {
        fontSize: 40,
        fontWeight: '600',
        color: 'green',
        fontFamily: 'Roboto-Medium'
    },
    msg2: {
        fontSize: 20,
        color: 'black',
        marginTop: 10,
        fontFamily: 'Roboto-Medium'
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8
    }
})

export default Splashscreen