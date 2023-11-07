import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    Text, SafeAreaView, TextInput, StyleSheet,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { setDiabetes, setBreathing, setSexual, setPregnant, setOther } from '../../redux/features/text/conditionSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";

const MedicalConditions = ({ navigation }) => {

    const conditionState = useSelector((state: RootState) => state.conditionSlice);

    const dispatch = useDispatch();

    const [localDiabetes, setLocalDiabetes] = useState('');
    const [localBreathing, setLocalBreathing] = useState('');
    const [localSexual, setLocalSexual] = useState('');
    const [localPregnant, setLocalPregnant] = useState('');
    const [localOther, setLocalOther] = useState('');

    const handleSetDiabetes = (value) => {
        dispatch(setDiabetes(value));
        setLocalDiabetes(value);
    };

    const handleSetBreathing = (value) => {
        dispatch(setBreathing(value));
        setLocalBreathing(value);
    };

    const handleSetSexual = (value) => {
        dispatch(setSexual(value));
        setLocalSexual(value);
    };

    const handleSetPregnant = (value) => {
        dispatch(setPregnant(value));
        setLocalPregnant(value);
    };

    const handleSetOther = (value) => {
        dispatch(setOther(value));
        setLocalOther(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#131624", "#f0ffff"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
      
                    <GoBack navigation={navigation} />

                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>

                        <Text style={styles.title}>Medical Conditions</Text>

                        <Text style={styles.text}>Diabetes</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Diabetes?"
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetDiabetes}
                        />

                        <Text style={styles.text}>Breathing conditions (asthma, COPD, etc)</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Breathing conditions?"
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(conditionState.breathing, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetBreathing}
                        />

                        <Text style={styles.text}>Sexually Active</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Sexually Active?"
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetSexual}
                        />

                        <Text style={styles.text}>Pregnant</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Pregnant?"
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetPregnant}
                        />

                        <Text style={styles.text}>Other:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Other condition?"
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(conditionState.other, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetOther}
                        />
                    </KeyboardAvoidingView>
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
        width: "80%",
        alignSelf: 'center'
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

export default MedicalConditions;
