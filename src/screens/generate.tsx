import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DisplayStateComponent from './test';

const GenerateScreen = () => {
  return (
    <View style={styles.container}>
      <DisplayStateComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default GenerateScreen;
