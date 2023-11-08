import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, TextInput, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { setInhaler, setThinner, setSexual, setNarcotics } from '../../redux/features/text/drugSlice';

const DrugsMedications = ({ navigation }) => {

    const dispatch = useDispatch();

    const [localInhaler, setLocalInhaler] = useState('');
    const [localBloodThinners, setLocalBloodThinners] = useState('');
    const [localSexualEnhancement, setLocalSexualEnhancement] = useState('');
    const [localNarcotics, setLocalNarcotics] = useState('');

    const handleSetInhaler = (value) => {
        dispatch(setInhaler(value));
        setLocalInhaler(value);
    };

    const handleSetBloodThinners = (value) => {
        dispatch(setThinner(value));
        setLocalBloodThinners(value);
    };

    const handleSetSexualEnhancement = (value) => {
        dispatch(setSexual(value));
        setLocalSexualEnhancement(value);
    };

    const handleSetNarcotics = (value) => {
        dispatch(setNarcotics(value));
        setLocalNarcotics(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


                <SafeAreaView style={styles.container}>


                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <Text style={styles.title}> Drugs & Medications </Text>

                    <Text style={styles.text}>Inhaler</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Inhaler?"
                        placeholderTextColor="#888"
                        value={localInhaler}
                        onChangeText={handleSetInhaler}
                    />

                    <Text style={styles.text}>Blood thinners (Aspirin, warfarin, etc)?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Blood thinners (Aspirin, warfarin, etc)?"
                        placeholderTextColor="#888"
                        value={localBloodThinners}
                        onChangeText={handleSetBloodThinners}
                    />

                    <Text style={styles.text}>Sexual enhancement drugs in the last 24 hours?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sexual enhancement drugs in the last 24 hours?"
                        placeholderTextColor="#888"
                        value={localSexualEnhancement}
                        onChangeText={handleSetSexualEnhancement}
                    />

                    <Text style={styles.text}>Narcotics? (opioids, heroin, morphine, oxycontin etc)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Narcotics? (opioids, heroin, morphine, oxycontin etc)"
                        placeholderTextColor="#888"
                        value={localNarcotics}
                        onChangeText={handleSetNarcotics}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

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

});

export default DrugsMedications;
