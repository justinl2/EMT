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
    backgroundColor: '#F5FCFF',
  }
});

export default GenerateScreen;
