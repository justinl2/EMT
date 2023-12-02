import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import ButtonCard from "../../components/ButtonCard";
import alert from '../../../src/assets/alert.jpg';
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { setConcern, setAssist, clearAll } from '../../redux/features/text/assistSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";

import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Screen6 = ({ navigation }) => {

    const ClearButton = ({ clearAllFunc }) => {
        const dispatch = useDispatch();
        const handleClearAll = (value) => {
            dispatch(value);
            setIsNoHelpYesPressed(false);
            setIsNoHospitalYesPressed(false);
            setIsHospitalYesPressed(false);
        };
        return (
            <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClearAll(clearAllFunc())}>
                <Ionicons name="trash-outline" style={styles.clear} size={40} />
            </TouchableOpacity>
        );
    };

    const assistState = useSelector((state: RootState) => state.assistSlice);

    const dispatch = useDispatch();
    const handleSetConcern = (value) => dispatch(setConcern(value));

    const { t } = useTranslation()

    const [isNoHelpYesPressed, setIsNoHelpYesPressed] = useState(JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noHelp");
    const [isNoHospitalYesPressed, setIsNoHospitalYesPressed] = useState(JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noHospital");
    const [isHospitalYesPressed, setIsHospitalYesPressed] = useState(JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "hospital");

    const handleSetAssist = (value) => {
        if (value === "noHelp") {
            setIsNoHelpYesPressed((prev) => !prev);
            isNoHelpYesPressed ? (value = "") : null;
            setIsNoHospitalYesPressed(false);
            setIsHospitalYesPressed(false);
        }
        else if (value === "noHospital") {
            setIsNoHospitalYesPressed((prev) => !prev);
            isNoHospitalYesPressed ? (value = "") : null;
            setIsNoHelpYesPressed(false);
            setIsHospitalYesPressed(false);
        }
        else if (value === "hospital") {
            setIsHospitalYesPressed((prev) => !prev);
            isHospitalYesPressed ? (value = "") : null;
            setIsNoHelpYesPressed(false);
            setIsNoHospitalYesPressed(false);
        }
        dispatch(setAssist(value));
    };


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView>

                    <GoBack navigation={navigation} />

                    <ClearButton clearAllFunc={clearAll} />

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Alert_Screen')}>
                        <ButtonCard title={t('path6.alert')} image={alert} />
                    </TouchableOpacity>

                    <View style={styles.spacing}>
                        <Text style={styles.title}>{t('path6.title')}</Text>

                        <TextInput
                            style={styles.inputField}
                            placeholder={t('path6.message')}
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(assistState.concern, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetConcern}
                        />

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={isNoHelpYesPressed ? styles.pressedChoiceButton : styles.choiceButton} onPress={() => handleSetAssist("noHelp")}>
                                <Text style={styles.buttonText}>{t('path6.noHelp')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={isNoHospitalYesPressed ? styles.pressedChoiceButton : styles.choiceButton} onPress={() => handleSetAssist("noHospital")}>
                                <Text style={styles.buttonText}>{t('path6.noHospital')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={isHospitalYesPressed ? styles.pressedChoiceButton : styles.choiceButton} onPress={() => handleSetAssist("hospital")}>
                                <Text style={styles.buttonText}>{t('path6.hospital')}</Text>
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
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    subText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    pressedChoiceButton: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: 'lightgray',
        borderRadius: 5,
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
        width: "80%",
        alignSelf: 'center'
    },
    spacing: {
        marginTop: 75
    },
    clearAllButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        right: 15
    },
    clear: {
        alignSelf: 'center',
        color: 'black',
    },

});
