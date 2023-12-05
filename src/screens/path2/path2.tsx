import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Button } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from "../../components/ButtonCard";
import personal from '../../../src/assets/personal.jpg'
import allergen from '../../../src/assets/allergen.jpg'
import pill from '../../../src/assets/pill.jpg'
import needle from '../../../src/assets/syringe.jpg'

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Screen2 = ({ navigation }) => {

  const { t } = useTranslation()

  return (
    <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>

        <View style={styles.inlineContainer}>
            <GoBack navigation={navigation} />
            <Text style={styles.returnHomeText}>Home</Text>
        </View>

        <Text style={styles.title}>{t('path2.title')}</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Personal_Information_Screen')}>
            <ButtonCard title={t('path2.personalInfo')} image={personal} ></ButtonCard>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AllergenScreen')}>
            <ButtonCard title={t('path2.allergies')} image={allergen} ></ButtonCard>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Drugs_Medications_Screen')}>
            <ButtonCard title={t('path2.drugs')} image={pill} ></ButtonCard>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Medical_Conditions_Screen')}>
            <ButtonCard title={t('path2.medical')} image={needle} ></ButtonCard>
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
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    backgroundColor: '#f0f0f0', // Example background color
    padding: 10, // Example padding
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

});