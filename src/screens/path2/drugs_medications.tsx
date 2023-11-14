import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { setInhaler, setThinner, setSexual, setNarcotics, clearAll } from '../../redux/features/text/drugSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";

const DrugsMedications = ({ navigation }) => {

    const drugState = useSelector((state: RootState) => state.drugSlice);

    const dispatch = useDispatch();

    const handleSetInhaler = (value) => dispatch(setInhaler(value));
    const handleSetBloodThinners = (value) => dispatch(setThinner(value));
    const handleSetSexualEnhancement = (value) => dispatch(setSexual(value));
    const handleSetNarcotics = (value) => dispatch(setNarcotics(value));

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>

                <SafeAreaView style={styles.container}>

                    <GoBack navigation={navigation} />

                    <ClearButton clearAllFunc={clearAll} />

                    <Text style={styles.title}> Drugs & Medications </Text>

                    <Text style={styles.text}>Inhaler</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Inhaler?"
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.inhaler, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetInhaler}
                    />

                    <Text style={styles.text}>Blood thinners (Aspirin, warfarin, etc)?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Blood thinners (Aspirin, warfarin, etc)?"
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.thinner, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetBloodThinners}
                    />

                    <Text style={styles.text}>Sexual enhancement drugs in the last 24 hours?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sexual enhancement drugs in the last 24 hours?"
                        placeholderTextColor="#888"
                        defaultValue={JSON.stringify(drugState.sexual, null, 2).replaceAll('"', '')}
                        onChangeText={handleSetSexualEnhancement}
                    />

                    <Text style={styles.text}>Narcotics? (opioids, heroin, morphine, oxycontin etc)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Narcotics? (opioids, heroin, morphine, oxycontin etc)"
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
        letterSpacing: 1,
    },

});

export default DrugsMedications;
