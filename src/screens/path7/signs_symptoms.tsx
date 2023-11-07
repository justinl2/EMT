import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import mental from "../../../src/assets/mental.png";
import injury from "../../../src/assets/injury.jpg";
import alert from "../../../src/assets/alert.jpg";

import { useDispatch, useSelector } from 'react-redux';
import { setOther } from '../../redux/features/text/signsSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";

const SignsSymptoms = ({ navigation }) => {

    const signsState = useSelector((state: RootState) => state.signsSlice);

    const dispatch = useDispatch();
    const [localOther, setLocalOther] = useState("");
    const handleSetOther = (value) => {
        dispatch(setOther(value));
        setLocalOther(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#131624", "#f0ffff"]} style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <GoBack navigation={navigation} />
                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>

                        <Text style={styles.title}>Signs and Symptoms</Text>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate("Pain_Screen")}
                            >
                            <ButtonCard title="Pain" image={alert} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate("Nitro_Assessment_Screen")}
                            >
                            <ButtonCard
                                title="Trouble breathing, chest tightness"
                                image={alert}
                            />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate("Intake_Output_Screen")}
                            >
                            <ButtonCard title="Stomach/gastrointestinal issues" image={alert} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate("Main")}
                            >
                            <ButtonCard
                                title="Light-headedness, dizziness, nausea"
                                image={alert}
                            />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>Other:</Text>

                        <TextInput
                            style={styles.inputField}
                            placeholder="Type your message here..."
                            placeholderTextColor="#888"
                            defaultValue={JSON.stringify(signsState.other, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetOther}
                        />
                    </KeyboardAvoidingView>
                 </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default SignsSymptoms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
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
