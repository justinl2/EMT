import React, { useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { setHow, clearAll } from '../../redux/features/text/painBadSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";

const HowBad = ({ navigation }) => {

    const painBadState = useSelector((state: RootState) => state.painBadSlice);

    const dispatch = useDispatch();

    const handleSetHow = (value) => dispatch(setHow(value));

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>

                    <GoBack navigation={navigation} />
                    <ClearButton clearAllFunc={clearAll} />
                <Text style={styles.title}>How Bad Does It Hurt?</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Mild</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Moderate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>Severe</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.otherLabel}>Other:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Text Here"
                        defaultValue={JSON.stringify(painBadState.how, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetHow}
                    />
                </View>

            </SafeAreaView>
        </LinearGradient>
    </TouchableWithoutFeedback>
    );
};

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
        width: 100, // Adjusted width to accommodate all three buttons in one row
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,  // Added some margin to separate buttons
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textInputContainer: {
        marginTop: 20,
        width: '80%',
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white',
        color: 'black',
    },
    otherLabel: {
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
});

export default HowBad;
