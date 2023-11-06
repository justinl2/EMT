import { Text, SafeAreaView, StyleSheet, Switch, Button, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setResuscitate, setIntubate } from '../../redux/features/text/directivesSlice';

const Screen1 = ({ navigation }) => {

    const dispatch = useDispatch();

    const [localResuscitate, setLocalResuscitate] = useState(false);
    const [localIntubate, setLocalIntubate] = useState(false);

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>

                <Button title="Go Back" onPress={() => navigation.goBack()} />

                <Text style={styles.title}>Advanced Medical Directives</Text>

                <View style={styles.switchContainer}>
                    <Text style={styles.text}>Do you have a POLST: Physician's Orders for Life-Sustaining Treatment</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={localResuscitate ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(text) => {
                            setLocalResuscitate(text);
                            dispatch(setResuscitate(text));
                        }}
                        value={localResuscitate}
                    />

                    <Text style={styles.text}>Do Not Resuscitate / Intubate</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={localIntubate ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(text) => {
                            setLocalIntubate(text);
                            dispatch(setIntubate(text));
                        }}
                        value={localIntubate}
                    />
                </View>

            </SafeAreaView>
        </LinearGradient>
    );
}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    switchContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});
