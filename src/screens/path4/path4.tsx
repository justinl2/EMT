import React from 'react';
import {
    StyleSheet, Button, Text, View,
    TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView
} from "react-native";

const TypeAnything = ({ navigation }) => {

    const [text, onChangeText] = React.useState('')

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
                            ref={input => { this.textInput = input }}
                            placeholder="Type here..."
                            value={text}
                            onChangeText={onChangeText}
                        />
                    </View>

                    {/* "Go back" button */}
                    <View style={styles.goBack}>
                        <Button title="GO BACK" onPress={() => navigation.goBack()} />
                    </View>

                    {/* "Clear all" button */}
                    <View style={styles.clearAll}>
                        <Button title="CLEAR ALL" onPress={() => this.textInput.clear()}/>
                    </View>
        
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
}

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
