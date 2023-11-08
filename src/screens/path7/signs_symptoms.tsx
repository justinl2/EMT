import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
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
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <GoBack navigation={navigation} />
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>



            <Text style={styles.title}>Signs and Symptoms</Text>

            <View style={styles.containerRow}>
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

            <View style={styles.containerRow}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Intake_Output_Screen")}
              >
                <ButtonCard title="Stomach/gastrointestinal issues" image={alert} />
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.imageTitle}>Light-headedness, dizziness, nausea?</Text>
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
    fontSize: 15,
    fontWeight: "500",
    color: "white",
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    alignSelf: 'center',
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
