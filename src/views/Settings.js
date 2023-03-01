import React, { useEffect, useState, useContext } from 'react';
import { Switch,Button,View, Text, Dimensions,Settings, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Touchable from '../components/Touchable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Device from 'expo-device';
import { calculateSize } from '@iconify/react';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeContext from '../../config/themeContext';
import { Image } from 'react-native'

function Settingss({ route, navigation, text , onPress }) {
  const [mode, setMode] = useState(false);
  const [mode1, setMode1] = useState(false);
  const theme = useContext(themeContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     checkkeys();
     getAllKeys();
     
  })});
  const SetAllKeys = async (value) => {
    
    try {
      keys = await AsyncStorage.setItem('user',JSON.stringify(value))
    } catch(e) {
     
    }
  }
  const checkkeys = async () => {
    
    try {
      keys = await AsyncStorage.getItem('user')
    } catch(e) {
     
    }
    data = JSON.parse(keys)
    setMode(data.data)
  }
 const  getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getItem('user')
    } catch(e) {
      // read key error
    }
  
    console.log(keys)
    
  }
 
    return (
      
    <View style={[styles.container , {backgroundColor : theme.backgroundColor}]}>
      <SafeAreaView>
      <ScrollView >
      <View style={styles.up}>
    <View style={[styles.headerView , {backgroundColor: theme.settingsHeaderLineBackground}]}>
    <Image 
  source={require('../../assets/icon.png')}  
  style={styles.image} 
/>
      <Text style={styles.header}>LavantApp</Text>
      <Text style={[styles.subtitleText,{color : theme.navbarInactıve}]}>
            
      </Text>
      <Text style={[styles.id,{color: theme.settingsHeaderLineText}]}>v0.1</Text>
      </View>
      </View>
    <View style={styles.main}>
      <View style={[styles.headersLine , {backgroundColor : theme.settingsHeaderLineBackground}]}>
        <Text style={[styles.headersLineText , {color : theme.settingsHeaderLineText}]}>TERCİHLER</Text>
      </View>
       <View style={styles.group}>
        <View style={styles.test}>
          <Text style={[styles.paragraf , {color : theme.textColor}]}>Karanlık Mod</Text>
          <View style={styles.switch}>
          <Switch
              trackColor={{ false: Colors.trackgrey, true: Colors.primary }}
              thumbColor={setMode ? Colors.white : Colors.white}
              ios_backgroundColor="#3e3e3e"
              value={mode} 
              onValueChange={(value) => {
                let json_value = {"data": value}
                SetAllKeys(json_value)
                setMode(value)
                EventRegister.emit("changeTheme", value);
              }}
          />
          </View>
        </View>
        </View>
      
         <View style={[styles.headersLine , {backgroundColor : theme.settingsHeaderLineBackground}]}>
        <Text style={[styles.headersLineText , {color : theme.settingsHeaderLineText}]}>EMEĞİ GEÇENLER</Text>
      </View>
         <Touchable style={styles.touch} onPress={() => navigation.navigate('Developers')}>
          <View style={styles.button}>
            <Text style={[styles.buttonText , {color : theme.textColor}]}>Geliştiriciler</Text>  
          <View style={styles.icon}>
             <Icon name="arrow-right" size={20} color={theme.textColor} />
          </View>
          </View>
         </Touchable>  
         </View> 
         <View style={[styles.gap, {backgroundColor: theme.backgroundColor}]}></View>
         </ScrollView>
     </SafeAreaView>
    </View>
    );
    
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1000,
    },
    id: {
      fontSize: 16,
      left: 5,
      bottom: 50
    },
    header: {
      color: Colors.primary,
      fontSize: 20,
      textAlign: "left",
      fontWeight: 'bold',
      bottom: 15,
      left: 10,
      bottom: 45
    },
    headerView: {
      height : 150,
      width : "90%",
      alignSelf:"center",
      top : 30,
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
      display : "flex",
      justifyContent : "center",
      alignItems: 'center',
      paddingLeft : 50,
      paddingRight : 20,
      paddingTop : 10,
    },
    image: {
      width: 90, 
      height: 90, 
      borderRadius: 90/ 2,
      right: 115,
      top: 30
    },
    main: {
      height: 500,
      top : 60,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    test: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems : "center"
    },
    group: {
      width : "100%",
    },
    paragraf: {
      fontSize: 16,
      alignSelf: "center",
      color: "#010101",
      borderColor: "#555",
      paddingLeft : 25,
    },
      switch : {
        paddingRight : 18,
        paddingTop : 15,
        paddingBottom : 15,
      },
      button : {
        width: "100%",
        height : 50,
      display : "flex",
      justifyContent : "space-between",
      flexDirection : "row",
      alignItems : "center",
      paddingLeft : 25,
    },
    buttonText : {
      color : "#010101",
      fontSize : 16,
    },
    touch : {
      width: "100%",
    },
    icon : {
      paddingRight : 25,
    },
    headersLine : {
      backgroundColor : "#f5f5f5",
      width : "100%",
      height : 40,
      display : "flex",
      alignItems : "center",
      flexDirection : "row",
    },
    headersLineText : {
      textTransform : "uppercase",
      letterSpacing : 1,
      color : "#9b9b9b",
      paddingLeft : 15
    },
  
  });


export default Settingss;
