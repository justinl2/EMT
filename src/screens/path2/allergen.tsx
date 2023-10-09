import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const Allergen = ({ navigation }) => {

    const [food, setFood] = useState("");
    const [medication, setMedication] = useState("");
    const [environmental, setEnvironmental] = useState("");
    const [other, setOther] = useState("");
 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
                <SafeAreaView style={styles.container}>

                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <Text style={styles.title}>Allergies</Text>

                    <Text style={styles.text}>Foods</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setFood}
                        value={food}
                        placeholder="Foods"
                    />

                    <Text style={styles.text}>Medications</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setMedication}
                        value={medication}
                        placeholder="Medications"
                    />
                    <Text style={styles.text}>Environmental</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setEnvironmental}
                        value={environmental}
                        placeholder="Environmental"
                    />
                
                    <Text style={styles.text}>Other</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={setOther}
                        value={other}
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