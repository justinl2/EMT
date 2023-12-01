import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import CareTalk from '../../assets/caretalk-logo.jpg';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SocialButtons from '../../components/SocialSignIn';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = ({ navigation }) => {

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  const onSignInPressed = data => {
    fetch('http://127.0.0.1:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if(json.token) {
        console.warn("Signed in successfully");

        setToken(json.token);
        setUserData(json.user);

        console.log(json.user);
        AsyncStorage.setItem('userToken', json.token);
        navigation.navigate("Profile_Screen", { userData: json.user });
      } else {
        console.warn("Login failed");
      }
    })
    .catch(error => {
      console.error("Error during login:", error);
    });
  }
  

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot_Password_Screen")
  }

  const onSignUpPressed = () => {
    navigation.navigate("Sign_Up_Screen")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={CareTalk} style={styles.logo} resizeMode='contain' />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'Username is required'
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be at least 3 characters long'
            }
          }}
        />
        <SignInButton
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          type="PRIMARY"
        />
        <SignInButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialButtons />
        <SignInButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
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
