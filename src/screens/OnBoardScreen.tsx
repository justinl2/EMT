import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';



const OnBoardScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/onBoardImage1.jpg')}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <Text style={styles.slogan}>APP_NAME</Text>
        <View style={styles.textBackground}>
          <Text style={styles.slogan}>Communication Beyond Words</Text>
        </View>
        <Text style={styles.welcomeText}>
          Welcome to APP_NAME, a mobile application committed to enhancing and
          streamlining communication during medical emergencies.
        </Text>
      </SafeAreaView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  slogan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    padding: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default OnBoardScreen;
