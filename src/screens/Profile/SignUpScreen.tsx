import React, {useState}from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/SignInButton';
import SocialButtons from '../../components/SocialSignIn';

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const onRegisterPressed = () => {
    console.warn("registered")
  }
  
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
            <CustomInput placeholder="Email" value={email} setValue={setEmail} secureTextEntry={false}/>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry={true}/>
            <SignInButton text="Register" onPress={onRegisterPressed} type="PRIMARY"/>
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
