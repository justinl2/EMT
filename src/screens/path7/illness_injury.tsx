import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
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

const IllnessInjury = ({ navigation }) => {
    const [whatHappened, setWhatHappened] = useState("");
    const [other, setOther] = useState("");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
              <SafeAreaView style={styles.container}>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
                <Text style={styles.title}>Illness/Injury</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Intake_Output_Screen")}
                  >
                    <ButtonCard title="Last intake / output" image={alert} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Signs_Symptoms_Screen")}
                  >
                    <ButtonCard title="Signs and symptoms" image={alert} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.title}>What happened?</Text>

                <TextInput
                  style={styles.inputField}
                  placeholder="Type your message here..."
                  placeholderTextColor="#888"
                  value={whatHappened}
                  onChangeText={setWhatHappened}
                />

                <Text style={styles.title}>Other:</Text>

                <TextInput
                  style={styles.inputField}
                  placeholder="Type your message here..."
                  placeholderTextColor="#888"
                  value={other}
                  onChangeText={setOther}
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
  },
});