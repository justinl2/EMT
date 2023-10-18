import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen';
import TypeAnything from '../screens/path4/path4';
import GenerateScreen from '../screens/generate';
import Screen1 from '../screens/path1/path1';
import Screen2 from '../screens/path2/path2';
import Screen4 from '../screens/path4/path4';
import Screen5 from '../screens/path5/path5';
import Screen6 from '../screens/path6/path6';
import Pain from '../screens/path3/path3';
import WhatsWrong from '../screens/path7/whats_wrong';
import PersonalInformation from '../screens/path2/personal_info';
import Allergen from '../screens/path2/allergen';
import DrugsMedications from '../screens/path2/drugs_medications';
import MedicalConditions from '../screens/path2/medical_conditions';
import MentalHealth from '../screens/path7/mentalhealth';
import IllnessInjury from '../screens/path7/illness_injury';
import IntakeOutput from '../screens/path7/intake_output';
import HowBad from '../screens/path3/how_bad';
import Feel from '../screens/path3/feel_like';
import Vomit from '../screens/path7/vomit';
import SignsSymptoms from '../screens/path7/signs_symptoms';
import NitroAssessment from '../screens/path7/nitro_assessment';
import Bathroom from '../screens/path7/bathroom';
import SignInScreen from '../screens/Profile/SignInScreen';
import SignUpScreen from '../screens/Profile/SignUpScreen';


const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Main" component={MainScreen} />
            <MainStack.Screen name="FirstPath" component={Screen1} />
            <MainStack.Screen name="Med_and_Personal" component={Screen2} />
            <MainStack.Screen name="Pain_Screen" component={Pain} />
            <MainStack.Screen name="FourthPath" component={Screen4} />
            <MainStack.Screen name="Alert_Screen" component={Screen5} />
            <MainStack.Screen name="SixthPath" component={Screen6} />
            <MainStack.Screen name="Whats_Wrong_Screen" component={WhatsWrong} />
            <MainStack.Screen name="Personal_Information_Screen" component={PersonalInformation} />
            <MainStack.Screen name="AllergenScreen" component={Allergen} />
            <MainStack.Screen name="Drugs_Medications_Screen" component={DrugsMedications} />
            <MainStack.Screen name="Medical_Conditions_Screen" component={MedicalConditions} />
            <MainStack.Screen name="Mental_Health_Screen" component={MentalHealth} />
            <MainStack.Screen name="Illness_Injury_Screen" component={IllnessInjury} />
            <MainStack.Screen name="Intake_Output_Screen" component={IntakeOutput} />
            <MainStack.Screen name="How_Bad_Screen" component={HowBad} />
            <MainStack.Screen name="Feel_Screen" component={Feel} />
            <MainStack.Screen name="Vomit_Screen" component={Vomit} />
            <MainStack.Screen name="Signs_Symptoms_Screen" component={SignsSymptoms} />
            <MainStack.Screen name="Nitro_Assessment_Screen" component={NitroAssessment} />
            <MainStack.Screen name="Bathroom_Screen" component={Bathroom} />
            <MainStack.Screen name="Sign_Up_Screen" component={SignUpScreen} />
            <MainStack.Screen name="Sign_In_Screen" component={SignInScreen} />

        </MainStack.Navigator>
    );
};

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "rgba(0,0,0,0.5)",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowOpacity: 0,
                    shadowRadius: 4,
                    elevation: 4,
                    shadowOffset: {
                        width: 0,
                        height: -4
                    },
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen name="HomeStack"
                component={MainStackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="home" size={24} color="white" />
                        ) : (
                            <Entypo name="home" size={24} color="white" />
                        )
                }}
            />
            <Tab.Screen name="Type"
                component={TypeAnything}
                options={{
                    headerShown: false,
                    tabBarLabel: "Text",
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Entypo name="text" size={24} color="white" />
                        ) : (
                            <Entypo name="text" size={24} color="white" />
                        )
                }}
            />
            <Tab.Screen name="Generate"
                component={GenerateScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Generate",
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="dribbble" size={24} color="white" />
                        ) : (
                            <AntDesign name="dribbble" size={24} color="white" />
                        )
                }}
            />
            <Tab.Screen name="Profile"
                component={SignInScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: "white" },
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="person" size={24} color="white" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="white" />
                        )
                }}
            />
        </Tab.Navigator>
    )
}

function TabNavigation() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} >
                <RootStack.Screen name="MainTabs" component={BottomTabs} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;
