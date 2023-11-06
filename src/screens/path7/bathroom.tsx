import {
    Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Button, TextInput,
    Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Image,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import mental from "../../../src/assets/mental.png";
import injury from "../../../src/assets/injury.jpg";
import alert from "../../../src/assets/alert.jpg";
import blackCheck from "../../../src/assets/black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import SmallButton from '../../components/SmallButton';

import { useDispatch, useSelector } from 'react-redux';
import { setWhen } from '../../redux/features/text/bathroomSlice';

const Bathroom = ({ navigation }) => {

    const dispatch = useDispatch();
    const [localWhen, setLocalWhen] = useState("");
    const handleSetWhen = (value) => {
        dispatch(setWhen(value));
        setLocalWhen(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">

                        <SafeAreaView style={styles.container}>
                            <Button title="Go Back" onPress={() => navigation.goBack()} />

                            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
                                <Text style={styles.title}>When Did You Last Use the Bathroom?</Text>

                                <View style={styles.containerRow}>
                                    <View style={styles.buttonContainer}>
                                        <Text style={styles.imageTitle}>Was there blood?</Text>
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
                                        <Text style={styles.imageTitle}>Constipation</Text>
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

                                <View style={styles.containerRow}>
                                    <View style={styles.buttonContainer}>
                                        <Text style={styles.imageTitle}>Diarrhea?</Text>
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
                                    <TouchableOpacity
                                        style={styles.buttonContainer}
                                        onPress={() => navigation.navigate("Pain_Screen")}
                                    >
                                        <ButtonCard title="Was it painful?" image={alert} />
                                    </TouchableOpacity>
                                </View>



                                <Text style={styles.title}>When did you last use the bathroom?</Text>

                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Type your message here..."
                                    placeholderTextColor="#888"
                                    value={localWhen}
                                    onChangeText={handleSetWhen}
                                />
                            </KeyboardAvoidingView>
                        </SafeAreaView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default Bathroom;

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
        marginBottom: 15,
        letterSpacing: 1,
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
    inputField: {
        height: 40,
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "black",
        marginBottom: 10,
    },
});
