import React, { useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { setFeel } from '../../redux/features/text/painFeelSlice';
import { RootState } from '../../redux/store';

import GoBack from "../../components/GoBack";
import { useTranslation } from 'react-i18next'
import '../../services/i18next';

const Feel = ({ navigation }) => {

  const painFeelState = useSelector((state: RootState) => state.painFeelSlice);

  const dispatch = useDispatch();

  const handleSetFeel = (value) => dispatch(setFeel(value));

  const { t } = useTranslation()


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["lightgray", "paleturquoise"]} style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>

          <KeyboardAvoidingView behavior="padding">
            <GoBack navigation={navigation} />
            <Text style={styles.title}>{t('feel_like.title')}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>{t('feel_like.sharp')}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>{t('feel_like.dull')}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>{t('feel_like.throbbing')}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.buttonText}>{t('feel_like.hot')}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.textInputContainer}>
              <Text style={styles.otherLabel}>{t('feel_like.other')}</Text>
              <TextInput
                style={styles.textInput}
                placeholder={t('feel_like.other')}
                defaultValue={JSON.stringify(painFeelState.feel, null, 2).replaceAll('"', '')}
                onChangeText={handleSetFeel}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    paddingTop: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 130,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputContainer: {
    marginTop: 20
  },
  otherLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
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
  goBackButton: {
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
    letterSpacing: 1,
  },
});

export default Feel;
