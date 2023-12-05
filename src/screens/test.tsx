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
    const nitroState = useSelector((state: RootState) => state.nitroSlice);

    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 60 }}>

                        <Text style={styles.title}>Summary</Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(textEntryState.text, null, 2) !== '""' ||
                                JSON.stringify(textEntryState.savedtext, null, 2) != '""')
                                && "Text Tab:"}
                        </Text>
                        <Text style={styles.content}>
                            <Text style={styles.label}>
                                {JSON.stringify(textEntryState.text, null, 2) !== '""' && "Current Text: "}
                            </Text>
                            {JSON.stringify(textEntryState.text, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(textEntryState.savedtext, null, 2) !== '""' && "\nSaved Text: "}
                            </Text>
                            {JSON.stringify(textEntryState.savedtext, null, 2).replaceAll('"', '')}
                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(directivesState.polst, null, 2) !== 'false' ||
                                JSON.stringify(directivesState.resuscitate, null, 2) !== 'false' ||
                                JSON.stringify(assistState.assist, null, 2) !== '""')
                                && "Medical Directives:"}
                        </Text>
                        <Text style={styles.content}>
                            <Text style={styles.redlabel}>
                                {JSON.stringify(directivesState.polst, null, 2) !== 'false' && "PATIENT HAS A POLST\n"}
                                {JSON.stringify(directivesState.resuscitate, null, 2) !== 'false' && "DO NOT RESUSCITATE / INTUBATE\n"}
                                {JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noHelp" && "Do not help the patient."}
                                {JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noHospital" && "Help the patient."}
                                {JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "hospital" && "Hospitalize the patient."}
                                {JSON.stringify(assistState.assist, null, 2).replaceAll('"', '') === "noAssist" && "Do not hospitalize the patient."}
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
                            {JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '') === "y" && "Patient has diabetes."}
                            {JSON.stringify(conditionState.diabetes, null, 2).replaceAll('"', '') === "n" && "Patient does not have diabetes."}

                            {JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '') === "y" && "\nPatient is sexually active."}
                            {JSON.stringify(conditionState.sexual, null, 2).replaceAll('"', '') === "n" && "\nPatient is not sexually active."}

                            {JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '') === "y" && "\nPatient is pregnant."}
                            {JSON.stringify(conditionState.pregnant, null, 2).replaceAll('"', '') === "n" && "\nPatient is not pregnant."}

                            <Text style={styles.label}>
                                {JSON.stringify(conditionState.breathing, null, 2) !== '""' && "\nBreathing Conditions: "}
                            </Text>
                            {JSON.stringify(conditionState.breathing, null, 2).replaceAll('"', '')}

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
                                JSON.stringify(painFeelState.describe, null, 2) !== '""' ||
                                JSON.stringify(painBadState.how, null, 2) !== '""' ||
                                JSON.stringify(painBadState.describe, null, 2) !== '""')
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
                                {JSON.stringify(painFeelState.describe, null, 2) !== '""' && "\nWhat does it feel like?: "}
                            </Text>
                            {JSON.stringify(painFeelState.describe, null, 2).replaceAll('"', '') === "sharp" && "Pain feels sharp."}
                            {JSON.stringify(painFeelState.describe, null, 2).replaceAll('"', '') === "dull" && "Pain feels dull."}
                            {JSON.stringify(painFeelState.describe, null, 2).replaceAll('"', '') === "throbbing" && "Pain feels throbbing."}
                            {JSON.stringify(painFeelState.describe, null, 2).replaceAll('"', '') === "hot" && "Pain feels hot."}

                            <Text style={styles.label}>
                                {JSON.stringify(painFeelState.feel, null, 2) !== '""' && "\nWhat else?: "}
                            </Text>
                            {JSON.stringify(painFeelState.feel, null, 2).replaceAll('"', '')}

                            <Text style={styles.label}>
                                {JSON.stringify(painBadState.describe, null, 2) !== '""' && "\nHow bad does it hurt?: "}
                            </Text>
                            {JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "mild" && "Pain is mild."}
                            {JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "moderate" && "Pain is moderate."}
                            {JSON.stringify(painBadState.describe, null, 2).replaceAll('"', '') === "severe" && "Pain is severe."}

                            <Text style={styles.label}>
                                {JSON.stringify(painBadState.how, null, 2) !== '""' && "\nWhat else?: "}
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
                                JSON.stringify(vomitState.blood, null, 2) !== '""' ||
                                JSON.stringify(vomitState.when, null, 2) !== '""' ||
                                JSON.stringify(bathroomState.blood, null, 2) !== '""' ||
                                JSON.stringify(bathroomState.constipation, null, 2) !== '""' ||
                                JSON.stringify(bathroomState.diarrhea, null, 2) !== '""' ||
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

                            {JSON.stringify(vomitState.blood, null, 2).replaceAll('"', '') === "y" && "\nPatient has vomited blood."}
                            {JSON.stringify(vomitState.blood, null, 2).replaceAll('"', '') === "n" && "\nPatient has not vomited blood."}

                            <Text style={styles.label}>
                                {JSON.stringify(vomitState.when, null, 2) !== '""' && "\nWhen did you vomit?: "}
                            </Text>
                            {JSON.stringify(vomitState.when, null, 2).replaceAll('"', '')}

                            {JSON.stringify(bathroomState.blood, null, 2).replaceAll('"', '') === "y" && "\nPatient had blood in stool."}
                            {JSON.stringify(bathroomState.blood, null, 2).replaceAll('"', '') === "n" && "\nPatient did not have blood in stool."}

                            {JSON.stringify(bathroomState.constipation, null, 2).replaceAll('"', '') === "y" && "\nPatient had constipation."}
                            {JSON.stringify(bathroomState.constipation, null, 2).replaceAll('"', '') === "n" && "\nPatient did not have constipation."}

                            {JSON.stringify(bathroomState.diarrhea, null, 2).replaceAll('"', '') === "y" && "\nPatient had diarrhea."}
                            {JSON.stringify(bathroomState.diarrhea, null, 2).replaceAll('"', '') === "n" && "\nPatient did not have diarrhea."}

                            <Text style={styles.label}>
                                {JSON.stringify(bathroomState.when, null, 2) !== '""' && "\nWhen did you last use the bathroom?: "}
                            </Text>
                            {JSON.stringify(bathroomState.when, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(signsState.lighthead, null, 2) !== '""' ||
                                JSON.stringify(signsState.other, null, 2) !== '""')
                                && "Signs and Symptoms:"}
                        </Text>
                        <Text style={styles.content}>

                            {JSON.stringify(signsState.lighthead, null, 2).replaceAll('"', '') === "y" && "\nPatient is feeling light-headedness, dizziness, or nausea."}
                            {JSON.stringify(signsState.lighthead, null, 2).replaceAll('"', '') === "n" && "\nPatient is not feeling light-headedness, dizziness, or nausea."}

                            <Text style={styles.label}>
                                {JSON.stringify(signsState.other, null, 2) !== '""' && "\nOther: "}
                            </Text>
                            {JSON.stringify(signsState.other, null, 2).replaceAll('"', '')}

                        </Text>

                        <Text style={styles.subtitle}>
                            {(JSON.stringify(nitroState.thinner, null, 2) !== '""' ||
                                JSON.stringify(nitroState.sexual, null, 2) !== '""')
                                && "Nitroglycerine Contraindiction Assessment:"}
                        </Text>
                        <Text style={styles.content}>

                            {JSON.stringify(nitroState.thinner, null, 2).replaceAll('"', '') === "y" && "Patient has taken blood thinners."}
                            {JSON.stringify(nitroState.thinner, null, 2).replaceAll('"', '') === "n" && "Patient has not taken blood thinners."}

                            {JSON.stringify(nitroState.sexual, null, 2).replaceAll('"', '') === "y" && "\nPatient has taken sexual drugs."}
                            {JSON.stringify(nitroState.sexual, null, 2).replaceAll('"', '') === "n" && "\nPatient has not taken sexual drugs."}

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
                            {JSON.stringify(assistState.concern, null, 2) !== '""' && "EMT's Concern to Patient:"}
                        </Text>
                        <Text style={styles.content}>
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
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        color: 'black',
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
        color: 'black',
        fontSize: 14,
        padding: 5,
        borderRadius: 5,
        textAlign: 'center',
    }
});

export default DisplayStateComponent;
