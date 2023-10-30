import React, { useState } from 'react';
import {
    Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Switch, Button, View,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from "../../components/ButtonCard";

import { useDispatch, useSelector } from 'react-redux';
import {
    setName, setDOB, setSex, setInsurance, setInsuranceNumber,
    setAllergies, setConditions, setMedication,
    setResuscitate, setIntubate,
    setHospital, setPhysician
} from '../../redux/features/text/medicalProfileSlice';


const MedicalProfileEMTScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [localName, setLocalName] = useState('');
    const [localMonth, setLocalMonth] = useState('');
    const [localDay, setLocalDay] = useState('');
    const [localYear, setLocalYear] = useState('');
    const [localSex, setLocalSex] = useState('');
    const [localInsuranceProvider, setLocalInsuranceProvider] = useState('');
    const [localInsuranceNumber, setLocalInsuranceNumber] = useState('');

    const [localAllergies, setLocalAllergies] = useState('');
    const [localConditions, setLocalConditions] = useState('');
    const [localMedication, setLocalMedication] = useState('');

    const [localResuscitate, setLocalResuscitate] = useState(false);
    const [localIntubate, setLocalIntubate] = useState(false);

    const [localHospital, setLocalHospital] = useState('')
    const [localPhysician, setLocalPhysician] = useState('')

    const yearArray = Array.from({ length: 124 }, (_, i) => 2023 - i);
    const yearItems = yearArray.map(year => ({
        label: `${year}`,
        value: `${year}`
    }));

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                        <SafeAreaView style={styles.container}>

                            <Text style={styles.title}> Medical Information Profile (EMT) </Text>

                            <Text style={styles.section}> Personal Information </Text>

                            <Text style={styles.baseText}> Name</Text>
                            <Text style={styles.subText}> Name</Text>


                            <Text style={styles.baseText}> Month of Birth</Text>
                            <Text style={styles.subText}> Month of Birth</Text>

                            <Text style={styles.baseText}> Day of Birth</Text>
                            <Text style={styles.subText}> Day of Birth</Text>


                            <Text style={styles.baseText}> Year of Birth</Text>
                            <Text style={styles.subText}> Year of Birth</Text>


                            <Text style={styles.baseText}> Sex</Text>
                            <Text style={styles.subText}> Sex</Text>


                            <Text style={styles.baseText}> Insurance Provider</Text>
                            <Text style={styles.subText}> Insurance Provider</Text>


                            <Text style={styles.baseText}> Insurance Number</Text>
                            <Text style={styles.subText}> Insurance Number</Text>


                            <Text style={styles.section}> Medical Record </Text>

                            <Text style={styles.baseText}> Allergies </Text>
                            <Text style={styles.subText}> Allergies </Text>


                            <Text style={styles.baseText}> Medical Conditions </Text>
                            <Text style={styles.subText}> Medical Conditions </Text>


                            <Text style={styles.baseText}> Medication </Text>
                            <Text style={styles.subText}> Medication </Text>


                            <Text style={styles.section}> Advanced Medical Directives </Text>

                            <Text style={styles.subText}> Do Not Resuscitate </Text>
                            <Text style={styles.subText}> Do Not Intubate </Text>

                            <Text style={styles.section}> Other </Text>

                            <Text style={styles.baseText}> Preferred Hospital </Text>
                            <Text style={styles.subText}> Preferred Hospital </Text>

                            <Text style={styles.baseText}> Physician's Name </Text>
                            <Text style={styles.subText}> Physician's Name </Text>

                        </SafeAreaView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>

    );
}

export default MedicalProfileEMTScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 50,

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
    baseText: {
        fontSize: 15,
        fontWeight: "600",
        color: "white",
        textAlign: 'left',
    },
    subText: {
        fontSize: 17,
        fontWeight: "500",
        color: "red",
        textAlign: 'center',
    },
    section: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        letterSpacing: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
    switch: {
        alignItems: 'center',
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 15,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },
    inputAndroid: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },
});