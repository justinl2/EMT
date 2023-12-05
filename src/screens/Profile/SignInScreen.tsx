import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const SignInScreen = ({ navigation }) => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text>Bruh</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    height: 100,
    marginBottom: 20,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 60,
  }
});

export default SignInScreen;
