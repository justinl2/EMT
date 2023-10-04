import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from '../screens/MainScreen';
import TypeAnything from '../screens/path4/path4';
import Screen1 from '../screens/path1/path1';
import Screen2 from '../screens/path2/path2';
import Screen3 from '../screens/path3/path3';
import Screen4 from '../screens/path4/path4';
import Screen5 from '../screens/path5/path5';
import Screen6 from '../screens/path6/path6';
import Screen7 from '../screens/path7/path7';
import PersonalInformation from '../screens/path2/personal_info';
import Allergen from '../screens/path2/allergen';
import DrugsMedications from '../screens/path2/drugs_medications';
import MedicalConditions from '../screens/path2/medical_conditions';
import MentalHealth from '../screens/path7/mentalhealth';


const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Main" component={MainScreen} />
            <MainStack.Screen name="FirstPath" component={Screen1} />
            <MainStack.Screen name="Med_and_Personal" component={Screen2} />
            <MainStack.Screen name="ThirdPath" component={Screen3} />
            <MainStack.Screen name="FourthPath" component={Screen4} />
            <MainStack.Screen name="Alert_Screen" component={Screen5} />
            <MainStack.Screen name="SixthPath" component={Screen6} />
            <MainStack.Screen name="SeventhPath" component={Screen7} />
            <MainStack.Screen name="Personal_Information_Screen" component={PersonalInformation} />
            <MainStack.Screen name="AllergenScreen" component={Allergen} />
            <MainStack.Screen name="Drugs_Medications_Screen" component={DrugsMedications} />
            <MainStack.Screen name="Medical_Conditions_Screen" component={MedicalConditions} />
            <MainStack.Screen name="Mental_Health_Screen" component={MentalHealth} />

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
