import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from 'react-redux';
import { setFood, setMedication, setEnvironment, setOther, clearAll } from '../../redux/features/text/allergiesSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Allergen = ({ navigation }) => {

    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);

    const dispatch = useDispatch();

    const handleSetFood = (value) => dispatch(setFood(value));
    const handleSetMedication = (value) => dispatch(setMedication(value));
    const handleSetEnvironmental = (value) => dispatch(setEnvironment(value));
    const handleSetOther = (value) => dispatch(setOther(value));

    const { t } = useTranslation()


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>

                <SafeAreaView style={styles.container}>

                    <View style={styles.inlineContainer}>
                        <View style={styles.work2}>
                        <GoBack navigation={navigation} />
                        </View>
                        <Text style={styles.returnHomeText}>Medical & Personal</Text>
                    </View>

                    <View style={styles.work}>
                        <ClearButton clearAllFunc={clearAll} />
                    </View>

                    <Text style={styles.title}>{t('allergen.title')}</Text>

                    <Text style={styles.text}>{t('allergen.foods')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetFood}
                        defaultValue={JSON.stringify(allergiesState.foods, null, 2).replaceAll('"', '')}
                        placeholder={t('allergen.foods')}
                    />

                    <Text style={styles.text}>{t('allergen.medications')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetMedication}
                        defaultValue={JSON.stringify(allergiesState.medications, null, 2).replaceAll('"', '')}
                        placeholder={t('allergen.medications')}
                    />
                    <Text style={styles.text}>{t('allergen.environment')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetEnvironmental}
                        defaultValue={JSON.stringify(allergiesState.environmental, null, 2).replaceAll('"', '')}
                        placeholder={t('allergen.environment')}
                    />

                    <Text style={styles.text}>{t('allergen.other')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleSetOther}
                        defaultValue={JSON.stringify(allergiesState.other, null, 2).replaceAll('"', '')}
                        placeholder={t('allergen.other')}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Allergen;


const styles = StyleSheet.create({
    container: {
        padding: 20,
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
        marginTop: 10,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 10,
        letterSpacing: 1,
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
        right: 0
    },
    work2: {
        top: 0,
        right: 0,
    }
});