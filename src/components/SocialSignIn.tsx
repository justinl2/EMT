import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import SignInButton from "./SignInButton";




const SocialButtons = () => {


const onSignInFacebook = () => {
    console.warn("facebook")
    }

    const onSignInGoogle = () => {
    console.warn("google")
    }

    const onSignInApple= () => {
    console.warn("apple")
    }
    
  return (
    <>
        <SignInButton text="Sign In with Facebook" onPress={onSignInFacebook} type="PRIMARY" bgColor="#E7EAF4" fgColor="#4765A9"/>
        <SignInButton text="Sign In with Google" onPress={onSignInGoogle} type="PRIMARY" bgColor="#FAE9EA" fgColor="#DD4D44"/>
        <SignInButton text="Sign In with Apple" onPress={onSignInApple} type="PRIMARY" bgColor="#e3e3e3" fgColor="#363636"/>
    </>
  );
};

export default SocialButtons;
