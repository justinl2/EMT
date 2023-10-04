import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Screen5 = ({ navigation }) => {
    const [name, setName] = useState("");
    const [locationAwareness, setLocationAwareness] = useState("");
    const [dayAwareness, setDayAwareness] = useState("");

    return (
        <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
            <SafeAreaView style={styles.container}>

                <Button title="Go Back" onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Alert and Oriented Assessment</Text>

                <Text style={styles.text}>What is your name?</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="What is your name?"
                />

                <Text style={styles.text}>Do you know where you are?</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setLocationAwareness}
                    value={locationAwareness}
                    placeholder="Do you know where you are?"
                />
                <Text style={styles.text}>What day of the week is it today?</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setDayAwareness}
                    value={dayAwareness}
                    placeholder="What day of the week is it today?"
                />
            </SafeAreaView>
        </LinearGradient>
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

export default Screen5;
