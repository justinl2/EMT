import React, { useRef } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Button, TouchableOpacity
} from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { setText, clearText } from '../../redux/features/text/textSlice';
import type { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const TypeAnything = ({ navigation }) => {
    const dispatch = useDispatch();

    const textFromRedux = useSelector((state: RootState) => state.textEntry);
    const textInputRef = useRef(null);

    const handleChangeText = (txt: string) => {
        dispatch(setText(txt));
    };

    const handleClear = () => {
        dispatch(clearText());
        textInputRef.current.clear();
    }

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

    const { t } = useTranslation()


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    <View style={styles.textEntry}>
                        <TextInput
                            multiline
                            editable
                            style={{ padding: 15, fontSize: 30 }}
                            ref={textInputRef}
                            placeholder={t('path4.textInput')}
                            defaultValue={textFromRedux}
                            onChangeText={handleChangeText}
                        />
                    </View>

                    <GoBack navigation={navigation} />

                    <ClearAll />

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
});

export default TypeAnything;