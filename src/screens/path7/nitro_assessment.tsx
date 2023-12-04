import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import ButtonCard from "../../components/ButtonCard";
import bloodthinner from "../../../src/assets/bloodthinner.jpg";
import pill from '../../../src/assets/pill.jpg';
import blackCheck from "../../../src/assets/black-check.jpg";
import pressedBlackCheck from "../../../src/assets/pressed-black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import pressedXmark from "../../../src/assets/pressed-x-mark.jpg";
import SmallButton from '../../components/SmallButton';
import { Ionicons } from '@expo/vector-icons';

import { RootState } from '../../redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { setThinner, setSexual, clearAll } from '../../redux/features/text/nitroSlice';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const NitroAssessment = ({ navigation }) => {

    const ClearButton = ({ clearAllFunc }) => {
        const dispatch = useDispatch();
        const handleClearAll = (value) => {
            dispatch(value);
            setIsThinnerYesPressed(false);
            setIsThinnerNoPressed(false);
            setIsSexualYesPressed(false);
            setIsSexualNoPressed(false);
        };
        return (
            <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClearAll(clearAllFunc())}>
                <Ionicons name="trash-outline" style={styles.clear} size={40} />
            </TouchableOpacity>
        );
    };

    const nitroState = useSelector((state: RootState) => state.nitroSlice);

    const dispatch = useDispatch();

    const [isThinnerYesPressed, setIsThinnerYesPressed] = useState(JSON.stringify(nitroState.thinner, null, 2).replaceAll('"', '') === "y");
    const [isThinnerNoPressed, setIsThinnerNoPressed] = useState(JSON.stringify(nitroState.thinner, null, 2).replaceAll('"', '') === "n");

    const [isSexualYesPressed, setIsSexualYesPressed] = useState(JSON.stringify(nitroState.sexual, null, 2).replaceAll('"', '') === "y");
    const [isSexualNoPressed, setIsSexualNoPressed] = useState(JSON.stringify(nitroState.sexual, null, 2).replaceAll('"', '') === "n");

    const handleSetThinner = (value) => {
        if (value === "y") {
            setIsThinnerYesPressed((prev) => !prev);
            isThinnerYesPressed ? (value = "") : null;
            setIsThinnerNoPressed(false)
        }
        else if (value === "n") {
            setIsThinnerNoPressed((prev) => !prev);
            isThinnerNoPressed ? (value = "") : null;
            setIsThinnerYesPressed(false)
        }
        dispatch(setThinner(value));
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
    const { t } = useTranslation();


    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>

            <SafeAreaView style={styles.container}>
                <GoBack navigation={navigation} />
                <ClearButton clearAllFunc={clearAll} />
                <Text style={styles.title}>{t('nitro_assessment.title')}</Text>

                <View style={styles.containerRow}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.imageTitle}>{t('nitro_assessment.blood')}</Text>
                        <Image style={styles.imageBox} source={(bloodthinner)} />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => handleSetThinner("y")}>
                                <SmallButton title={t('nitro_assessment.yes')} image={isThinnerYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSetThinner("n")}>
                                <SmallButton title={t('nitro_assessment.no')} image={isThinnerNoPressed ? pressedXmark : xmark} ></SmallButton>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.imageTitle}>{t('nitro_assessment.sexual')}</Text>
                        <Image style={styles.imageBox} source={(pill)} />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => handleSetSexual("y")}>
                                <SmallButton title={t('nitro_assessment.yes')} image={isSexualYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSetSexual("n")}>
                                <SmallButton title={t('nitro_assessment.no')} image={isSexualNoPressed ? pressedXmark : xmark} ></SmallButton>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default NitroAssessment;

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
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
        letterSpacing: 1,
    },
    imageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 15,
        letterSpacing: 1,
        width: 140,
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
    },
    clear: {
        alignSelf: 'center',
        color: 'black',
    },
    clearAllButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        right: 15
    },
});



