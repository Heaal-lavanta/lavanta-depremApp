import React, {useState, useEffect, useCallback, Component, useContext} from 'react';
import {View, Text,SafeAreaView,ScrollView, StyleSheet} from 'react-native';
import Axios from 'axios';
import Touchable from '../components/Touchable';
import Colors from '../constants/Colors';
import { IconButton, DeveloperItem } from '../components';
import themeContext from '../../config/themeContext';
function HaberDetailİki({navigation}) {
    const theme = useContext(themeContext);
    
return (

    <View style={styles.container}>
    <View style={[styles.headerView ]}>
      <IconButton
        onPress={() => navigation.goBack()}
        name="arrow-left"
        style={styles.backIconButton}
        color={Colors.white}
        
      /><Text style={styles.titleText}>FLAŞ FLAŞ FLAŞ TEST HABER 2 :D</Text>
      </View>
    
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentView,{backgroundColor: theme.backgroundColor}]}>
     
      <Text style={[styles.denemeText , {color: theme.textColor}]}>flash flash flash haber açıklama 2</Text>
      
    </ScrollView>
  </View>
);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerView: {
      backgroundColor: Colors.primary,
      height: 250,
      display : "flex",
      justifyContent : 'center',
      alignContent : "center",
    },
    backIconButton: {
      position: 'absolute',
      zIndex: 1,
      top: 50,
      left: 10,
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign : "center",
      lineHeight : 40,
      color: Colors.white,
    },
    contentView: {
      flex : 1, 
      zIndex: -1,
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
    },
    scrollView: {
      zIndex: -1,
    },
    denemeText : {
      fontSize : 16,
    }
  });
export default HaberDetailİki;