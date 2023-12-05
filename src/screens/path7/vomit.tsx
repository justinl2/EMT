import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import blood from "../../../src/assets/blood.jpg";
import SmallButton from '../../components/SmallButton';
import xmark from "../../../src/assets/x-mark.jpg";
import pressedXmark from "../../../src/assets/pressed-x-mark.jpg";
import blackCheck from "../../../src/assets/black-check.jpg";
import pressedBlackCheck from "../../../src/assets/pressed-black-check.jpg";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { setBlood, setWhen, clearAll } from '../../redux/features/text/vomitSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Vomit = ({ navigation }) => {

  const ClearButton = ({ clearAllFunc }) => {
    const dispatch = useDispatch();
    const handleClearAll = (value) => {
      dispatch(value);
      setIsBloodYesPressed(false);
      setIsBloodNoPressed(false);
    };
    return (
      <TouchableOpacity style={styles.clearAllButton} onPress={() => handleClearAll(clearAllFunc())}>
        <Ionicons name="trash-outline" style={styles.clear} size={40} />
      </TouchableOpacity>
    );
  };

  const vomitState = useSelector((state: RootState) => state.vomitSlice);

  const dispatch = useDispatch();

  const [localBlood, setLocalBlood] = useState('');
  const [isBloodYesPressed, setIsBloodYesPressed] = useState(JSON.stringify(vomitState.blood, null, 2).replaceAll('"', '') === "y");
  const [isBloodNoPressed, setIsBloodNoPressed] = useState(JSON.stringify(vomitState.blood, null, 2).replaceAll('"', '') === "n");

  const [localWhen, setLocalWhen] = useState("");

  const handleSetBlood = (value) => {
    if (value === "y") {
      setIsBloodYesPressed((prev) => !prev);
      isBloodYesPressed ? (value = "") : null;
      setIsBloodNoPressed(false)
    }
    else if (value === "n") {
      setIsBloodNoPressed((prev) => !prev);
      isBloodNoPressed ? (value = "") : null;
      setIsBloodYesPressed(false)
    }
    dispatch(setBlood(value));
    setLocalBlood(value);
  };

  const handleSetWhen = (value) => {
    dispatch(setWhen(value));
    setLocalWhen(value);
  };

  const { t } = useTranslation();


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>

          <View style={styles.inlineContainer}>
                <GoBack navigation={navigation} />
                <Text style={styles.returnHomeText}>Last Intake/Output</Text>
          </View>

          <View style={styles.work}>
            <ClearButton clearAllFunc={clearAll} />
          </View>


          <Text style={styles.title}>{t('vomit.title')}</Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.imageTitle}>{t('vomit.blood')}</Text>
            <Image style={styles.imageBox} source={(blood)} />

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleSetBlood("y")}>
                <SmallButton title={t('vomit.yes')} image={isBloodYesPressed ? pressedBlackCheck : blackCheck} ></SmallButton>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSetBlood("n")}>
                <SmallButton title={t('vomit.no')} image={isBloodNoPressed ? pressedXmark : xmark} ></SmallButton>
              </TouchableOpacity>
            </View>

          </View>
          <Text style={styles.text}>{t('vomit.when')}</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Type your message here..."
            placeholderTextColor="#888"
            defaultValue={JSON.stringify(vomitState.when, null, 2).replaceAll('"', '')}
            onChangeText={handleSetWhen}
          />

        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Vomit;

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
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
  },
  imageBox: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  clear: {
    alignSelf: 'center',
    color: 'black',
  },
  clearAllButton: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 50,
    right: 15
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
  work:{
    top: -100,
    right: 15,
  }
});
