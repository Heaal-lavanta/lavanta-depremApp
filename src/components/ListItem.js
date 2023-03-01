import React, {useMemo,useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Touchable from './Touchable';
import themeContext from '../../config/themeContext';

function ListItem({title, mag, date, ...props}) {
  const theme = useContext(themeContext);
  const listItem = useMemo(
    () => (
      <Touchable {...props}>
        <View style={[styles.container, {backgroundColor: theme.settingsHeaderLineBackground}]}>
          <Icon name="clipboard-pulse" size={30} color={Colors.primary} />
          <View style={[styles.textView]} >
            <Text style={[styles.titleText, {color: theme.textColor}]}>{title}</Text>
            <Text style={[styles.subtitleText, {color: theme.textColor}]}>
              Şiddet:
              <Text style={[styles.detailText, {color: theme.listItemDetailText}]}>{mag}</Text>
            </Text>
            <Text style={[styles.subtitleText, {color: theme.textColor}]}>
              Tarih: 
              <Text style={[styles.detailText, {color: theme.listItemDetailText}]}>{date}</Text>
            </Text>
          </View>
        </View>
      </Touchable>
    ),
    [title, mag, date],
  );
  return listItem;
}


export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 5.5,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textView: {
    flex: 1,
    marginLeft: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    textTransform : "capitalize"
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 2,
  },
  detailText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: Colors.soft,
  },
});