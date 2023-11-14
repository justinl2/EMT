import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { setInhaler, setThinner, setSexual, setNarcotics } from '../../redux/features/text/drugSlice';
import { RootState } from '../../redux/store';
import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const DrugsMedications = ({ navigation }) => {

    const drugState = useSelector((state: RootState) => state.drugSlice);

    const dispatch = useDispatch();

    const handleSetInhaler = (value) => dispatch(setInhaler(value));
    const handleSetBloodThinners = (value) => dispatch(setThinner(value));
    const handleSetSexualEnhancement = (value) => dispatch(setSexual(value));
    const handleSetNarcotics = (value) => dispatch(setNarcotics(value));

    const { t } = useTranslation()


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


                <SafeAreaView style={styles.container}>


                    <GoBack navigation={navigation} />

                    <Text style={styles.title}> {t('drugs_medications.title')} </Text>

                    <Text style={styles.text}>{t('drugs_medications.inhaler')}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={t('drugs_medications.inhaler')}
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.inhaler, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetInhaler}
                    />

                    <Text style={styles.text}>{t('drugs_medications.blood')}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={t('drugs_medications.blood')}
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.thinner, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetBloodThinners}
                    />

                    <Text style={styles.text}>{t('drugs_medications.sexual')}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={t('drugs_medications.sexual')}
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.sexual, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetSexualEnhancement}
                    />

                    <Text style={styles.text}>{t('drugs_medications.narcotics')}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={t('drugs_medications.narcotics')}
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.narcotics, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetNarcotics}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

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
        letterSpacing: 1,
    },

});

export default DrugsMedications;
