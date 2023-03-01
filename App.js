import React, { useEffect, useState } from 'react';
import { View,Alert,BackHandler, Text, SafeAreaView, StatusBar, } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './config/themeContext';
import theme from './config/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import NetInfo from '@react-native-community/netinfo';
import Colors from './src/constants/Colors';

function App() {
  
  
  const[loading, setLoading] = useState(true)
  const checkInternetConnection = async () => {
    const state = await NetInfo.fetch();
    return state.isConnected;
  } 
  const  getwifi = async () => {
    const isConnected = await checkInternetConnection();
    
    if (!isConnected) {
      Alert.alert(
        'Bağlantı Hatası',
        'Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.',
        [{ text: 'Tamam', onPress: () => BackHandler.exitApp() }]
      );
    }
  }
  
  
  const  getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getItem('user')
    } catch(e) {
      // read key error
    }
    keys = JSON.parse(keys)
    console.log(keys.data)
    if (keys.data == false){
      
        setMode(data);
      
      
    } else if (keys.data == true){
      setMode(keys.data);
    }
    
  }
  useEffect(() => {setTimeout(()=>setLoading(false),5000)}, []);

  const [mode , setMode] = useState(false);

  useEffect(() => {
    getwifi()
    getAllKeys()
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    }
  })
  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <StatusBar
        animated={true}
        backgroundColor={mode === true ? Colors.StatusBar : Colors.white}
        barStyle={mode === true ? "light-content" : "dark-content"}

      />
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </themeContext.Provider>
  );
  
}

export default App;