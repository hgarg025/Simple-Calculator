import React, {useState} from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const button = ({title,term,setTerm}) => {


	var answer= () => {

     return 'ANSWER';

 }; 

	const calc= () => {
		if(title=='C')
		{
			setTerm('');
		}
		else if (title=='=') 
		{   
            setTerm(answer());
		}
		else
		setTerm(term => term.concat(title))
	}
 return (
    <View>
    <TouchableOpacity onPress= {()=> calc()} >
    <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
    </View>
 	);
};

const styles=StyleSheet.create({
	button: {
		fontSize: 50,
		color : 'white',
        marginBottom: 20,
        marginLeft: 25,
        padding : 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'orange',
        borderColor : 'green',
        textAlign : 'center'
			}
});

export default button;