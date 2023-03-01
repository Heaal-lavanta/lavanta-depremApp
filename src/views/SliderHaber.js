import React, { useContext } from 'react';
import {View, Text,SafeAreaView,ScrollView, StyleSheet , Image} from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from '../components';
import themeContext from '../../config/themeContext';
function SliderHaber({navigation,route}) {
    const theme = useContext(themeContext);
    
return (

    <View style={styles.container}>
    <View style={styles.headerView}>
    <Image
          style={{width: '100%', height: '100%' , position: "relative",}}
          source={{uri:route.params.item.resim}}
      />
      <IconButton
        onPress={() => navigation.goBack()}
        name="arrow-left"
        style={styles.backIconButton}
        color={Colors.white}
      />
      </View>
    <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentView,{backgroundColor: theme.backgroundColor}]}>
      <Text style={styles.titleText}>{route.params.item.baslik}</Text>
      <Text style={[styles.denemeText , {color: theme.textColor}]}>{route.params.item.haber}</Text>
    </ScrollView>
  </View>
);}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerView: {
      height: 250,
      display : "flex",
      justifyContent : 'center',
      alignItems : "center",
    },
    backIconButton: {
      position: 'absolute',
      zIndex: 1,
      top: 35,
      left: 10,
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign : "center",
      lineHeight : 28,
      color: Colors.white,
      textTransform : "capitalize",
      textAlign : "center",
      marginTop : 20,
      marginBottom : 20
    },
    contentView: {
      padding: 15,
      flex : 1, 
      zIndex: -1,
      display : "flex",
    },
    scrollView: {
      zIndex: -1,
    },
    denemeText : {
      fontSize : 16,
      lineHeight : 24
    },
  });
export default SliderHaber;