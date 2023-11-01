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
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { setHow } from '../../redux/features/text/painBadSlice';
import { RootState } from '../../redux/store';

const HowBad = ({ navigation }) => {

    const painBadState = useSelector((state: RootState) => state.painBadSlice);

    const dispatch = useDispatch();
    const [localHow, setLocalHow] = useState("");
    const handleSetHow = (value) => {
        dispatch(setHow(value));
        setLocalHow(value);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={["#040306","#131624"]} style={{flex:1}}>
                <SafeAreaView style={styles.container}>

                    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
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
                                style={styles.textInput}
                                placeholder="Enter Description Here"
                                defaultValue={JSON.stringify(painBadState.how, null, 2).replaceAll('"', '')}
                                onChangeText={handleSetHow}
                            />
                        </View>
                    </KeyboardAvoidingView>
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
    marginTop: 20
  },
  otherLabel: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
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
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',  
    borderColor: '#CCCCCC',     
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#333333',          
    marginBottom: 10,
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
