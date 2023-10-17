import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const CustomInput = ({ value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value = {value}
        onChangeText={setValue}
        placeholder={placeholder} 
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  input: {
    height: 40,
  }
});

export default CustomInput;
