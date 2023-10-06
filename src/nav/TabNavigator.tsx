import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen';
import TypeAnything from '../screens/path4/path4';
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
            <MainStack.Screen name="Vomit_screen" component={Vomit} />
            <MainStack.Screen name="Signs_Symptoms_Screen" component={SignsSymptoms} />

        </MainStack.Navigator>
    );
};

function BottomTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:"rgba(0,0,0,0.5)",
                    position:"absolute",
                    bottom:0,
                    left:0,
                    right:0,
                    shadowOpacity:0,
                    shadowRadius:4,
                    elevation:4,
                    shadowOffset:{
                        width:0,
                        height:-4
                    },
                    borderTopWidth:0
                }
            }}
        >
            <Tab.Screen name="HomeStack" 
                        component={MainStackNavigator} 
                        options={{
                            headerShown: false,
                            tabBarLabel: "Home", 
                            tabBarLabelStyle: {color:"white"}, 
                            tabBarIcon: ({focused}) =>
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
                            tabBarLabelStyle: {color:"white"}, 
                            tabBarIcon: ({focused}) =>
                            focused ? (
                                <Entypo name="text" size={24} color="white" />
                            ) : (
                                <Entypo name="text" size={24} color="white" />
                            )
                        }}
            />
        </Tab.Navigator>
    )
}

function TabNavigation(){
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }} >
                <RootStack.Screen name="MainTabs" component={BottomTabs} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigation;
