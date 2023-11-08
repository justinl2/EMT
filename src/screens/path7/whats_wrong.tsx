import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import ButtonCard from "../../components/ButtonCard";
import mental from '../../../src/assets/mental.png';
import injury from '../../../src/assets/injury.jpg';

import GoBack from "../../components/GoBack";

const WhatsWrong = ({ navigation }) => {
    return (
        <LinearGradient colors={["#131624", "#f0ffff"]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
            <GoBack navigation={navigation} />
            <Text style={styles.title}>What's Wrong?</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Illness_Injury_Screen')}>
                        <ButtonCard title="Illness/Injury" image={injury}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Mental_Health_Screen')}>
                        <ButtonCard title="Mental Health" image={mental}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default WhatsWrong;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center', 
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
        flexDirection: 'row',
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
});



