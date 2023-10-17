import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import CareTalk from '../assets/caretalk-logo.jpg';
import CustomInput from './CustomInput';

const SignInScreen = () => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.root}>
        <Image source={CareTalk} style={styles.logo} resizeMode='contain'/>
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword}/>
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
  },
  root: {
    alignItems: 'center',
    padding: 20,
  }
});

export default SignInScreen;
