import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Button, TouchableOpacity, Alert
} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { setText, clearText, storeText, clearAll } from '../../redux/features/text/textSlice';
import type { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const TypeAnything = ({ navigation }) => {

    const [localText, setLocalText] = useState('');

    const dispatch = useDispatch();

    const textState = useSelector((state: RootState) => state.textEntry);

    const handleSetText = (value) => {
        dispatch(setText(value));
        setLocalText(value);
    };
    
    const handleClear = () => dispatch(clearText());

    const handleStore = () => {
        dispatch(storeText(localText));
        storeAlert();
    };

    const GoBack = ({ navigation }) => {
        return (
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" style={styles.button} size={40} />
            </TouchableOpacity>
        );
    };

    const ClearAll = () => {
        return (
            <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClear()}>
                <Ionicons name="trash-outline" style={styles.button} size={40} />
            </TouchableOpacity>
        );
    };

    const Save = () => {
        return (
            <TouchableOpacity style={styles.saveButton} onPress={() => handleStore()}>
                <Ionicons name="save-outline" style={styles.button} size={40} />
            </TouchableOpacity>
        );
    };

    const storeAlert = () =>
        Alert.alert('Text Stored:', '"' + localText + '"', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const { t } = useTranslation()

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    <View style={styles.textEntry}>
                        <TextInput
                            editable
                            multiline
                            style={{ padding: 15, fontSize: 30 }}
                            placeholder={t('path4.textInput')}
                            defaultValue={textState.text}
                            onChangeText={handleSetText}
                        />
                    </View>

                    <GoBack navigation={navigation} />

                    <ClearAll />

                    <Save />

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textEntry: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        color: 'black',
    },
    goBackButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        left: 15
    },
    clearAllButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        right: 15
    },
    saveButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
    }
});

export default TypeAnything;