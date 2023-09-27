import React from 'react';
import { View, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstPath')}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topRight}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPath')}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLeft}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdPath')}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRight}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourthPath')}>
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topLeft: {
    position: 'absolute',
    top: 100,
    left: 50,
  },
  topRight: {
    position: 'absolute',
    top: 100,
    right: 50,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 100,
    left: 50,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 100,
    right: 50,
  },
});

export default HomeScreen;
