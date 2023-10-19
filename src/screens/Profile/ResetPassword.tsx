import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import { useForm } from 'react-hook-form';

const ResetPasswordScreen = ({navigation}) => {

  const {
    control, 
    handleSubmit, 
    formState: {errors}
  } = useForm()

  const [newPassword, setNewPassword] = useState('')

  const onSubmitPressed = (data) => {
    console.log(data)
    console.warn("submit")
  }

  const SignInPressed = () => {
    navigation.navigate("Sign_In_Screen")
  }

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput
                name="code"
                control={control} 
                placeholder="Code" 
                secureTextEntry={false}
                rules={{
                    required: 'Code is required'
                }}
            />
            <CustomInput 
                name="password"
                control={control}
                placeholder="Enter your new password" 
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8, 
                        message:'Password should be at least 8 characters long' 
                      }
                }}
            />
            <SignInButton 
                text="Submit" 
                onPress={handleSubmit(onSubmitPressed)} 
                type="PRIMARY"
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

export default ResetPasswordScreen;
