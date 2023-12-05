import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RNPickerSelect from 'react-native-picker-select';

import { useDispatch, useSelector } from 'react-redux';
import { setName, setWhere, setWeekday, clearAll } from '../../redux/features/text/assessmentSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Screen5 = ({ navigation }) => {

    const assessmentState = useSelector((state: RootState) => state.assessmentSlice);

    const dispatch = useDispatch();
    const { t } = useTranslation()


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


                <SafeAreaView style={styles.container}>

                    <View style={styles.inlineContainer}>
                        <GoBack navigation={navigation} />
                        <Text style={styles.returnHomeText}>Home</Text>
                    </View>
                    
                    <View style={styles.work}>
                        <ClearButton clearAllFunc={clearAll} />
                    </View>

                    <Text style={styles.title}>{t('path5.title')}</Text>

                    <Text style={styles.text}>{t('path5.name')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            dispatch(setName(text));
                        }}
                        defaultValue={JSON.stringify(assessmentState.name, null, 2).replaceAll('"', '')}
                        placeholder={t('path5.name')}
                    />

                    <Text style={styles.text}>{t('path5.where')}</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                            dispatch(setWhere(text));
                        }}
                        defaultValue={JSON.stringify(assessmentState.where, null, 2).replaceAll('"', '')}
                        placeholder={t('path5.where')}
                    />
                    <Text style={styles.text}>{t('path5.day')}</Text>

                    <RNPickerSelect
                        onValueChange={(value) => {
                            dispatch(setWeekday(value))
                        }}
                        items={[
                            { label: 'Monday', value: 'Monday' },
                            { label: 'Tuesday', value: 'Tuesday' },
                            { label: 'Wednesday', value: 'Wednesday' },
                            { label: 'Thursday', value: 'Thursday' },
                            { label: 'Friday', value: 'Friday' },
                            { label: 'Saturday', value: 'Saturday' },
                            { label: 'Sunday', value: 'Sunday' },
                        ]}
                        style={pickerSelectStyles}
                        value={JSON.stringify(assessmentState.weekday, null, 2).replaceAll('"', '')}
                        placeholder={{ label: 'Day', value: null }}
                    />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
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
    right: -175,
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        width: "80%",
        alignSelf: 'center'
    },
});

export default Screen5;
