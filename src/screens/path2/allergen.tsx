import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from 'react-redux';
import { setFood, setMedication, setEnvironment, setOther, clearAll } from '../../redux/features/text/allergiesSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";

const Allergen = ({ navigation }) => {

    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);

    const dispatch = useDispatch();

    const handleSetFood = (value) => dispatch(setFood(value));
    const handleSetMedication = (value) => dispatch(setMedication(value));
    const handleSetEnvironmental = (value) => dispatch(setEnvironment(value));
    const handleSetOther = (value) => dispatch(setOther(value));

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>

                <SafeAreaView style={styles.container}>

                    <GoBack navigation={navigation} />

                    <ClearButton clearAllFunc={clearAll} />

                    <Text style={styles.title}>Allergies</Text>

                    <Text style={styles.text}>Foods</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetFood}
                        defaultValue={JSON.stringify(allergiesState.foods, null, 2).replaceAll('"', '')}
                        placeholder="Foods"
                    />

                    <Text style={styles.text}>Medications</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetMedication}
                        defaultValue={JSON.stringify(allergiesState.medications, null, 2).replaceAll('"', '')}
                        placeholder="Medications"
                    />
                    <Text style={styles.text}>Environmental</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetEnvironmental}
                        defaultValue={JSON.stringify(allergiesState.environmental, null, 2).replaceAll('"', '')}
                        placeholder="Environmental"
                    />

                    <Text style={styles.text}>Other</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetOther}
                        defaultValue={JSON.stringify(allergiesState.other, null, 2).replaceAll('"', '')}
                        placeholder="Other"
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Allergen;


const styles = StyleSheet.create({
    container: {
        padding: 20,
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
        marginTop: 10,
        width: "80%",
        alignSelf: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
});