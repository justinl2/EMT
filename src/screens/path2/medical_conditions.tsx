import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    Text, SafeAreaView, TextInput, StyleSheet, Button,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from "react-native";

const MedicalConditions = ({ navigation }) => {
    const [otherCondition, setOtherCondition] = useState('');
    const [diabetes, setDiabetes] = useState('');
    const [breathingCondition, setBreathingCondition] = useState('');
    const [sexuallyActive, setSexuallyActive] = useState('');
    const [pregnant, setPregnant] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
      
                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>

                        <Text style={styles.title}>Medical Conditions</Text>

                        <Text style={styles.text}>Diabetes</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Diabetes?"
                            placeholderTextColor="#888"
                            value={diabetes}
                            onChangeText={setDiabetes}
                        />

                        <Text style={styles.text}>Breathing conditions (asthma, COPD, etc)</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Breathing conditions?"
                            placeholderTextColor="#888"
                            value={breathingCondition}
                            onChangeText={setBreathingCondition}
                        />

                        <Text style={styles.text}>Sexually Active</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Sexually Active?"
                            placeholderTextColor="#888"
                            value={sexuallyActive}
                            onChangeText={setSexuallyActive}
                        />

                        <Text style={styles.text}>Pregnant</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Pregnant?"
                            placeholderTextColor="#888"
                            value={pregnant}
                            onChangeText={setPregnant}
                        />

                        <Text style={styles.text}>Other:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Other condition?"
                            placeholderTextColor="#888"
                            value={otherCondition}
                            onChangeText={setOtherCondition}
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
