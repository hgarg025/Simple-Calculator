import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Buttons from '../components/Buttons';

const homeScreen = () => {
 const [term,setTerm]=useState([]);
 
 return (
    <View style={styles.final}>
    <Text style={styles.ans} > {term} </Text>
    <View style={styles.rowbuttons}>
    <Buttons title="0" term={term} setTerm={setTerm} />
    <Buttons title="1" term={term} setTerm={setTerm}/>
    <Buttons title="2" term={term} setTerm={setTerm}/>
    <Buttons title="C" term={term} setTerm={setTerm}/>
    </View>
    <View style={styles.rowbuttons} >
    <Buttons title="3" term={term} setTerm={setTerm}/>
    <Buttons title="4" term={term} setTerm={setTerm}/>
    <Buttons title="5" term={term} setTerm={setTerm}/>
    <Buttons title="/" term={term} setTerm={setTerm}/>
    </View>
    <View style={styles.rowbuttons}>
    <Buttons title="6" term={term} setTerm={setTerm}/>
    <Buttons title="7" term={term} setTerm={setTerm}/>
    <Buttons title="8" term={term} setTerm={setTerm}/>
    <Buttons title="*" term={term} setTerm={setTerm}/>
    </View>
    <View style={styles.rowbuttons} >
    <Buttons title="9" term={term} setTerm={setTerm}/>
    <Buttons title="+" term={term} setTerm={setTerm}/>
    <Buttons title="-" term={term} setTerm={setTerm}/>
    <Buttons title="=" term={term} setTerm={setTerm}/>
    </View>
    </View>
 	);
}

const styles=StyleSheet.create({
	ans: {
        height: 100,
        fontSize: 60,
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'green',
        alignSelf: 'center',
        margin: 20
	},
    rowbuttons:{
        flexDirection: 'row',
        height:100,
        marginTop: 20,
        justifyContent : 'space-between',
        marginRight : 25
    },
    final:{
        backgroundColor: '#ffffff',
        height: 800   
    }
});

export default homeScreen;