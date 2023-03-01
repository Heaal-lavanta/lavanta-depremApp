import React,{useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { IconButton, QuakeItem, Touchable } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import themeContext from '../../config/themeContext';
function QuakeDetail({ route, navigation }) {
  const theme = useContext(themeContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={styles.backIconButton}
          color={Colors.white}
        />

        <Text style={styles.titleText}>Deprem</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>
        <Touchable style={styles.buttonView} onPress={() => navigation.navigate('MapDetail', { item: route.params.item }) }>
          <View style={[styles.iconBackground , {backgroundColor : theme.settingsHeaderLineBackground}]}>
          <Icon
            name="map-marker"
            color={Colors.primary}
            size={40}
          />
          </View>
        </Touchable>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={[styles.contentView, {backgroundColor: theme.backgroundColor}]}>
        <QuakeItem
          name="map-marker"
          title="Deprem Konumu"
          detail={route.params.item.lokasyon}
        />
        <QuakeItem
          name="clipboard-pulse"
          title="Deprem Şiddeti"
          detail={route.params.item.mag}
        />
        <QuakeItem
          name="calendar"
          title="Deprem Zamanı"
          detail={route.params.item.date}
        />
        <QuakeItem
          name="tape-measure"
          title="Deprem Derinliği"
          detail={route.params.item.depth}
        />
        <QuakeItem
          name="arrow-split-vertical"
          title="Deprem Enlemi"
          detail={route.params.item.lat}
        />
        <QuakeItem
          name="arrow-split-horizontal"
          title="Deprem Boylamı"
          detail={route.params.item.lng}
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
    textTransform: 'uppercase',
    color: Colors.white,
  },
  subtitleText: {
    fontSize: 16,
    color: Colors.white,
  },
  buttonView: {
    flexDirection: 'row',
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
    zIndex: -1,
    paddingTop: 50,
  },
  scrollView: {
    zIndex: -1,
    backgroundColor: Colors.white
  },
  iconBackground : {
    borderRadius : 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
  }
});