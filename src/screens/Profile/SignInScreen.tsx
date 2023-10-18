import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import CareTalk from '../../assets/caretalk-logo.jpg';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SocialButtons from '../../components/SocialSignIn';

const SignInScreen = ({navigation}) => {


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSignInPressed = () => {
    console.warn("signed in")
  }
  
  const onForgotPrasswordPressed = () => {
    console.warn("forgot password")
  }

  const onSignUpPressed = () => {
    navigation.navigate("Sign_Up_Screen")
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={CareTalk} style={styles.logo} resizeMode='contain'/>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <SignInButton text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
            <SignInButton text="Forgot password?" onPress={onForgotPrasswordPressed} type="TERTIARY"/>
            <SocialButtons/>
            <SignInButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY"/>
        </View>
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
