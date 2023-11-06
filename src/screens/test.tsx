import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Text, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DisplayStateComponent: React.FC = () => {
    // Pulling individual states from the store using the RootState type
    const textEntryState = useSelector((state: RootState) => state.textEntry);
    const directivesState = useSelector((state: RootState) => state.directivesSlice);
    const assistState = useSelector((state: RootState) => state.assistSlice);
    const painState = useSelector((state: RootState) => state.painSlice);
    const assessmentState = useSelector((state: RootState) => state.assessmentSlice);
    const personalState = useSelector((state: RootState) => state.personalSlice);
    const allergiesState = useSelector((state: RootState) => state.allergiesSlice);
    const drugState = useSelector((state: RootState) => state.drugSlice);
    const conditionState = useSelector((state: RootState) => state.conditionSlice);
    const mentalState = useSelector((state: RootState) => state.mentalSlice);
    const painFeelState = useSelector((state: RootState) => state.painFeelSlice);
    const painBadState = useSelector((state: RootState) => state.painBadSlice);
    const illnessState = useSelector((state: RootState) => state.illnessSlice);
    const intakeState = useSelector((state: RootState) => state.intakeSlice);
    const vomitState = useSelector((state: RootState) => state.vomitSlice);
    const bathroomState = useSelector((state: RootState) => state.bathroomSlice);
    const signsState = useSelector((state: RootState) => state.signsSlice);

    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 60 }}>

                        <Text style={styles.title}>Summary</Text>

                        <Text style={styles.subtitle}>
                            {JSON.stringify(textEntryState, null, 2) !== '""' && "Text Tab:"}
                        </Text>
                        <Text style={styles.content}>{JSON.stringify(textEntryState, null, 2).replaceAll('"', '')}</Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(directivesState.resuscitate, null, 2) !== 'false' ||
                                JSON.stringify(directivesState.intubate, null, 2) !== 'false')
                                && "Advanced Medical Directives:"}
                        </Text>
                        <Text style={styles.content}>
                            <Text style={styles.redlabel}>
                                {JSON.stringify(directivesState.resuscitate, null, 2) !== 'false' && "DO NOT RESUSCITATE\n"}
                                {JSON.stringify(directivesState.intubate, null, 2) !== 'false' && "DO NOT INTUBATE"}
                            </Text>
                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(personalState.name, null, 2) !== '""' ||
                                JSON.stringify(personalState.DOB.month, null, 2) !== '""' ||
                                JSON.stringify(personalState.DOB.day, null, 2) !== '""' ||
                                JSON.stringify(personalState.DOB.year, null, 2) !== '""' ||
                                JSON.stringify(personalState.insurance, null, 2) !== '""')
                                && "Personal Information:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(personalState.name, null, 2) !== '""' && "Name: "}
                            </Text>
                            {JSON.stringify(personalState.name, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(personalState.DOB.month, null, 2) !== '""' && "\nMonth of Birth: "}
                            </Text>
                            {JSON.stringify(personalState.DOB.month, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(personalState.DOB.day, null, 2) !== '""' && "\nDate of Birth: "}
                            </Text>
                            {JSON.stringify(personalState.DOB.day, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(personalState.DOB.year, null, 2) !== '""' && "\nYear of Birth: "}
                            </Text>
                            {JSON.stringify(personalState.DOB.year, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(personalState.insurance, null, 2) !== '""' && "\nInsurance Provider: "}
                            </Text>
                            {JSON.stringify(personalState.insurance, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(allergiesState.foods, null, 2) !== '""' ||
                                JSON.stringify(allergiesState.medications, null, 2) !== '""' ||
                                JSON.stringify(allergiesState.environmental, null, 2) !== '""' ||
                                JSON.stringify(allergiesState.other, null, 2) !== '""')
                                && "Allergies:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(allergiesState.foods, null, 2) !== '""' && "Foods: "}
                            </Text>
                            {JSON.stringify(allergiesState.foods, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(allergiesState.medications, null, 2) !== '""' && "\nMedications: "}
                            </Text>
                            {JSON.stringify(allergiesState.medications, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(allergiesState.environmental, null, 2) !== '""' && "\nEnvironmental: "}
                            </Text>
                            {JSON.stringify(allergiesState.environmental, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(allergiesState.other, null, 2) !== '""' && "\nOther: "}
                            </Text>
                            {JSON.stringify(allergiesState.other, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(drugState.inhaler, null, 2) !== '""' ||
                                JSON.stringify(drugState.thinner, null, 2) !== '""' ||
                                JSON.stringify(drugState.sexual, null, 2) !== '""' ||
                                JSON.stringify(drugState.narcotics, null, 2) !== '""')
                                && "Drugs & Medications:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(drugState.inhaler, null, 2) !== '""' && "Inhaler: "}
                            </Text>
                            {JSON.stringify(drugState.inhaler, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(drugState.thinner, null, 2) !== '""' && "\nBlood Thinners: "}
                            </Text>
                            {JSON.stringify(drugState.thinner, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(drugState.sexual, null, 2) !== '""' && "\nSexual Enhancement: "}
                            </Text>
                            {JSON.stringify(drugState.sexual, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(drugState.narcotics, null, 2) !== '""' && "\nNarcotics: "}
                            </Text>
                            {JSON.stringify(drugState.narcotics, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(conditionState.diabetes, null, 2) !== '""' ||
                                JSON.stringify(conditionState.breathing, null, 2) !== '""' ||
                                JSON.stringify(conditionState.sexual, null, 2) !== '""' ||
                                JSON.stringify(conditionState.pregnant, null, 2) !== '""' ||
                                JSON.stringify(conditionState.other, null, 2) !== '""')
                                && "Medical Condition:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.diabetes, null, 2) !== '""' && "Diabetes: "}
                            </Text>
                            {JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.breathing, null, 2) !== '""' && "\nBreathing Conditions: "}
                            </Text>
                            {JSON.stringify(conditionState.breathing, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.sexual, null, 2) !== '""' && "\nSexually Active: "}
                            </Text>
                            {JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.pregnant, null, 2) !== '""' && "\nPregnant: "}
                            </Text>
                            {JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.other, null, 2) !== '""' && "\nOther: "}
                            </Text>
                            {JSON.stringify(conditionState.other, null, 2).replaceAll('"', '')}
                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(painState.when, null, 2) !== '""' ||
                                JSON.stringify(painState.better, null, 2) !== '""' ||
                                JSON.stringify(painState.where, null, 2) !== '""' ||
                                JSON.stringify(painFeelState.feel, null, 2) !== '""' ||
                                JSON.stringify(painBadState.how, null, 2) !== '""')
                                && "Pain:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(painState.when, null, 2) !== '""' && "When did it start?: "}
                            </Text>
                            {JSON.stringify(painState.when, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painState.better, null, 2) !== '""' && "\nWhat makes it better/worse?: "}
                            </Text>
                            {JSON.stringify(painState.better, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painState.where, null, 2) !== '""' && "\nDoes it move?: "}
                            </Text>
                            {JSON.stringify(painState.where, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painFeelState.feel, null, 2) !== '""' && "\nWhat does it feel like?: "}
                            </Text>
                            {JSON.stringify(painFeelState.feel, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painFeelState.feelBtn, null, 2) !== '""' && "\nWhat does it feel like (button)?: "}
                            </Text>
                            {JSON.stringify(painFeelState.feelBtn, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painBadState.how, null, 2) !== '""' && "\nHow bad does it hurt?: "}
                            </Text>
                            {JSON.stringify(painBadState.how, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(illnessState.whathappened, null, 2) !== '""' ||
                                JSON.stringify(illnessState.other, null, 2) !== '""')
                                && "Illness/Injury:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(illnessState.whathappened, null, 2) !== '""' && "What happened?: "}
                            </Text>
                            {JSON.stringify(illnessState.whathappened, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(illnessState.other, null, 2) !== '""' && "\nOther: "}
                            </Text>
                            {JSON.stringify(illnessState.other, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(intakeState.when, null, 2) !== '""' ||
                                JSON.stringify(intakeState.what, null, 2) !== '""' ||
                                JSON.stringify(vomitState.when, null, 2) !== '""' ||
                                JSON.stringify(bathroomState.when, null, 2) !== '""')
                                && "Intake/Output:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(intakeState.when, null, 2) !== '""' && "When did you last eat/drink?: "}
                            </Text>
                            {JSON.stringify(intakeState.when, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(intakeState.what, null, 2) !== '""' && "\nWhat did you last eat/drink?: "}
                            </Text>
                            {JSON.stringify(intakeState.what, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(vomitState.when, null, 2) !== '""' && "\nWhen did you vomit?: "}
                            </Text>
                            {JSON.stringify(vomitState.when, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(bathroomState.when, null, 2) !== '""' && "\nWhen did you last use the bathroom?: "}
                            </Text>
                            {JSON.stringify(bathroomState.when, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {JSON.stringify(signsState.other, null, 2) !== '""' && "Signs and Symptoms:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(signsState.other, null, 2) !== '""' && "Other: "}
                            </Text>
                            {JSON.stringify(signsState.other, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {JSON.stringify(mentalState.mental, null, 2) !== '""' && "Mental Health:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(mentalState.mental, null, 2) !== '""' && "What's wrong?: "}
                            </Text>
                            {JSON.stringify(mentalState.mental, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(assessmentState.name, null, 2) !== '""' ||
                                JSON.stringify(assessmentState.where, null, 2) !== '""' ||
                                JSON.stringify(assessmentState.weekday, null, 2) !== '""')
                                && "Alert & Oriented Assessment:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(assessmentState.name, null, 2) !== '""' && "What's your name?: "}
                            </Text>
                            {JSON.stringify(assessmentState.name, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(assessmentState.where, null, 2) !== '""' && "\nWhere are you?: "}
                            </Text>
                            {JSON.stringify(assessmentState.where, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(assessmentState.weekday, null, 2) !== '""' && "\nWhat's the day of the week?: "}
                            </Text>
                            {JSON.stringify(assessmentState.weekday, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {JSON.stringify(assistState.concern, null, 2) !== '""' && "Do Not Assist:"}
                        </Text>
                        <Text style={styles.content}>

                            <Text style={styles.label}>
                                {JSON.stringify(assistState.concern, null, 2) !== '""' && "EMT's Concern to Patient: "}
                            </Text>
                            {JSON.stringify(assistState.concern, null, 2).replaceAll('"', '')}

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
    redlabel: {
        fontWeight: 'bold',
        color: 'red',
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
