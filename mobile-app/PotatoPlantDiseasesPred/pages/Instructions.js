import { View, Text, Image, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const DATA = [
    {
      id: '1',
      title: 'Capture/Upload a potato leaf image.',
    },
    {
      id: '2',
      title: 'Press the "Predict" button.',
    },
    {
      id: '3',
      title: 'Get the results.',
    },
  ];

  const Item = ({ title, id }) => (
    <View style={styles.item}>
        <View style={styles.instrInd}>
            <View style={styles.indNoCont}><Text style={styles.indNo}>{id}</Text></View>
            <Text style={styles.indText}>{title}</Text>
        </View>
    </View>
  );

const Instructions = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} />
      );
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../assets/img/scrn2.png')} style={styles.img} />
        <View style={styles.topRight}>
            <Text style={styles.topText}>Diagnose your</Text>
            <Text style={styles.topText}>potato plants</Text>
        </View>
      </View>

      <View style={styles.instrCont}>
        <Text style={styles.instrHeader}>In just 3 simple steps:</Text>
        <View style={styles.flatlist}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
      </View>

      <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('Mainscreen')}>
              <Text style={{color: 'white', fontSize: 20, fontFamily: 'Roboto-Medium'}}>GET STARTED</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 20
    }, 
    top: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        flex: 3,
        width: 160,
        height: 160,
        resizeMode: 'contain',
        marginRight: 10
    },
    topRight: {
        borderLeftColor: 'grey',
        borderLeftWidth: StyleSheet.hairlineWidth
    },
    topText: {
        fontSize: 35,
        fontWeight: '600',
        color: 'green',
        marginTop: 10,
        marginLeft: 20,
        fontFamily: 'Roboto-Medium'
    }, 
    instrCont:{
        marginTop: 25
    },
    instrHeader: {
        fontSize: 20,
        color: '#474a49',
        fontFamily: 'Roboto-Medium'
    },
    instrInd: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    flatlist:{
        marginLeft: 10
    },
    indNo: {
        color: 'green'
    },
    indNoCont: {
        borderColor: 'green',
        borderWidth: 2,
        padding: 4,
        height: 35,
        width: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        fontFamily: 'Roboto-Medium'
    },
    indText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'Roboto-Medium'
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 8
    }
})

export default Instructions