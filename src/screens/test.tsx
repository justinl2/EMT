import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const DisplayStateComponent: React.FC = () => {
    // Pulling individual states from the store using the RootState type
    const textEntryState = useSelector((state: RootState) => state.textEntry);
    const input6State = useSelector((state: RootState) => state.input6);
    const painState = useSelector((state: RootState) => state.painSlice); 
    const assessmentState = useSelector((state: RootState) => state.assessmentSlice);
    const personalState = useSelector((state: RootState) => state.personalSlice);
    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);
    const drugState = useSelector((state: RootState) => state.drugSlice);
    const conditionState = useSelector((state: RootState) => state.conditionSlice);
    const mentalState = useSelector((state: RootState) => state.mentalSlice);

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 60 }}>
                        <Text style={styles.title}>Summary of the Information:</Text>
                        <Text style={styles.subtitle}>Text Tab:</Text>
                        <Text style={styles.content}>{JSON.stringify(textEntryState, null, 2)}</Text>

                        <Text style={styles.subtitle}>Personal Information:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>Name: </Text>
                            {JSON.stringify(personalState.name, null, 2)}{"\n"}
                            <Text style={styles.label}>Month of Birth: </Text>
                            {JSON.stringify(personalState.DOB.month, null, 2)}{"\n"}
                            <Text style={styles.label}>Date of Birth: </Text>
                            {JSON.stringify(personalState.DOB.day, null, 2)}{"\n"}
                            <Text style={styles.label}>Year of Birth: </Text>
                            {JSON.stringify(personalState.DOB.year, null, 2)}{"\n"}
                            <Text style={styles.label}>Insurance Provider: </Text>
                            {JSON.stringify(personalState.insurance, null, 2)}
                        </Text>

                        <Text style={styles.subtitle}>Allergies:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>Foods: </Text>
                            {JSON.stringify(allergiesState.foods, null, 2)}{"\n"}
                            <Text style={styles.label}>Medications: </Text>
                            {JSON.stringify(allergiesState.medications, null, 2)}{"\n"}
                            <Text style={styles.label}>Environmental: </Text>
                            {JSON.stringify(allergiesState.environmental, null, 2)}{"\n"}
                            <Text style={styles.label}>Other: </Text>
                            {JSON.stringify(allergiesState.other, null, 2)}
                        </Text>

                        <Text style={styles.subtitle}>Drugs & Medications</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>Inhaler: </Text>
                            {JSON.stringify(drugState.inhaler, null, 2)}{"\n"}
                            <Text style={styles.label}>Blood Thinners: </Text>
                            {JSON.stringify(drugState.thinner, null, 2)}{"\n"}
                            <Text style={styles.label}>Sexual Enhancement: </Text>
                            {JSON.stringify(drugState.sexual, null, 2)}{"\n"}
                            <Text style={styles.label}>Narcotics: </Text>
                            {JSON.stringify(drugState.narcotics, null, 2)}
                        </Text>

                        <Text style={styles.subtitle}>Medical Condition:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>Diabetes: </Text>
                            {JSON.stringify(conditionState.diabetes, null, 2)}{"\n"}
                            <Text style={styles.label}>Breathing Conditions: </Text>
                            {JSON.stringify(conditionState.breathing, null, 2)}{"\n"}
                            <Text style={styles.label}>Sexually Active: </Text>
                            {JSON.stringify(conditionState.sexual, null, 2)}{"\n"}
                            <Text style={styles.label}>Pregnant: </Text>
                            {JSON.stringify(conditionState.pregnant, null, 2)}{"\n"}
                            <Text style={styles.label}>Other: </Text>
                            {JSON.stringify(conditionState.other, null, 2)}
                        </Text>

                        <Text style={styles.subtitle}>Pain:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>When did it start?: </Text>
                            {JSON.stringify(painState.when, null, 2)}{"\n"}
                            <Text style={styles.label}>What makes it better/worse?: </Text>
                            {JSON.stringify(painState.better, null, 2)}{"\n"}
                            <Text style={styles.label}>Does it move?: </Text>
                            {JSON.stringify(painState.where, null, 2)}
                        </Text> 

                        <Text style={styles.subtitle}>Mental Health:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>What's wrong?: </Text>
                            {JSON.stringify(mentalState.mental, null, 2)}
                        </Text>

                        <Text style={styles.subtitle}>Alert & Oriented Assessment:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>What's your name?: </Text>
                            {JSON.stringify(assessmentState.name, null, 2)}{"\n"}
                            <Text style={styles.label}>Where are you?: </Text>
                            {JSON.stringify(assessmentState.where, null, 2)}{"\n"}
                            <Text style={styles.label}>What's the day of the week?: </Text>
                            {JSON.stringify(assessmentState.weekday, null, 2)}
                        </Text> 
                
                        <Text style={styles.subtitle}>Do Not Assist:</Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>EMT's Concern to Patient: </Text>
                            {JSON.stringify(input6State, null, 2)}
                        </Text>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -50,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginTop: 10,
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
    },
    content: {
        color: 'white',
        fontSize: 14,
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
    }
});

export default DisplayStateComponent;
