import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SocialButtons from '../../components/SocialSignIn';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({navigation}) => {

  const {control, handleSubmit, watch} =  useForm()
  const passwd = watch('password')

  const onRegisterPressed = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          username: data.username,
          password: data.password,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        console.log('Registration successful:', json);
        navigation.navigate('Sign_In_Screen');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  
  const onSignInPressed = () => {
    navigation.navigate("Sign_In_Screen")
  }
  
  const onTermsPressed = () => {
    console.warn("terms")
  }

  const onPrivacyPressed = () => {
    console.warn("privacy")
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create Account</Text>
            <CustomInput 
              name="email"
              control={control}
              placeholder="Email"  
              secureTextEntry={false}
              rules={{
                pattern: EMAIL_REGEX, 
                message: 'Email is invalid'
              }}
            />
            <CustomInput 
              name="username"
              control={control}
              placeholder="Username" 
              secureTextEntry={false}
              rules={{
                required: 'username is required', 
                minLength: {
                  value: 3, 
                  messaage: 'Username should be at least 3 characters long'
                }, 
                maxLength: {
                  value: 24, 
                  message:'username should be max 24 characters long'
                }
              }}
            />
            <CustomInput 
              name="password"
              control={control}
              placeholder="Password" 
              secureTextEntry={true}
              rules={{
                required: 'password is required', 
                minLength: {
                  value: 8, 
                  messaage: 'Username should be at least 8 characters long'
                }, 
              }}
            />
            <CustomInput 
              name="password-repeat"
              control={control}
              placeholder="Repeat Password"
              secureTextEntry={true}
              rules={{
                validate: value => 
                  value == passwd || 'Passwords do not match'
              }}
            />
            <SignInButton 
              text="Register" 
              onPress={handleSubmit(onRegisterPressed)} 
              type="PRIMARY"
            />
            <Text style={styles.text}> By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsPressed}>Terms of Use </Text>and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
            <SocialButtons/>
            <SignInButton text="Already have an account?" onPress={onSignInPressed} type="TERTIARY"/>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  }
});

export default SignUpScreen;
