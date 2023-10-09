import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from "../../components/ButtonCard";
import personal from '../../../src/assets/personal.jpg'

const PersonalInformation = ({ navigation }) => {
    const [name, setName] = useState('');
    const [insuranceProvider, setInsuranceProvider] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');

    const yearArray = Array.from({ length: 64 }, (_, i) => 1960 + i);
    const yearItems = yearArray.map(year => ({
        label: `${year}`,
        value: `${year}`
    }));

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
                <SafeAreaView style={styles.container}>

                    <Button title="Go Back" onPress={() => navigation.goBack()} />

                    <Text style={styles.title}> Personal Information </Text>

                    <Text style={styles.text}> Name </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#888"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.text}> Date of Birth</Text>

                    <RNPickerSelect
                        onValueChange={(value) => setMonth(value)}
                        items={[
                            { label: 'January', value: '01' },
                            { label: 'February', value: '02' },
                            { label: 'March', value: '03' },
                            { label: 'April', value: '04' },
                            { label: 'May', value: '05' },
                            { label: 'June', value: '06' },
                            { label: 'July', value: '07' },
                            { label: 'August', value: '08' },
                            { label: 'September', value: '09' },
                            { label: 'October', value: '10' },
                            { label: 'November', value: '11' },
                            { label: 'December', value: '12' },
                        
                        ]}
                        style={pickerSelectStyles}
                        placeholder={{ label: 'Month', value: null }}
                    />

                    <RNPickerSelect
                        onValueChange={(value) => setDay(value)}
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

                    <RNPickerSelect
                        onValueChange={(value) => setYear(value)}
                        items={yearItems}
                        style={pickerSelectStyles}
                        placeholder={{ label: 'Year', value: null }}
                    />
                

                    <Text style={styles.text}> Insurance Provider</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Insurance Provider"
                        placeholderTextColor="#888"
                        value={insuranceProvider}
                        onChangeText={setInsuranceProvider}
                    />

                </SafeAreaView>
                </LinearGradient>
            </TouchableWithoutFeedback>
    );
}

export default PersonalInformation;

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
    },
    text: {
        fontSize: 15,
        fontWeight: "500",
        color: "white",
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center', 
      },
    title: {
        fontSize: 24,              
        fontWeight: 'bold',         
        color: '#FFFFFF',           
        textAlign: 'center',       
        marginBottom: 15,           
        letterSpacing: 1,           
    },

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
    },
});