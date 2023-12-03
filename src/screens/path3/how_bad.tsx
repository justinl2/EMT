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
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { setHow, setDescribe, clearAll } from '../../redux/features/text/painBadSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const HowBad = ({ navigation }) => {

    const ClearButton = ({ clearAllFunc }) => {
        const dispatch = useDispatch();
        const handleClearAll = (value) => {
            dispatch(value);
            setIsMildYesPressed(false);
            setIsModerateYesPressed(false);
            setIsSevereYesPressed(false);
        };
        return (
            <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClearAll(clearAllFunc())}>
                <Ionicons name="trash-outline" style={styles.clear} size={40} />
            </TouchableOpacity>
        );
    };

    const painBadState = useSelector((state: RootState) => state.painBadSlice);

    const dispatch = useDispatch();

    const handleSetHow = (value) => dispatch(setHow(value));

    const { t } = useTranslation()

    const [isMildYesPressed, setIsMildYesPressed] = useState(JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "mild");
    const [isModerateYesPressed, setIsModerateYesPressed] = useState(JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "moderate");
    const [isSevereYesPressed, setIsSevereYesPressed] = useState(JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "severe");

    const handleSetDescribe = (value) => {
        if (value === "mild") {
            setIsMildYesPressed((prev) => !prev);
            isMildYesPressed ? (value = "") : null;
            setIsModerateYesPressed(false);
            setIsSevereYesPressed(false);
        }
        else if (value === "moderate") {
            setIsModerateYesPressed((prev) => !prev);
            isModerateYesPressed ? (value = "") : null;
            setIsMildYesPressed(false);
            setIsSevereYesPressed(false);
        }
        else if (value === "severe") {
            setIsSevereYesPressed((prev) => !prev);
            isSevereYesPressed ? (value = "") : null;
            setIsMildYesPressed(false);
            setIsModerateYesPressed(false);
        }
        dispatch(setDescribe(value));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>


                    <View style={styles.header}>
                        <GoBack navigation={navigation} />
                        <ClearButton clearAllFunc={clearAll} />
                    </View>

                    <Text style={styles.title}>{t('how_bad.title')}</Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={isMildYesPressed ? styles.pressedButton : styles.button} onPress={() => handleSetDescribe("mild")}>
                            <Text style={styles.buttonText}>{t('how_bad.mild')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={isModerateYesPressed ? styles.pressedButton : styles.button} onPress={() => handleSetDescribe("moderate")}>
                            <Text style={styles.buttonText}>{t('how_bad.moderate')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={isSevereYesPressed ? styles.pressedButton : styles.button} onPress={() => handleSetDescribe("severe")}>
                            <Text style={styles.buttonText}>{t('how_bad.severe')}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.otherLabel}>{t('how_bad.other')}</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={t('how_bad.other')}
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
    pressedButton: {
        width: 100,
        height: 50,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    clear: {
        alignSelf: 'center',
        color: 'black',
    },
    clearAllButton: {
        marginRight: 20,
    },
});

export default HowBad;
