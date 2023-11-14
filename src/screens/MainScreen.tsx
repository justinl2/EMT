import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonCard from '../components/ButtonCard';
import pill from '../assets/pill.jpg';
import clipboard from '../assets/clipboard.jpg'
import pain from '../assets/pain.jpg'
import check from '../assets/check.jpg'
import alert from '../assets/alert.jpg'
import assist from '../assets/assist.jpg'
import { useTranslation } from 'react-i18next'
import '../services/i18next';





const HomeScreen = ({ navigation }) => {

  const { t } = useTranslation()

  return (
    <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('FirstPath')}>
            <ButtonCard title={t('mainScreen.advanced')} image={pill} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Med_and_Personal')}>
            <ButtonCard title={t('mainScreen.medicalInfo')} image={clipboard} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Pain_Screen')}>
            <ButtonCard title={t('mainScreen.pain')} image={pain} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Whats_Wrong_Screen')}>
            <ButtonCard title={t('mainScreen.whatsWrong')} image={check} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Alert_Screen')}>
            <ButtonCard title={t('mainScreen.alert')} image={alert} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SixthPath')}>
            <ButtonCard title={t('mainScreen.doNot')} image={assist} />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
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
});

export default HomeScreen;
