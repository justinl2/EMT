import React, { useState, useRef } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Button
} from "react-native";

global.savedtext = '';

const TypeAnything = ({ navigation }) => {
    const [text, onChangeText] = useState(''); 
    const textInputRef = useRef(null); 

    const changeSaved = () => {
        global.savedtext = text; 
    };

    const handlePress = () => {
        navigation.goBack()
        changeSaved()
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
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
                            defaultValue={global.savedtext}
                            onChangeText={(txt) => onChangeText(txt)} 
                        />
                    </View>

                    {/* "Go back" button */}
                    <View style={styles.goBack}>
                        <Button title="GO BACK" onPress={handlePress} />
                    </View>

                    {/* "Clear all" button */}
                    <View style={styles.clearAll}>
                        <Button title="CLEAR ALL" onPress={() => textInputRef.current.clear()} />
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
