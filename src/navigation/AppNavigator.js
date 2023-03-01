import React,{ useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home, QuakeDetail, MapDetail, Map ,Settingss, Deprem, Developers, Haber, HaberDetailİki, HaberDetailÜç, SliderHaber, SliderHaberİki,SliderHaberÜç} from '../views';
import themeContext from '../../config/themeContext';
import { SafeAreaView, ScrollView,StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
  const theme = useContext(themeContext);
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      
        
      tabBarVisibilityAnimationConfig: "",
      tabBarActiveTintColor : Colors.primary,
      tabBarInactiveTintColor : theme.navbarInactıve,
      tabBarLabelStyle : {padding : 7 , position : "absolute"},
      tabBarIconStyle : {paddingBottom : 15},
      tabBarStyle : {backgroundColor: theme.settingsHeaderLineBackground,  position: 'absolute',
      height: 60,
       bottom: 15,
       right: 10,
       left: 10,
       borderTopWidth: 0,
      borderRadius : 30,
      shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    },
      tabBarHideOnKeyboard : true,
      
    })}> 
    <Tab.Screen
        name="Lavantapp "
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name="home" size={30} color={color} />),
          tabBarLabel: 'Ana Sayfa',
          
        }}
      />
      <Tab.Screen
        name="Lavantapp"
        
        component={Deprem}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name="clipboard-pulse" size={size} color={color} />),
          tabBarLabel: 'Son depremler',
          
        }}
      />
      <Tab.Screen
        name="Lavantapp  "
        component={Map}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name="map-marker" size={size} color={color} />),
          tabBarLabel: 'Harita',
        }}
      />
      <Tab.Screen
        name="Lavantapp   "
        component={Settingss}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (<Icon name="cog-outline" size={size} color={color} />),
          tabBarLabel: 'Ayarlar',
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Developers"
        component={Developers}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settingss}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuakeDetail"
        component={QuakeDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MapDetail"
        component={MapDetail}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="HaberDetail"
        component={Haber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HaberDetailİki"
        component={HaberDetailİki}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HaberDetailÜç"
        component={HaberDetailÜç}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SliderHaber"
        component={SliderHaber}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SliderHaberİki"
        component={SliderHaberİki}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="SliderHaberÜç"
        component={SliderHaberÜç}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;