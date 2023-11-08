import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import ButtonCard from "../../components/ButtonCard";
import alert from '../../../src/assets/alert.jpg';
import blackCheck from "../../../src/assets/black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import SmallButton from '../../components/SmallButton';

import GoBack from "../../components/GoBack";

const NitroAssessment = ({ navigation }) => {
    return (
        <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


            <SafeAreaView style={styles.container}>
                <GoBack navigation={navigation} />
                <Text style={styles.title}>Nitroglycerine Contraindiction Assessmnet</Text>

                <View style={styles.containerRow}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.imageTitle}>Blood thinners (Aspirin, Warfarin, etc?)</Text>
                        <Image style={styles.imageBox} source={(alert)} />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <SmallButton title="Yes" image={blackCheck} ></SmallButton>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <SmallButton title="No" image={xmark} ></SmallButton>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.imageTitle}>Sexual drugs in the last 24 hours?</Text>
                        <Image style={styles.imageBox} source={(alert)} />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <SmallButton title="Yes" image={blackCheck} ></SmallButton>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('')}>
                                <SmallButton title="No" image={xmark} ></SmallButton>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default NitroAssessment;

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
    imageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 15,
        letterSpacing: 1,
        width: 140,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonSingle: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        justifyContent: "center",
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    buttonContainer: {
        marginRight: 15,
        marginLeft: 15,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    imageBox: {
        width: 140,
        height: 140,
        alignSelf: "center",
    },
    containerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
});



