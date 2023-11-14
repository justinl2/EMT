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
import pressedBlackCheck from "../../../src/assets/pressed-black-check.jpg";
import xmark from "../../../src/assets/x-mark.jpg";
import pressedXmark from "../../../src/assets/pressed-x-mark.jpg";
import SmallButton from '../../components/SmallButton';

import { useDispatch, useSelector } from 'react-redux';
import { setLighthead, setOther } from '../../redux/features/text/signsSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';


const SignsSymptoms = ({ navigation }) => {

  const signsState = useSelector((state: RootState) => state.signsSlice);

  const dispatch = useDispatch();

  const [isLightheadYesPressed, setIsLightheadYesPressed] = useState(JSON.stringify(signsState.lighthead, null, 2).replaceAll('"', '') === "y");
  const [isLightheadNoPressed, setIsLightheadNoPressed] = useState(JSON.stringify(signsState.lighthead, null, 2).replaceAll('"', '') === "n");

  const handleSetLighthead = (value) => {
    if (value === "y") {
      setIsLightheadYesPressed((prev) => !prev);
      isLightheadYesPressed ? (value = "") : null;
      setIsLightheadNoPressed(false)
    }
    else if (value === "n") {
      setIsLightheadNoPressed((prev) => !prev);
      isLightheadNoPressed ? (value = "") : null;
      setIsLightheadYesPressed(false)
    }
    dispatch(setLighthead(value));
  };
  const handleSetOther = (value) => dispatch(setOther(value));
  const { t } = useTranslation();


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <GoBack navigation={navigation} />
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>

            <Text style={styles.title}>{t('signs_symptoms.title')}</Text>

            <View style={styles.containerRow}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Pain_Screen")}
              >
                <ButtonCard title={t('signs_symptoms.pain')} image={alert} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Nitro_Assessment_Screen")}
              >
                <ButtonCard
                  title={t('signs_symptoms.breathing')}
                  image={alert}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.containerRow}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("Intake_Output_Screen")}
              >
                <ButtonCard title={t('signs_symptoms.stomach')} image={alert} />
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.imageTitle}>{t('signs_symptoms.dizzy')}</Text>
                <Image style={styles.imageBox} source={(alert)} />
                <View style={styles.buttonRow}>
                  <TouchableOpacity onPress={() => handleSetLighthead("y")}>
                    <SmallButton title={t('signs_symptoms.yes')} image={isLightheadYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSetLighthead("n")}>
                    <SmallButton title={t('signs_symptoms.no')} image={isLightheadNoPressed ? pressedXmark : xmark} ></SmallButton>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <Text style={styles.text}>{t('signs_symptoms.other')}</Text>

            <TextInput
              style={styles.inputField}
              placeholder={t('signs_symptoms.other')}
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
    color: "black",
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
  },
  imageTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
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
