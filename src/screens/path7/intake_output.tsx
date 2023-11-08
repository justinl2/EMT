import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import mental from "../../../src/assets/mental.png";
import injury from "../../../src/assets/injury.jpg";
import alert from "../../../src/assets/alert.jpg";

import { useDispatch, useSelector } from 'react-redux';
import { setWhen, setWhat } from '../../redux/features/text/intakeSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";

const IntakeOutput = ({ navigation }) => {

    const intakeState = useSelector((state: RootState) => state.intakeSlice);

    const dispatch = useDispatch();
    const [localWhen, setLocalWhen] = useState('');
    const [localWhat, setLocalWhat] = useState('');

    const handleSetWhen = (value) => {
        dispatch(setWhen(value));
        setLocalWhen(value);
    };

    const handleSetWhat = (value) => {
        dispatch(setWhat(value));
        setLocalWhat(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#131624", "#f0ffff"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <GoBack navigation={navigation} />
                <Text style={styles.title}>Last Intake/Output</Text>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Vomit_Screen")}
                    >
                    <ButtonCard title="Have you vomited?" image={alert} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Bathroom_Screen")}
                    >
                    <ButtonCard title="When did you last use the bathroom?" image={alert} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>When did you last eat/drink?</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="Type your message here..."
                    placeholderTextColor="#888"
                    defaultValue={JSON.stringify(intakeState.when, null, 2).replaceAll('"', '')}
                    onChangeText={handleSetWhen}
                />

                <Text style={styles.title}>What did you last eat/drink?</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="Type your message here..."
                    placeholderTextColor="#888"
                    defaultValue={JSON.stringify(intakeState.what, null, 2).replaceAll('"', '')}
                    onChangeText={handleSetWhat}
                />
                </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default IntakeOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#333333",
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 15,
    letterSpacing: 1,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
  inputField: {
    height: 40,
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "black",
      marginBottom: 10,
      width: "80%",
      alignSelf: 'center'
  },
});
