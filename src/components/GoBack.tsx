import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const GoBack = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" style={styles.back} size={40} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    back: {
        alignSelf: 'center',
        color: 'black',
    },
    button: {
        width: 80,
        height: 35,
        alignSelf: 'flex-start',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 16,
    },
});

export default GoBack;