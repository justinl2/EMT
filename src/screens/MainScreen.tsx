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
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { clearAll as clearAllAllergies } from '../redux/features/text/allergiesSlice';
import { clearAll as clearAllAssessment } from '../redux/features/text/assessmentSlice';
import { clearAll as clearAllAssist } from '../redux/features/text/assistSlice';
import { clearAll as clearAllBathroom } from '../redux/features/text/bathroomSlice';
import { clearAll as clearAllCondition } from '../redux/features/text/conditionSlice';
import { clearAll as clearAllDirectives } from '../redux/features/text/directivesSlice';
import { clearAll as clearAllDrug } from '../redux/features/text/drugSlice';
import { clearAll as clearAllIllness } from '../redux/features/text/illnessSlice';
import { clearAll as clearAllIntake } from '../redux/features/text/intakeSlice';
import { clearAll as clearAllMental } from '../redux/features/text/mentalSlice';
import { clearAll as clearAllNitro } from '../redux/features/text/nitroSlice';
import { clearAll as clearAllPainBad } from '../redux/features/text/painBadSlice';
import { clearAll as clearAllPainFeel } from '../redux/features/text/painFeelSlice';
import { clearAll as clearAllPain } from '../redux/features/text/painSlice';
import { clearAll as clearAllPersonal } from '../redux/features/text/personalSlice';
import { clearAll as clearAllSigns } from '../redux/features/text/signsSlice';
import { clearText as clearAllText } from '../redux/features/text/textSlice';
import { clearAll as clearAllVomit } from '../redux/features/text/vomitSlice';



const HomeScreen = ({ navigation }) => {

  const { t } = useTranslation()
  const NewSession = () => {
    const dispatch = useDispatch();
    const handleNewSession = () => {
      dispatch(clearAllAllergies());
      dispatch(clearAllAssessment());
      dispatch(clearAllAssist());
      dispatch(clearAllBathroom());
      dispatch(clearAllCondition());
      dispatch(clearAllDirectives());
      dispatch(clearAllDrug());
      dispatch(clearAllIllness());
      dispatch(clearAllIntake());
      dispatch(clearAllMental());
      dispatch(clearAllNitro());
      dispatch(clearAllPainBad());
      dispatch(clearAllPainFeel());
      dispatch(clearAllPain());
      dispatch(clearAllPersonal());
      dispatch(clearAllSigns());
      dispatch(clearAllText());
      dispatch(clearAllVomit());
      ;
    };
    return (
      <TouchableOpacity style={styles.newSessionButton} onPress={() => handleNewSession()}>
        <Text style={styles.buttonText}>{t('mainScreen.newSession')}</Text>
      </TouchableOpacity>
    );
  };

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


        <NewSession />

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
  newSessionButton: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
