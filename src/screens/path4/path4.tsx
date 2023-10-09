import React, { useState, useRef } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Button
} from "react-native";

import { useSelector, useDispatch } from 'react-redux';
import { setText, clearText } from '../../features/text/textSlice';
import type { RootState } from '../../redux/store';

const TypeAnything = ({ navigation }) => {
    const dispatch = useDispatch();
    
    // Use Redux state instead of local state
    const textFromRedux = useSelector((state: RootState) => state.textEntry);
    const textInputRef = useRef(null); 

    const handleBack = () => {
        navigation.goBack();
    }

    const handleChangeText = (txt: string) => {
        dispatch(setText(txt));
    };

    const handleClear = () => {
        dispatch(clearText());
        textInputRef.current.clear();
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {/* Text entry field */}
                    <View style={styles.textEntry}>
                        <TextInput
                            multiline
                            editable
                            style={{ padding: 15, fontSize: 30 }}
                            ref={textInputRef}
                            placeholder="Type here..."
                            defaultValue={textFromRedux}
                            onChangeText={handleChangeText} 
                        />
                    </View>

                    {/* "Go back" button */}
                    <View style={styles.goBack}>
                        <Button title="GO BACK" onPress={handleBack} />
                    </View>

                    {/* "Clear all" button */}
                    <View style={styles.clearAll}>
                        <Button title="CLEAR ALL" onPress={handleClear} />
                    </View>
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
    goBack: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        left: 15
    },
    clearAll: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        right: 15
    }
});

export default TypeAnything;