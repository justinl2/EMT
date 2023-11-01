import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from 'react-redux';
import { setFood, setMedication, setEnvironment, setOther } from '../../redux/features/text/allergiesSlice';
import { RootState } from '../../redux/store';

const Allergen = ({ navigation }) => {

    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);

    const dispatch = useDispatch();

    const [food, setLocalFood] = useState("");
    const [medication, setLocalMedication] = useState("");
    const [environmental, setLocalEnvironmental] = useState("");
    const [other, setLocalOther] = useState("");

    const handleSetFood = (value) => {
        dispatch(setFood(value));
        setLocalFood(value);
    };

    const handleSetMedication = (value) => {
        dispatch(setMedication(value));
        setLocalMedication(value);
    };

    const handleSetEnvironmental = (value) => {
        dispatch(setEnvironment(value));
        setLocalEnvironmental(value);
    };

    const handleSetOther = (value) => {
        dispatch(setOther(value));
        setLocalOther(value);
    };
 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
                <SafeAreaView style={styles.container}>

                    <Button title="Go Back" onPress={() => navigation.goBack()} />

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