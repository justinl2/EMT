import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';


const DisplayStateComponent: React.FC = () => {
    // Pulling individual states from the store using the RootState type
    const textEntryState = useSelector((state: RootState) => state.textEntry);
    const input6State = useSelector((state: RootState) => state.input6);
    const painState = useSelector((state: RootState) => state.painSlice); 
    const assessmentState = useSelector((state: RootState) => state.assessmentSlice);
    const personalState = useSelector((state: RootState) => state.personalSlice);
    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);
    const drugState = useSelector((state: RootState) => state.drugSlice);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Summary</Text>
                <Text style={styles.subtitle}>Text Entry State</Text>
                <Text style={styles.content}>{JSON.stringify(textEntryState, null, 2)}</Text>
                
                <Text style={styles.subtitle}>Input6 State</Text>
                <Text style={styles.content}>{JSON.stringify(input6State, null, 2)}</Text>

                <Text style={styles.subtitle}>Pain State</Text>
                <Text style={styles.content}>{JSON.stringify(painState, null, 2)}</Text> 

                <Text style={styles.subtitle}>Assessment State</Text>
                <Text style={styles.content}>{JSON.stringify(assessmentState, null, 2)}</Text> 

                <Text style={styles.subtitle}>Personal State</Text>
                <Text style={styles.content}>{JSON.stringify(personalState, null, 2)}</Text> 

                <Text style={styles.subtitle}>Allergies State</Text>
                <Text style={styles.content}>{JSON.stringify(allergiesState, null, 2)}</Text>

                <Text style={styles.subtitle}>Drug State</Text>
                <Text style={styles.content}>{JSON.stringify(drugState, null, 2)}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
    },
    content: {
        fontSize: 14,
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 5,
    }
});

export default DisplayStateComponent;
