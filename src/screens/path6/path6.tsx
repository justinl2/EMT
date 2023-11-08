import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import ButtonCard from "../../components/ButtonCard";
import alert from '../../../src/assets/alert.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { setConcern } from '../../redux/features/text/assistSlice';

const Screen6 = ({ navigation }) => {

    const dispatch = useDispatch();
    const [localConcern, setLocalConcern] = useState("");
    const handleSetConcern = (value) => {
        dispatch(setConcern(value));
        setLocalConcern(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


                <SafeAreaView>

                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Alert_Screen')}>
                        <ButtonCard title="Alert & Oriented Assessment" image={alert} />
                    </TouchableOpacity>

                    <View style={styles.spacing}>
                        <Text style={styles.title}>For the EMT: communicate your concern to your patient</Text>

                        <TextInput
                            style={styles.inputField}
                            placeholder="Type your message here..."
                            placeholderTextColor="#888"
                            value={localConcern}
                            onChangeText={handleSetConcern}
                        />

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.choiceButton} onPress={() => { }}>
                                <Text style={styles.buttonText}>I understand, but do NOT help me or take me to the hospital.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.choiceButton} onPress={() => { }}>
                                <Text style={styles.buttonText}>Please help me, but do NOT take me to the hospital</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.choiceButton} onPress={() => { }}>
                                <Text style={styles.buttonText}>Please help me and take me to the hospital</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Screen6;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    subText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    choiceButton: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
    },
    buttonContainer: {
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        height: 40,
        backgroundColor: '#FFFFFF',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'black',
        marginBottom: 10,
    },
    spacing: {
        marginTop: 75
    }

});
