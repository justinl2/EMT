import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import ButtonCard from "../../components/ButtonCard";
import alert from '../../../src/assets/alert.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { setMental, clearAll } from "../../redux/features/text/mentalSlice";
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const MentalHealth = ({ navigation }) => {

    const mentalState = useSelector((state: RootState) => state.mentalSlice);

    const dispatch = useDispatch();

    const handleInputChange = (value) => dispatch(setMental(value));

    const { t } = useTranslation()


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>

                    <View style={styles.inlineContainer}>
                        <GoBack navigation={navigation} />
                        <Text style={styles.returnHomeText}>Return Home</Text>
                    </View>
                    <View style={styles.work}>
                        <ClearButton clearAllFunc={clearAll} />
                    </View>
                    <Text style={styles.title}>{t('mentalhealth.title')}</Text>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Alert_Screen')}>
                            <ButtonCard title={t('mentalhealth.alert')} image={alert} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>{t('mentalhealth.whats_wrong')} </Text>


                    <TextInput
                        style={styles.inputField}
                        placeholder={t('mentalhealth.whats_wrong')}
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(mentalState.mental, null, 2).replaceAll('"', '')}
                        onChangeText={handleInputChange}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default MentalHealth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
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
    buttonRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
      work: {
        top: -100,
        right: 15,
      },
});



