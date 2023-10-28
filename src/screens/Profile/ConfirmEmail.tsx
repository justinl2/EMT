import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = ({navigation}) => {

  const {
    control, 
    handleSubmit, 
    formState: {errors}
  } = useForm()

  const onConfirmPressed = (data) => {
    console.log(data)
    navigation.navigate("Confirm_Email_Screen")
  }
  
  const resendCode = () => {
    console.warn("terms")
  }
  
  const onTermsPressed = () => {
    console.warn("terms")
  }

  const SignInPressed = () => {
    navigation.navigate("Sign_In_Screen")
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            <CustomInput 
                name="code"
                control={control}
                placeholder="Enter your confirmation button" 
                secureTextEntry={false}
                rules={{
                    required: 'Confirmation code is required'
                }}
            />
            <SignInButton 
                text="Confirm" 
                onPress={handleSubmit(onConfirmPressed)} 
                type="PRIMARY"
            />
            <SignInButton 
                text="Resend Code" 
                onPress={resendCode} 
                type="SECONDARY"
            />
            <SignInButton 
                text="Back to Sign In" 
                onPress={SignInPressed} 
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

export default ConfirmEmailScreen;
