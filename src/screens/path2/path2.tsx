import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Button } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from "../../components/ButtonCard";
import personal from '../../../src/assets/personal.jpg'
import allergen from '../../../src/assets/allergen.jpg'
import pill from '../../../src/assets/pill.jpg'
import needle from '../../../src/assets/syringe.jpg'

import GoBack from "../../components/GoBack";

const Screen2 = ({ navigation }) => {

  return (
    <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
      <SafeAreaView>

        <GoBack navigation={navigation} />

        <Text style={styles.title}>Medical and Personal Information</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Personal_Information_Screen')}>
            <ButtonCard title="Personal Information" image={personal} ></ButtonCard>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AllergenScreen')}>
            <ButtonCard title="Allergies" image={allergen} ></ButtonCard>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Drugs_Medications_Screen')}>
            <ButtonCard title="Drugs & Medications" image={pill} ></ButtonCard>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Medical_Conditions_Screen')}>
            <ButtonCard title="Medical Conditions" image={needle} ></ButtonCard>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonContainer: {
    marginRight: 15,
    marginLeft: 15
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
    color: "black",
  },

});