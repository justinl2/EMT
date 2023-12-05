import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
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
            setIsNoAssistPressed(false);
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
    const [isNoAssistPressed, setIsNoAssistPressed] = useState(JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noAssist");

    const handleSetAssist = (value) => {
        if (value === "noHelp") {
            setIsNoHelpYesPressed(true);
            setIsNoHospitalYesPressed(false);
            setIsHospitalYesPressed(false);
            setIsNoAssistPressed(false);
        } else if (value === "noHospital") {
            setIsNoHelpYesPressed(false);
            setIsNoHospitalYesPressed(true);
            setIsHospitalYesPressed(false);
            setIsNoAssistPressed(false);
        } else if (value === "hospital") {
            setIsNoHelpYesPressed(false);
            setIsNoHospitalYesPressed(false);
            setIsHospitalYesPressed(true);
            setIsNoAssistPressed(false);
        } else if (value === "noAssist") {
            setIsNoHelpYesPressed(false);
            setIsNoHospitalYesPressed(false);
            setIsHospitalYesPressed(false);
            setIsNoAssistPressed(true);
        }
        dispatch(setAssist(value));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView>

                    <View style={styles.inlineContainer}>
                        <GoBack navigation={navigation} />
                        <Text style={styles.returnHomeText}>Home</Text>
                    </View>

                    <View style={styles.work}>
                        <ClearButton clearAllFunc={clearAll} />
                    </View>

                    <View style={styles.spacing}>
                       
                    <Text style={styles.title}>Do Not Assist or Hospitalize Me</Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                style={isNoHelpYesPressed ? styles.pressedChoiceButton : styles.choiceButton}
                                onPress={() => handleSetAssist("noHelp")}
                            >
                                <Text style={styles.buttonText}>{t('path6.noHelp')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={isNoHospitalYesPressed ? styles.pressedChoiceButton : styles.choiceButton}
                                onPress={() => handleSetAssist("noHospital")}
                            >
                                <Text style={styles.buttonText}>{t('path6.noHospital')}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                style={isHospitalYesPressed ? styles.pressedChoiceButton : styles.choiceButton}
                                onPress={() => handleSetAssist("hospital")}
                            >
                                <Text style={styles.buttonText}>{t('path6.hospital')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={isNoAssistPressed ? styles.pressedChoiceButton : styles.choiceButton}
                                onPress={() => handleSetAssist("noAssist")}
                            >
                                <Text style={styles.buttonText}>{t('path6.noAssist')}</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>{t('path6.title')}</Text>

                        <TextInput
                            style={styles.inputField}
                            placeholder={t('path6.message')}
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(assistState.concern, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetConcern}
                        />
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
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
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
        marginTop: 25
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
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the left
        backgroundColor: '#f0f0f0', // Example background color
        padding: 10, // Example padding
        borderRadius: 8,
        paddingRight: 100,
      },
    returnHomeText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 7,
      },
      work: {
        top: -100,
        right: 15,
      }

});
