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
                        <Text style={styles.content}>{JSON.stringify(personalState, null, 2)}</Text> 

                        <Text style={styles.subtitle}>Allergies:</Text>
                        <Text style={styles.content}>{JSON.stringify(allergiesState, null, 2)}</Text>

                        <Text style={styles.subtitle}>Medical Condition:</Text>
                        <Text style={styles.content}>{JSON.stringify(conditionState, null, 2)}</Text>

                        <Text style={styles.subtitle}>Drugs & Medications</Text>
                        <Text style={styles.content}>{JSON.stringify(drugState, null, 2)}</Text>

                        <Text style={styles.subtitle}>Pain:</Text>
                        <Text style={styles.content}>{JSON.stringify(painState, null, 2)}</Text> 

                        <Text style={styles.subtitle}>Mental Health:</Text>
                        <Text style={styles.content}>{JSON.stringify(mentalState, null, 2)}</Text>

                        <Text style={styles.subtitle}>Alert & Oriented Assessment:</Text>
                        <Text style={styles.content}>{JSON.stringify(assessmentState, null, 2)}</Text> 
                
                        <Text style={styles.subtitle}>Do Not Assist:</Text>
                        <Text style={styles.content}>{JSON.stringify(input6State, null, 2)}</Text>
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
        marginTop: 10,
        textAlign: 'center',
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
