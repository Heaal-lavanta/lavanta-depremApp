import React,{useContext} from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import themeContext from '../../config/themeContext';
function Loading(props) {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <ActivityIndicator
        size="large"
        color={theme.textColor}
      />
      <Text style={[styles.titleText, {color: theme.textColor}]}>{props.title}</Text>
      <Text style={[styles.subtitleText,{color: theme.textColor}]}>{props.subtitle}</Text>
    </View>
  );
}

Loading.defaultProps = {
  title: 'Yükleniyor',
  subtitle: 'Veriler yükleniyor. Lütfen bekleyiniz.',
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  subtitleText: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});