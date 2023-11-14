import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';

import { useDispatch, useSelector } from 'react-redux';
import { setName, setWhere, setWeekday, clearAll } from '../../redux/features/text/assessmentSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";

const Screen5 = ({ navigation }) => {

    const assessmentState = useSelector((state: RootState) => state.assessmentSlice);

    const dispatch = useDispatch();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


                <SafeAreaView style={styles.container}>

                    <GoBack navigation={navigation} />

                    <ClearButton clearAllFunc={clearAll} />

                    <Text style={styles.title}>Alert and Oriented Assessment</Text>

                    <Text style={styles.text}>What is your name?</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            dispatch(setName(text));
                        }}
                        defaultValue={JSON.stringify(assessmentState.name, null, 2).replaceAll('"', '')}
                        placeholder="What is your name?"
                    />

                    <Text style={styles.text}>Do you know where you are?</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            dispatch(setWhere(text));
                        }}
                        defaultValue={JSON.stringify(assessmentState.where, null, 2).replaceAll('"', '')}
                        placeholder="Do you know where you are?"
                    />
                    <Text style={styles.text}>What day of the week is it today?</Text>

                    <RNPickerSelect
                        onValueChange={(value) => {
                            dispatch(setWeekday(value))
                        }}
                        items={[
                            { label: 'Monday', value: 'Monday' },
                            { label: 'Tuesday', value: 'Tuesday' },
                            { label: 'Wednesday', value: 'Wednesday' },
                            { label: 'Thursday', value: 'Thursday' },
                            { label: 'Friday', value: 'Friday' },
                            { label: 'Saturday', value: 'Saturday' },
                            { label: 'Sunday', value: 'Sunday' },
                        ]}
                        style={pickerSelectStyles}
                        value={JSON.stringify(assessmentState.weekday, null, 2).replaceAll('"', '')}
                        placeholder={{ label: 'Day', value: null }}
                    />
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
        width: "80%",
        alignSelf: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
        letterSpacing: 1,
    },

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
});

export default Screen5;
