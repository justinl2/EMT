import React, { useState } from 'react';
import {
    Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Switch, Button, View,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, ScrollView, Modal, FlatList,
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarBackground from "../../components/StatusBar";
import ButtonCard from "../../components/ButtonCard";

import { useDispatch, useSelector } from 'react-redux';
import {
    setName, setDOB, setSex, setInsurance, setInsuranceNumber,
    setAllergies, setConditions, setMedication,
    setPolst, setResuscitate,
    setHospital, setPhysician,
    clearAll
} from '../../redux/features/text/medicalProfileSlice';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next'
import '../../services/i18next';
import languagesList from '../../localization/languagesList.json';
import i18next, { languageResources } from '../../services/i18next';

import ClearButton from "../../components/ClearButton";
import getToken from '../../TokenService';
import { set } from 'react-hook-form';


const MedicalProfileScreen = ({ navigation }) => {

    const profileState = useSelector((state: RootState) => state.medicalProfileSlice);

    const dispatch = useDispatch();

    const [name, setAPIName] = useState('');
    const [month, setAPIMonth] = useState('');
    const [day, setAPIDay] = useState('');
    const [year, setAPIYear] = useState('');
    const [sex, setAPISex] = useState('');
    const [provider, setAPIProvider] = useState('');
    const [number, setAPINumber] = useState('');
    const [allergy, setAPIAllergy] = useState('');
    const [condition, setAPICondition] = useState('');
    const [medication, setAPIMedication] = useState('');
    const [hospital, setAPIHospital] = useState('');
    const [physician, setAPIPhysician] = useState('');

    const sendMedicalProfile = async () => {
        try {
          const token = await getToken(); 
          const profileData = {
            name,
            month_of_birth: `${month}`,
            day_of_birth: `${day}`,
            year_of_birth: `${year}`,
            sex: `${sex}`,
            insurance_provider: provider,
            insurance_number: number,
            allergies: allergy,
            medical_conditions: condition,
            medication,
            preferred_hospital: hospital,
            physician_name: physician
          };
      
          fetch('http://127.0.0.1:8000/send_medical_profile', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Token ${token}" 
            },
            body: JSON.stringify(profileData)
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      };
      





    const [localMonth, setLocalMonth] = useState('');
    const [localDay, setLocalDay] = useState('');
    const [localYear, setLocalYear] = useState('');

    const [localPolst, setLocalPolst] = useState(false);
    const [localResuscitate, setLocalResuscitate] = useState(false);

    const yearArray = Array.from({ length: 124 }, (_, i) => 2023 - i);
    const yearItems = yearArray.map(year => ({
        label: `${year}`,
        value: `${year}`
    }));

    const { t } = useTranslation()
    const [visible, setVisible] = useState(false);
    const changeLng = lng => {
        i18next.changeLanguage(lng);
        setVisible(false);
    };


    return (

        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <StatusBarBackground />
            <KeyboardAvoidingView behavior="padding">
                <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <SafeAreaView style={styles.container}>
                            
                            <Text style={styles.title}> {t('MedicalProfile.title')} </Text>
                            <Text style={styles.subtitle}> {t('MedicalProfile.please')} </Text>

                            <ClearButton clearAllFunc={clearAll} />


                            <Modal visible={visible} onRequestClose={() => setVisible(false)}>
                                <View style={styles.languageList}>
                                    <FlatList
                                        style={styles.containerList}
                                        data={Object.keys(languageResources)}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity style={styles.languageBtn} onPress={() => changeLng(item)}>
                                                <Text style={styles.lngText}>{languagesList[item].nativeName}</Text>
                                            </TouchableOpacity>
                                        )} />
                                </View>
                            </Modal>
                            <TouchableOpacity style={styles.translateBtn} onPress={() => { setVisible(true) }}>
                                <Text style={styles.translateLabel}> {t('MedicalProfile.changeLanguage')} </Text>
                            </TouchableOpacity>

                            <Text style={styles.section}> {t('MedicalProfile.personal')} </Text>

                            <Text style={styles.text}> {t('MedicalProfile.name')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.name')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.name, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setName(text));
                                    setAPIName(text);
                                }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.month')} </Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalMonth(value)
                                    dispatch(setDOB({ month: value, day: localDay, year: localYear }));
                                    setAPIMonth(value);
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
                                value={JSON.stringify(profileState.DOB.month, null, 2).replaceAll('"', '')}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Month', value: null }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.day')} </Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalDay(value)
                                    dispatch(setDOB({ month: localMonth, day: value, year: localYear }));
                                    setAPIDay(value);
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
                                value={JSON.stringify(profileState.DOB.day, null, 2).replaceAll('"', '')}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Day', value: null }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.year')} </Text>
                            <RNPickerSelect
                                onValueChange={(value) => {
                                    setLocalYear(value)
                                    dispatch(setDOB({ month: localMonth, day: localDay, year: value }));
                                    setAPIYear(value);
                                }}
                                items={yearItems}
                                value={JSON.stringify(profileState.DOB.year, null, 2).replaceAll('"', '')}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Year', value: null }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.sex')}</Text>
                            <RNPickerSelect
                                    setLocalSex(value)
                                    dispatch(setSex(localSex));
                                    setAPISex(value);
                                }}
                                items={[
                                    { label: 'Male', value: 'Male' },
                                    { label: 'Female', value: 'Female' },
                                    { label: 'Other', value: 'Other' }
                                ]}
                                value={JSON.stringify(profileState.sex, null, 2).replaceAll('"', '')}
                                style={pickerSelectStyles}
                                placeholder={{ label: 'Sex', value: null }}
                            />


                            <Text style={styles.text}> {t('MedicalProfile.insuranceProvider')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.insuranceProvider')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.insurance, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setInsurance(text));
                                    setAPIProvider(text);
                                }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.insuranceNumber')}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.insuranceNumber')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.insurancenumber, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setInsuranceNumber(text));
                                    setAPINumber(text);
                                }}
                            />

                            <Text style={styles.section}> {t('MedicalProfile.medicalRecord')} </Text>

                            <Text style={styles.text}> {t('MedicalProfile.allergies')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.allergies')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.allergies, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setAllergies(text));
                                    setAPIAllergy(text);
                                }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.medicalConditions')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.medicalConditions')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.conditions, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setConditions(text));
                                    setAPICondition(text);
                                }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.medication')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.medication')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.medication, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setMedication(text));
                                    setAPIMedication(text);
                                }}
                            />

                            <Text style={styles.section}> {t('MedicalProfile.advancedMedical')} </Text>

                            <View style={styles.switch}>
                                <Text style={styles.text}> {t('MedicalProfile.polst')} </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={localPolst ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(text) => {
                                        setLocalPolst(text);
                                        dispatch(setPolst(text));
                                    }}
                                    value={JSON.stringify(profileState.polst, null, 2) === 'true'}
                                />

                                <Text style={styles.text}> {t('MedicalProfile.resuscitate')} </Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={localResuscitate ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={(text) => {
                                        setLocalResuscitate(text);
                                        dispatch(setResuscitate(text));

                                    }}
                                    value={JSON.stringify(profileState.resuscitate, null, 2) === 'true'}
                                />
                            </View>

                            <Text style={styles.section}> {t('MedicalProfile.other')} </Text>

                            <Text style={styles.text}> {t('MedicalProfile.hospital')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.hospital')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.hospital, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setAllergies(text));
                                    setAPIHospital(text);
                                }}
                            />

                            <Text style={styles.text}> {t('MedicalProfile.physician')} </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={t('MedicalProfile.physician')}
                                placeholderTextColor="#888"
                                defaultValue={JSON.stringify(profileState.physician, null, 2).replaceAll('"', '')}
                                onChangeText={(text) => {
                                    dispatch(setPhysician(text));
                                    setAPIPhysician(text);
                                }}
                            />

                            <Button title="Save and Send Data" onPress={sendMedicalProfile} />


                        </SafeAreaView>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>


    );
}

export default MedicalProfileScreen;

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
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
        textAlign: 'left',
        paddingLeft: 35,
    },
    section: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        letterSpacing: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 15,
        fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
        marginBottom: 15,
        letterSpacing: 1,
    },
    switch: {
        alignItems: 'center',
    },
    translateLabel: {
        alignSelf: 'center',
    },
    translateBtn: {
        alignSelf: 'center',
        width: 150,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    languageList: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    languageBtn: {
        alignSelf: 'center',
        width: 250,
        height: 50,
        backgroundColor: 'paleturquoise',
        borderRadius: 5,
        marginTop: 50,
        padding: 10,

    },
    containerList: {
        backgroundColor: "white",
    },
    lngText: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        textAlign: 'center',
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
        width: "80%",
        alignSelf: 'center'
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
        width: "80%",
        alignSelf: 'center'
    },

});