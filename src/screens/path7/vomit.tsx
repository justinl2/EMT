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
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import ButtonCard from "../../components/ButtonCard";
import alert from "../../../src/assets/alert.jpg";
import SmallButton from '../../components/SmallButton';
import xmark from "../../../src/assets/x-mark.jpg";
import blackCheck from "../../../src/assets/black-check.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { setWhen } from '../../redux/features/text/vomitSlice';

const Vomit = ({ navigation }) => {

  const dispatch = useDispatch();
  const [localWhen, setLocalWhen] = useState("");
  const handleSetWhen = (value) => {
    dispatch(setWhen(value));
    setLocalWhen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>


        <SafeAreaView style={styles.container}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Have You Vomited?</Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.imageTitle}>Did you vomit blood?</Text>
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

          <Text style={styles.title}>When did you Vomit?</Text>

          <TextInput
            style={styles.inputField}
            placeholder="Type your message here..."
            placeholderTextColor="#888"
            value={localWhen}
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
  },
  imageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
});
