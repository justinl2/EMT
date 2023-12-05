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
import SignsSymptoms from "../../../src/assets/signsSymptoms.jpg";
import intakeOutput from "../../../src/assets/intakeOutput.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { setWhatHappened, setOther, clearAll } from '../../redux/features/text/illnessSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import ClearButton from "../../components/ClearButton";

import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const IllnessInjury = ({ navigation }) => {

  const illnessState = useSelector((state: RootState) => state.illnessSlice);

  const dispatch = useDispatch();

  const handleSetWhatHappened = (value) => dispatch(setWhatHappened(value));
  const handleSetOther = (value) => dispatch(setOther(value));

  const { t } = useTranslation()


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>

        <SafeAreaView style={styles.container}>

          <View style={styles.inlineContainer}>
                <GoBack navigation={navigation} />
                <Text style={styles.returnHomeText}> What's Wrong</Text>
          </View>

          <View style={styles.work}>
            <ClearButton clearAllFunc={clearAll} />
          </View>
          <Text style={styles.title}>{t('illness_injury.title')}</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Intake_Output_Screen")}
            >
              <ButtonCard title={t('illness_injury.intake')} image={intakeOutput} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("Signs_Symptoms_Screen")}
            >
              <ButtonCard title={t('illness_injury.signs')} image={SignsSymptoms} />
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>{t('illness_injury.happened')}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={t('illness_injury.happened')}
            placeholderTextColor="#888"
            defaultValue={JSON.stringify(illnessState.whathappened, null, 2).replaceAll('"', '')}
            onChangeText={handleSetWhatHappened}
          />
          <Text style={styles.text}>{t('illness_injury.other')}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={t('illness_injury.other')}
            placeholderTextColor="#888"
            defaultValue={JSON.stringify(illnessState.other, null, 2).replaceAll('"', '')}
            onChangeText={handleSetOther}
          />

        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default IllnessInjury;

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
    color: "black",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 10,
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
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        paddingRight: 200,
      },
    returnHomeText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 7,
      },
      work: {
        top: -100,
      }
});