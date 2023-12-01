import React, {useEffect, useState }from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import MedicalProfileScreen from './MedicalProfile';

const ProfileScreen = ({route}) => {

  const userData = route.params?.userData;

  return (
    <SafeAreaView>
        <Text>Welcome {userData.username}!</Text>

        <MedicalProfileScreen/>

    </SafeAreaView>
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

export default ProfileScreen;
