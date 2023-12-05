import {
    Text, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';

import ButtonCard from "../../components/ButtonCard";

import kneepain from '../../../src/assets/kneepain.jpg';
import clipboard from '../../../src/assets/clipboard.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { setWhen, setBetter, setWhere, clearAll } from '../../redux/features/text/painSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Pain = ({ navigation }) => {

    const painState = useSelector((state: RootState) => state.painSlice);

    const dispatch = useDispatch();

    const handleSetWhen = (value) => dispatch(setWhen(value));
    const handleSetBetter = (value) => dispatch(setBetter(value));
    const handleSetWhere = (value) => dispatch(setWhere(value));

    const { t } = useTranslation()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
                    <SafeAreaView >

                        <View style={styles.inlineContainer}>
                            <GoBack navigation={navigation} />
                            <Text style={styles.returnHomeText}>Home</Text>
                        </View>


                        <Text style={styles.title}>{t('path3.title')}</Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Feel_Screen')}>
                                <ButtonCard title={t('path3.feelsLike')} image={kneepain} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('How_Bad_Screen')}>
                                <ButtonCard title={t('path3.howBad')} image={clipboard} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.text}>{t('path3.when')}</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleSetWhen}
                            defaultValue={JSON.stringify(painState.when, null, 2).replaceAll('"', '')}
                            placeholder={t('path3.when')}
                        />

                        <Text style={styles.text}>{t('path3.better')}</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleSetBetter}
                            defaultValue={JSON.stringify(painState.better, null, 2).replaceAll('"', '')}
                            placeholder={t('path3.better')}
                        />

                        <Text style={styles.text}>{t('path3.move')}</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={handleSetWhere}
                            defaultValue={JSON.stringify(painState.where, null, 2).replaceAll('"', '')}
                            placeholder={t('path3.move')}
                        />
                    </SafeAreaView>
                </KeyboardAvoidingView>


            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Pain;

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
    button: {
        width: 150,
        height: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonContainer: {
        marginRight: 15,
        marginLeft: 15
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10,
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
        width: "80%",
        alignSelf: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center',
    },
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        paddingRight: 200,
      },
    returnHomeText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 7,
      },
});



