import {
    Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Button, TextInput,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Image,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import mental from "../../../src/assets/mental.png";
import injury from "../../../src/assets/injury.jpg";
import alert from "../../../src/assets/alert.jpg";
import blackCheck from "../../../src/assets/black-check.jpg";
import pressedBlackCheck from "../../../src/assets/pressed-black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import pressedXmark from "../../../src/assets/pressed-x-mark.jpg";
import SmallButton from '../../components/SmallButton';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { setBlood, setConstipation, setDiarrhea, setWhen, clearAll } from '../../redux/features/text/bathroomSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Bathroom = ({ navigation }) => {

    const ClearButton = ({ clearAllFunc }) => {
        const dispatch = useDispatch();
        const handleClearAll = (value) => {
            dispatch(value);
            setIsBloodYesPressed(false);
            setIsBloodNoPressed(false);
            setIsConstipationYesPressed(false);
            setIsConstipationNoPressed(false);
            setIsDiarrheaYesPressed(false);
            setIsDiarrheaNoPressed(false);
        };
        return (
            <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClearAll(clearAllFunc())}>
                <Ionicons name="trash-outline" style={styles.clear} size={40} />
            </TouchableOpacity>
        );
    };

    const bathroomState = useSelector((state: RootState) => state.bathroomSlice);

    const dispatch = useDispatch();

    const [isBloodYesPressed, setIsBloodYesPressed] = useState(JSON.stringify(bathroomState.blood, null, 2).replaceAll('"', '') === "y");
    const [isBloodNoPressed, setIsBloodNoPressed] = useState(JSON.stringify(bathroomState.blood, null, 2).replaceAll('"', '') === "n");

    const [isConstipationYesPressed, setIsConstipationYesPressed] = useState(JSON.stringify(bathroomState.constipation, null, 2).replaceAll('"', '') === "y");
    const [isConstipationNoPressed, setIsConstipationNoPressed] = useState(JSON.stringify(bathroomState.constipation, null, 2).replaceAll('"', '') === "n");

    const [isDiarrheaYesPressed, setIsDiarrheaYesPressed] = useState(JSON.stringify(bathroomState.diarrhea, null, 2).replaceAll('"', '') === "y");
    const [isDiarrheaNoPressed, setIsDiarrheaNoPressed] = useState(JSON.stringify(bathroomState.diarrhea, null, 2).replaceAll('"', '') === "n");

    const handleSetBlood = (value) => {
        if (value === "y") {
            setIsBloodYesPressed((prev) => !prev);
            isBloodYesPressed ? (value = "") : null;
            setIsBloodNoPressed(false)
        }
        else if (value === "n") {
            setIsBloodNoPressed((prev) => !prev);
            isBloodNoPressed ? (value = "") : null;
            setIsBloodYesPressed(false)
        }
        dispatch(setBlood(value));
    };
    const handleSetConstipation = (value) => {
        if (value === "y") {
            setIsConstipationYesPressed((prev) => !prev);
            isConstipationYesPressed ? (value = "") : null;
            setIsConstipationNoPressed(false)
        }
        else if (value === "n") {
            setIsConstipationNoPressed((prev) => !prev);
            isConstipationNoPressed ? (value = "") : null;
            setIsConstipationYesPressed(false)
        }
        dispatch(setConstipation(value));
    };
    const handleSetDiarrhea = (value) => {
        if (value === "y") {
            setIsDiarrheaYesPressed((prev) => !prev);
            isDiarrheaYesPressed ? (value = "") : null;
            setIsDiarrheaNoPressed(false)
        }
        else if (value === "n") {
            setIsDiarrheaNoPressed((prev) => !prev);
            isDiarrheaNoPressed ? (value = "") : null;
            setIsDiarrheaYesPressed(false)
        }
        dispatch(setDiarrhea(value));
    };
    const handleSetWhen = (value) => dispatch(setWhen(value));

    const { t } = useTranslation();


    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <KeyboardAvoidingView behavior="padding">
                <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <SafeAreaView style={styles.container}>

                            <View style={styles.header}>
                                <GoBack navigation={navigation} />
                                <ClearButton clearAllFunc={clearAll} />
                            </View>

                            <Text style={styles.title}>{t('bathroom.title')}</Text>

                            <View style={styles.containerRow}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>{t('bathroom.blood')}</Text>
                                    <Image style={styles.imageBox} source={(alert)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetBlood("y")}>
                                            <SmallButton title={t('bathroom.yes')} image={isBloodYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetBlood("n")}>
                                            <SmallButton title={t('bathroom.no')} image={isBloodNoPressed ? pressedXmark : xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>{t('bathroom.constipation')}</Text>
                                    <Image style={styles.imageBox} source={(alert)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetConstipation("y")}>
                                            <SmallButton title={t('bathroom.yes')} image={isConstipationYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetConstipation("n")}>
                                            <SmallButton title={t('bathroom.no')} image={isConstipationNoPressed ? pressedXmark : xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.containerRow}>
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.imageTitle}>{t('bathroom.diarrhea')}</Text>
                                    <Image style={styles.imageBox} source={(alert)} />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => handleSetDiarrhea("y")}>
                                            <SmallButton title={t('bathroom.yes')} image={isDiarrheaYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleSetDiarrhea("n")}>
                                            <SmallButton title={t('bathroom.no')} image={isDiarrheaNoPressed ? pressedXmark : xmark} ></SmallButton>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                <TouchableOpacity
                                    style={styles.buttonContainer}
                                    onPress={() => navigation.navigate("Pain_Screen")}
                                >
                                    <ButtonCard title={t('bathroom.pain')} image={alert} />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>{t('bathroom.when')}</Text>

                            <TextInput
                                style={styles.inputField}
                                placeholder={t('bathroom.when')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(bathroomState.when, null, 2).replaceAll('"', '')}
                                onChangeText={handleSetWhen}
                            />

                        </SafeAreaView>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default Bathroom;

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
    },
    inputField: {
        height: 40,
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "black",
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
    clear: {
        alignSelf: 'center',
        color: 'black',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
});
