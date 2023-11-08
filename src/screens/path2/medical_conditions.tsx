import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    Text, SafeAreaView, TextInput, StyleSheet, Button,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, View, TouchableOpacity,
    Image, ScrollView,
} from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { setDiabetes, setBreathing, setSexual, setPregnant, setOther } from '../../redux/features/text/conditionSlice';
import ButtonCard from "../../components/ButtonCard";
import Smallbutton from "../../components/SmallButton";
import alert from "../../../src/assets/alert.jpg";
import blackCheck from "../../../src/assets/black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import SmallButton from '../../components/SmallButton';
import pregnant from "../../../src/assets/pregnant.jpg";
import sex from "../../../src/assets/sex.jpg";
import diabetes from "../../../src/assets/diabetes.jpg";
import { RootState } from '../../redux/store';
import GoBack from "../../components/GoBack";

const MedicalConditions = ({ navigation }) => {

    const conditionState = useSelector((state: RootState) => state.conditionSlice);

    const dispatch = useDispatch();

    const [localDiabetes, setLocalDiabetes] = useState('');
    const [localBreathing, setLocalBreathing] = useState('');
    const [localSexual, setLocalSexual] = useState('');
    const [localPregnant, setLocalPregnant] = useState('');
    const [localOther, setLocalOther] = useState('');

    const handleSetDiabetes = (value) => {
        dispatch(setDiabetes(value));
        setLocalDiabetes(value);
    };

    const handleSetBreathing = (value) => {
        dispatch(setBreathing(value));
        setLocalBreathing(value);
    };

    const handleSetSexual = (value) => {
        dispatch(setSexual(value));
        setLocalSexual(value);
    };

    const handleSetPregnant = (value) => {
        dispatch(setPregnant(value));
        setLocalPregnant(value);
    };

    const handleSetOther = (value) => {
        dispatch(setOther(value));
        setLocalOther(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>

                    <GoBack navigation={navigation} />


                    <KeyboardAvoidingView behavior="padding">
                        <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">


                            <Button title="Go Back" onPress={() => navigation.goBack()} />

                            <Text style={styles.title}>Medical Conditions</Text>


                            <View style={styles.containerRow}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Diabetes</Text>
                                    <Image style={styles.imageBox} source={(diabetes)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="Yes" image={blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="No" image={xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Sexually Active</Text>
                                    <Image style={styles.imageBox} source={(sex)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="Yes" image={blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="No" image={xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.buttonSingle}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Pregnant</Text>
                                    <Image style={styles.imageBox} source={(pregnant)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="Yes" image={blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('')}>
                                            <SmallButton title="No" image={xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>

                            <Text style={styles.text}>Breathing conditions (asthma, COPD, etc)</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Breathing conditions?"
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(conditionState.breathing, null, 2).replaceAll('"', '')}
                                onChangeText={handleSetBreathing}
                            />

                            <Text style={styles.text}>Other:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Other condition?"
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(conditionState.other, null, 2).replaceAll('"', '')}
                                onChangeText={handleSetOther}
                            />

                        </ScrollView>

                    </KeyboardAvoidingView>
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
        letterSpacing: 1,
    },
    imageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonSingle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "center",
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonContainer: {
        marginRight: 15,
        marginLeft: 15,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    imageBox: {
        width: 140,
        height: 140,
        alignSelf: "center",
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    }
});

export default MedicalConditions;
