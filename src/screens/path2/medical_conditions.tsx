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
import pressedBlackCheck from "../../../src/assets/pressed-black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import pressedXmark from "../../../src/assets/pressed-x-mark.jpg";
import SmallButton from '../../components/SmallButton';
import pregnant from "../../../src/assets/pregnant.jpg";
import sex from "../../../src/assets/sex.jpg";
import diabetes from "../../../src/assets/diabetes.jpg";
import { RootState } from '../../redux/store';
import GoBack from "../../components/GoBack";

const MedicalConditions = ({ navigation }) => {

    const conditionState = useSelector((state: RootState) => state.conditionSlice);

    const dispatch = useDispatch();

    const [isDiabetesYesPressed, setIsDiabetesYesPressed] = useState(JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '') === "y");
    const [isDiabetesNoPressed, setIsDiabetesNoPressed] = useState(JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '') === "n");

    const [isSexualYesPressed, setIsSexualYesPressed] = useState(JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '') === "y");
    const [isSexualNoPressed, setIsSexualNoPressed] = useState(JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '') === "n");

    const [isPregnantYesPressed, setIsPregnantYesPressed] = useState(JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '') === "y");
    const [isPregnantNoPressed, setIsPregnantNoPressed] = useState(JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '') === "n");

    const handleSetDiabetes = (value) => {
        if (value === "y") {
            setIsDiabetesYesPressed((prev) => !prev);
            isDiabetesYesPressed ? (value = "") : null;
            setIsDiabetesNoPressed(false)
        }
        else if (value === "n") {
            setIsDiabetesNoPressed((prev) => !prev);
            isDiabetesNoPressed ? (value = "") : null;
            setIsDiabetesYesPressed(false)
        }
        dispatch(setDiabetes(value));
    };
    const handleSetSexual = (value) => {
        if (value === "y") {
            setIsSexualYesPressed((prev) => !prev);
            isSexualYesPressed ? (value = "") : null;
            setIsSexualNoPressed(false)
        }
        else if (value === "n") {
            setIsSexualNoPressed((prev) => !prev);
            isSexualNoPressed ? (value = "") : null;
            setIsSexualYesPressed(false)
        }
        dispatch(setSexual(value));
    };
    const handleSetPregnant = (value) => {
        if (value === "y") {
            setIsPregnantYesPressed((prev) => !prev);
            isPregnantYesPressed ? (value = "") : null;
            setIsPregnantNoPressed(false)
        }
        else if (value === "n") {
            setIsPregnantNoPressed((prev) => !prev);
            isPregnantNoPressed ? (value = "") : null;
            setIsPregnantYesPressed(false)
        }
        dispatch(setPregnant(value));
    };
    const handleSetBreathing = (value) => dispatch(setBreathing(value));
    const handleSetOther = (value) => dispatch(setOther(value));

    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="padding">
                <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <SafeAreaView style={styles.container}>

                            <GoBack navigation={navigation} />

                            <Text style={styles.title}>Medical Conditions</Text>

                            <View style={styles.containerRow}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Diabetes</Text>
                                    <Image style={styles.imageBox} source={(diabetes)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetDiabetes("y")}>
                                            <SmallButton title="Yes" image={isDiabetesYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetDiabetes("n")}>
                                            <SmallButton title="No" image={isDiabetesNoPressed ? pressedXmark : xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Sexually Active</Text>
                                    <Image style={styles.imageBox} source={(sex)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetSexual("y")}>
                                            <SmallButton title="Yes" image={isSexualYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetSexual("n")}>
                                            <SmallButton title="No" image={isSexualNoPressed ? pressedXmark : xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.buttonSingle}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>Pregnant</Text>
                                    <Image style={styles.imageBox} source={(pregnant)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetPregnant("y")}>
                                            <SmallButton title="Yes" image={isPregnantYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetPregnant("n")}>
                                            <SmallButton title="No" image={isPregnantNoPressed ? pressedXmark : xmark} ></SmallButton>
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

                        </SafeAreaView>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 100,
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
