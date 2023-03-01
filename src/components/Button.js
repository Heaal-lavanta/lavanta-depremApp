import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function Flatbutton({text , onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{ text }</Text> 
          </View> 
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button : {
        borderRadius : 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#00f",
        width: 400,
      },
      buttonText : {
        color : "white",
        fontSize : 16,
        textAlign : "center",
      }
});   