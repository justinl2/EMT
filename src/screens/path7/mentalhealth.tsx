import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import ButtonCard from "../../components/ButtonCard";
import alert from '../../../src/assets/alert.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { setMental } from "../../redux/features/text/mentalSlice";
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";

const MentalHealth = ({ navigation }) => {

    const mentalState = useSelector((state: RootState) => state.mentalSlice);

    const dispatch = useDispatch();

    const handleInputChange = (value) => dispatch(setMental(value));

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <GoBack navigation={navigation} />
                    <Text style={styles.title}>Mental Health</Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Alert_Screen')}>
                            <ButtonCard title="Alert & Oriented Assessment" image={alert} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>What's Wrong?</Text>

                    <TextInput
                        style={styles.inputField}
                        placeholder="Type your message here..."
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(mentalState.mental, null, 2).replaceAll('"', '')}
                        onChangeText={handleInputChange}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default MentalHealth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#333333',
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
    buttonRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonContainer: {
        marginRight: 15,
        marginLeft: 15
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputField: {
        height: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'black',
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
});



