import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from '../screens/OnBoardScreen';
import HomeScreen from '../screens/MainScreen';
import Screen1 from '../screens/path1/path1';
import Screen2 from '../screens/path2/path2';
import Screen3 from '../screens/path3/path3';
import Screen4 from '../screens/path4/path4';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onBoard" component={OnBoardScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FirstPath" component={Screen1} />
        <Stack.Screen name="SecondPath" component={Screen2} />
        <Stack.Screen name="ThirdPath" component={Screen3} />
        <Stack.Screen name="FourthPath" component={Screen4} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;