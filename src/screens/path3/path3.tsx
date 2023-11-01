import {
    Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Button, TextInput,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';

import ButtonCard from "../../components/ButtonCard";


import pill from '../../../src/assets/pill.jpg';
import clipboard from '../../../src/assets/clipboard.jpg'
import pain from '../../../src/assets/pain.jpg'
import check from '../../../src/assets/check.jpg'
import alert from '../../../src/assets/alert.jpg';
import assist from '../../../src/assets/assist.jpg'

import { useDispatch, useSelector } from 'react-redux';
import { setWhen, setBetter, setWhere } from '../../redux/features/text/painSlice';
import { RootState } from '../../redux/store';

const Pain = ({ navigation }) => {

    const painState = useSelector((state: RootState) => state.painSlice); 

    const dispatch = useDispatch();

    const [localWhen, setLocalWhen] = useState("");
    const [localBetter, setLocalBetter] = useState("");
    const [localWhere, setLocalWhere] = useState("");

    const handleSetWhen = (value) => {
        dispatch(setWhen(value));
        setLocalWhen(value);
    };

    const handleSetBetter = (value) => {
        dispatch(setBetter(value));
        setLocalBetter(value);
    };

    const handleSetWhere = (value) => {
        dispatch(setWhere(value));
        setLocalWhere(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            
                <SafeAreaView >
                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
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
                            onChangeText={handleSetWhen}
                            defaultValue={JSON.stringify(painState.when, null, 2).replaceAll('"', '')}
                            placeholder="When did it start?"
                        />

                        <Text style={styles.text}>What makes the pain better or worse?</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleSetBetter}
                            defaultValue={JSON.stringify(painState.better, null, 2).replaceAll('"', '')}
                            placeholder="What makes the pain better or worse?"
                        />

                        <Text style={styles.text}>Does the pain move to other parts of your body?</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleSetWhere}
                            defaultValue={JSON.stringify(painState.where, null, 2).replaceAll('"', '')}
                            placeholder="Does the pain move to other parts of your body?"
                        />
                    </KeyboardAvoidingView>

                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
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



  