import { Text, SafeAreaView, StyleSheet, Switch, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPolst, setResuscitate } from '../../redux/features/text/directivesSlice';
import { RootState } from '../../redux/store';
import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Screen1 = ({ navigation }) => {

    const directivesState = useSelector((state: RootState) => state.directivesSlice);

    const dispatch = useDispatch();

    const [localPolst, setLocalPolst] = useState(false);
    const [localResuscitate, setLocalResuscitate] = useState(false);

    const { t } = useTranslation()


    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>

                <GoBack navigation={navigation} />

                <Text style={styles.title}>{t('path1.title')}</Text>

                <Text style={styles.text}>{t('path1.switch1')}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={localPolst ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(text) => {
                        setLocalPolst(text);
                        dispatch(setPolst(text));
                    }}
                    value={JSON.stringify(directivesState.polst, null, 2) === 'true'}
                />

                <Text style={styles.text}>{t('path1.switch2')}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={localResuscitate ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(text) => {
                        setLocalResuscitate(text);
                        dispatch(setResuscitate(text));
                    }}
                    value={JSON.stringify(directivesState.resuscitate, null, 2) === 'true'}
                />

            </SafeAreaView>
        </LinearGradient>
    );
}

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    switchContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
        letterSpacing: 1,
    },
});
