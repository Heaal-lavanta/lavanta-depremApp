import React,{useContext} from 'react';
import { View, Text, Linking,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { IconButton, DeveloperItem, Touchable } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../../config/themeContext';
function QuakeDetail({ route, navigation }) {
  
    
  const theme = useContext(themeContext);
  return (
    <View style={styles.container}>
      <View style={[styles.headerView ]}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={styles.backIconButton}
          color={Colors.white}
          
        /><Text style={styles.titleText}>Geliştiriciler</Text>
        </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentView,{backgroundColor: theme.backgroundColor}]}>
       
        <DeveloperItem 
        
    
        onPress={() => {
            Linking.openURL('https://github.com/ber4tbey');
          }}
          name="application-brackets-outline"
          title="Berathan Yedibela"
          detail="Full Stack Developer / Takım Kaptanı"
        />
        <DeveloperItem
       onPress={() => {
        Linking.openURL('https://github.com/clumsy28');
      }}
          name="application-brackets-outline"
          title="Burakcan Kapucuoğlu"
          detail="Front End Developer"
        />
        <DeveloperItem
       onPress={() => {
        Linking.openURL('https://github.com/jolankaa');
      }}
          name="application-brackets-outline"
          title="Poyraz Soylu"
          detail="Back End Developer"
        />
        <DeveloperItem
       onPress={() => {
        Linking.openURL('https://github.com/eymenemen');
      }}
          name="application-brackets-outline"
          title="Eymen Alp Tokmakoğlu"
          detail="Junior Developer"
        />
         <DeveloperItem
       onPress={() => {
        Linking.openURL('https://github.com/jolankaa');
      }}
          name="application-brackets-outline"
          title="Özay Yahşi"
          detail="Danışman Öğretmen"
        />
         <DeveloperItem
       onPress={() => {
        Linking.openURL('https://github.com/jolankaa');
      }}
          name="application-brackets-outline"
          title="Canset Işıltı Çınar"
          detail="Danışman Öğretmen"
        />
        
      </ScrollView>
    </View>
  );
}

export default QuakeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    backgroundColor: Colors.primary,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
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
   
    color: Colors.white,
  },
  subtitleText: {
    fontSize: 16,
    color: Colors.white,
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: -40,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1,
  },
  contentView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    display : "flex",
    justifyContent : "center",
    zIndex: -1,
    paddingTop: 30,
    paddingBottom: 30,
  },
  scrollView: {
    zIndex: -1,
    backgroundColor: Colors.white
  },
});