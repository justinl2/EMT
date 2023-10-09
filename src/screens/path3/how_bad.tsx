import React from 'react';
import { 
  View, 
  StatusBar, 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  SafeAreaView, 
  Button, 
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HowBad = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
              <SafeAreaView style={styles.container}>
                <View style={styles.goBackButton}>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>

                <Text style={styles.title}>How Bad Does it Hurt?</Text>
        
                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Sharp</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Dull</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Throbbing</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Hot</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.textInputContainer}>
                  <Text style={styles.otherLabel}>Other:</Text>
                  <TextInput 
                    placeholder="Enter Description Here" 
                    style={styles.textInput}
                  />
                </View>
              </SafeAreaView>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    paddingTop: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: 130, 
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,  
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center'
  },
  otherLabel: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  goBackButton: {
    marginBottom: 100,  
  },
  title: {
    fontSize: 24,              
    fontWeight: 'bold',         
    color: '#FFFFFF',           
    textAlign: 'center',       
    marginBottom: 15,           
    letterSpacing: 1,           
  },
});

export default HowBad;
