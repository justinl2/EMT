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


const MedicalProfileScreen = ({ navigation }) => {

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

                            <Text style={styles.title}> Medical Information Profile </Text>
                            <Text style={styles.subtitle}> Please fill out the following form... </Text>

                            <Text style={styles.section}> Personal Information </Text>

                            <Text style={styles.text}> Name </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Name"
                                placeholderTextColor="#888"
                                value={localName}
                                onChangeText={(text) => {
                                    setLocalName(text);
                                    dispatch(setName(text));
                                }}
                            />

                            <Text style={styles.text}> Month of Birth</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalMonth(value)
                                    dispatch(setDOB({ month: value, day: localDay, year: localYear }));
                                }}
                                items={[
                                    { label: 'January', value: 'January' },
                                    { label: 'February', value: 'February' },
                                    { label: 'March', value: 'March' },
                                    { label: 'April', value: 'April' },
                                    { label: 'May', value: 'May' },
                                    { label: 'June', value: 'June' },
                                    { label: 'July', value: 'July' },
                                    { label: 'August', value: 'August' },
                                    { label: 'September', value: 'September' },
                                    { label: 'October', value: 'October' },
                                    { label: 'November', value: 'November' },
                                    { label: 'December', value: 'December' },

                                ]}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Month', value: null }}
                            />

                            <Text style={styles.text}> Day of Birth</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalDay(value)
                                    dispatch(setDOB({ month: localMonth, day: value, year: localYear }));
                                }}
                                items={[
                                    { label: '1', value: '01' },
                                    { label: '2', value: '02' },
                                    { label: '3', value: '03' },
                                    { label: '4', value: '04' },
                                    { label: '5', value: '05' },
                                    { label: '6', value: '06' },
                                    { label: '7', value: '07' },
                                    { label: '8', value: '08' },
                                    { label: '9', value: '09' },
                                    { label: '10', value: '10' },
                                    { label: '11', value: '11' },
                                    { label: '12', value: '12' },
                                    { label: '13', value: '13' },
                                    { label: '14', value: '14' },
                                    { label: '15', value: '15' },
                                    { label: '16', value: '16' },
                                    { label: '17', value: '17' },
                                    { label: '18', value: '18' },
                                    { label: '19', value: '19' },
                                    { label: '20', value: '20' },
                                    { label: '21', value: '21' },
                                    { label: '22', value: '22' },
                                    { label: '23', value: '23' },
                                    { label: '24', value: '24' },
                                    { label: '25', value: '25' },
                                    { label: '26', value: '26' },
                                    { label: '27', value: '27' },
                                    { label: '28', value: '28' },
                                    { label: '29', value: '29' },
                                    { label: '30', value: '30' },
                                    { label: '31', value: '31' }
                                ]}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Day', value: null }}
                            />

                            <Text style={styles.text}> Year of Birth</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalYear(value)
                                    dispatch(setDOB({ month: localMonth, day: localDay, year: value }));
                                }}
                                items={yearItems}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Year', value: null }}
                            />

                            <Text style={styles.text}> Sex</Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalSex(value)
                                    dispatch(setSex(localSex));
                                }}
                                items={[
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                    { label: 'Other', value: 'Other' }
                                ]}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Sex', value: null }}
                            />


                            <Text style={styles.text}> Insurance Provider</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Insurance Provider"
                                placeholderTextColor="#888"
                                value={localInsuranceProvider}
                                onChangeText={(text) => {
                                    setLocalInsuranceProvider(text);
                                    dispatch(setInsurance(text));
                                }}
                            />

                            <Text style={styles.text}> Insurance Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Insurance Number"
                                placeholderTextColor="#888"
                                value={localInsuranceNumber}
                                onChangeText={(text) => {
                                    setLocalInsuranceNumber(text);
                                    dispatch(setInsuranceNumber(text));
                                }}
                            />

                            <Text style={styles.section}> Medical Record </Text>

                            <Text style={styles.text}> Allergies </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Allergies"
                                placeholderTextColor="#888"
                                value={localAllergies}
                                onChangeText={(text) => {
                                    setLocalAllergies(text);
                                    dispatch(setAllergies(text));
                                }}
                            />

                            <Text style={styles.text}> Medical Conditions </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Allergies"
                                placeholderTextColor="#888"
                                value={localConditions}
                                onChangeText={(text) => {
                                    setLocalConditions(text);
                                    dispatch(setConditions(text));
                                }}
                            />

                            <Text style={styles.text}> Medication </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Medication"
                                placeholderTextColor="#888"
                                value={localMedication}
                                onChangeText={(text) => {
                                    setLocalMedication(text);
                                    dispatch(setMedication(text));
                                }}
                            />

                            <Text style={styles.section}> Advanced Medical Directives </Text>

                            <View style={styles.switch}>
                                <Text style={styles.text}> Do Not Resuscitate </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={localResuscitate ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(text) => {
                                        setLocalResuscitate(text);
                                        dispatch(setResuscitate(text));
                                    }}
                                    value={localResuscitate}
                                    style={styles.switch}
                                />

                                <Text style={styles.text}> Do Not Intubate </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={localIntubate ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(text) => {
                                        setLocalIntubate(text);
                                        dispatch(setIntubate(text));
                                    }}
                                    value={localIntubate}
                                />
                            </View>

                            <Text style={styles.section}> Other </Text>

                            <Text style={styles.text}> Preferred Hospital </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Preferred Hospital"
                                placeholderTextColor="#888"
                                value={localHospital}
                                onChangeText={(text) => {
                                    setLocalHospital(text);
                                    dispatch(setAllergies(text));
                                }}
                            />

                            <Text style={styles.text}> Physician's Name </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Physician's Name"
                                placeholderTextColor="#888"
                                value={localPhysician}
                                onChangeText={(text) => {
                                    setLocalPhysician(text);
                                    dispatch(setPhysician(text));
                                }}
                            />

                        </SafeAreaView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>

    );
}

export default MedicalProfileScreen;

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
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        textAlign: 'left',
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