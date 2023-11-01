import React, { useState } from 'react';
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
import ButtonCard from '../../components/ButtonCard';

import { useDispatch, useSelector } from 'react-redux';
import { setFeel } from '../../redux/features/text/painFeelSlice';
import { RootState } from '../../redux/store';

const Feel = ({ navigation }) => {

    const painFeelState = useSelector((state: RootState) => state.painFeelSlice);

    const dispatch = useDispatch();
    const [localFeel, setLocalFeel] = useState("");
    const handleSetFeel = (value) => {
        dispatch(setFeel(value));
        setLocalFeel(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
              <SafeAreaView style={styles.container}>
                <View style={styles.goBackButton}>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>

                <Text style={styles.title}>What Does it Feel Like?</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Mild</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Moderate</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Severe</Text>
                  </TouchableOpacity>
                </View>

                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter Text Here"
                            defaultValue={JSON.stringify(painFeelState.feel, null, 2).replaceAll('"', '')}
                            onChangeText={handleSetFeel}
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
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    width: 100, // Adjusted width to accommodate all three buttons in one row
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,  // Added some margin to separate buttons
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInputContainer: {
    marginTop: 20,
    width: '80%',
  },
  textInput: {
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

export default Feel;
