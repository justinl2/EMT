import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const SignInButton = ({ onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor: bgColor}: {}]}>
        <Text style={[styles[`text_${type}`], fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: '#3B71F3',
  },
  text_TERTIARY: {
    fontWeight: 'bold',
    color: 'grey',
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',

  },
  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {

  },

});

export default SignInButton;
