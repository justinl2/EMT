import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, TextInput, StyleSheet, Button } from "react-native";

const DrugsMedications = ({ navigation }) => {
    const [inhaler, setInhaler] = useState('');
    const [bloodThinners, setBloodThinners] = useState('');
    const [sexualEnhancement, setSexualEnhancement] = useState('');
    const [narcotics, setNarcotics] = useState('');

    return(
        <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
            <SafeAreaView style={styles.container}>


            <Button title="Go Back" onPress={() => navigation.goBack()} />

            <Text style={styles.title}> Drugs & Medications </Text>
                
                <Text style={styles.text}>Inhaler</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Inhaler?"
                    placeholderTextColor="#888"
                    value={inhaler}
                    onChangeText={setInhaler}
                />

                <Text style={styles.text}>Blood thinners (Aspirin, warfarin, etc)?</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Blood thinners (Aspirin, warfarin, etc)?"
                    placeholderTextColor="#888"
                    value={bloodThinners}
                    onChangeText={setBloodThinners}
                />

                <Text style={styles.text}>Sexual enhancement drugs in the last 24 hours?</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Sexual enhancement drugs in the last 24 hours?"
                    placeholderTextColor="#888"
                    value={sexualEnhancement}
                    onChangeText={setSexualEnhancement}
                />

                <Text style={styles.text}>Narcotics? (opioids, heroin, morphine, oxycontin etc)</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Narcotics? (opioids, heroin, morphine, oxycontin etc)"
                    placeholderTextColor="#888"
                    value={narcotics}
                    onChangeText={setNarcotics}
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

export default DrugsMedications;
