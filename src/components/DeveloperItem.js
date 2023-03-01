import React,{useContext} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Touchable from './Touchable';
import themeContext from '../../config/themeContext';
function DeveloperItem(props) {
  const theme = useContext(themeContext);
  return (
    <Touchable {...props}>
      <View style={[styles.container ,{backgroundColor: theme.settingsHeaderLineBackground}]}>
        <Icon name={props.name} size={30} color={Colors.primary} />
        <View style={styles.textView}>
          <Text style={[styles.titleText, {color: theme.textColor}]}>{props.title}</Text>
          <Text style={[styles.detailText, {color: theme.textColor}]}>{props.detail}</Text>
        </View>
      </View>
    </Touchable >
  );
}

DeveloperItem.defaultProps = {
  title: 'Deprem Başlığı',
  subtitle: 'Deprem Açıklaması',
}

export default DeveloperItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    width : 160,
    height : 160,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 7.5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: Colors.soft,
    textAlign: 'center',
    marginTop: 10,
  }
});