import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Button, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';

import ButtonCard from "../../components/ButtonCard";


import pill from '../../../src/assets/pill.jpg';
import clipboard from '../../../src/assets/clipboard.jpg'
import pain from '../../../src/assets/pain.jpg'
import check from '../../../src/assets/check.jpg'
import alert from '../../../src/assets/alert.jpg';
import assist from '../../../src/assets/assist.jpg'


const Pain = ({ navigation }) => {

    const [when, setWhen] = useState("");
    const [better, setBetter] = useState("");

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            
            <SafeAreaView >
                <Button title="Go Back" onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Pain</Text>



                <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Feel_Screen')}>
                    <ButtonCard title="What does it feel like?" image={pill} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('How_Bad_Screen')}>
                    <ButtonCard title="How Bad?" image={clipboard} />
                </TouchableOpacity>
                </View>


                <Text style={styles.text}>When did it start?</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setWhen}
                    value={when}
                    placeholder="When did it start?"
                />

                <Text style={styles.text}>What makes the pain better or worse?</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setBetter}
                    value={better}
                    placeholder="What makes the pain better or worse?"
                />






            </SafeAreaView>
        </LinearGradient>
    );
}

export default Pain;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -50,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5, 
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
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
  });



  