import React,{useContext} from 'react';
import { View, Linking, Text, Dimensions, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { IconButton } from '../components';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import customMapStyle from '../map/blackmap.json'
import themeContext from '../../config/themeContext';
function MapDetail({ route, navigation }) {
  const theme = useContext(themeContext);
  searchGoogle = () => {
    Linking.openURL(`https://www.google.com/search?q=${route.params.item.title}`)
  }
  return (
    <View>
      <View style={styles.headerView}>
        <IconButton
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={styles.backIconButton}
          color={Colors.white}
        />

        <Text style={styles.titleText}>Deprem Haritası</Text>
        <Text style={styles.subtitleText}>{route.params.item.title}</Text>
        <View style={[styles.buttonView]}>
        <View style={[styles.iconBackground , {backgroundColor : theme.settingsHeaderLineBackground}]}>
        <IconButton
            onPress={searchGoogle}
            name="map-search"
            color={Colors.success}
            size={40}
          />
          </View>
        </View>
      </View>
      <View style={styles.contentView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={theme.customMapStyle}
          region={{
            latitude: route.params.item.lat,
            longitude: route.params.item.lng,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
        >
          <Marker
          pinColor={Colors.primary}
            title={route.params.item.title}
            description={`Deprem Şiddeti: ${route.params.item.mag}`}
            coordinate={{
              latitude: route.params.item.lat,
              longitude: route.params.item.lng
            }}
          />
        </MapView>

      </View>
    </View>
  );
};

export default MapDetail;

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
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: -40,
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  contentView: {
    height: Dimensions.get('window').height - 250,
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  iconBackground : {
    borderRadius : 100,
    paddingVertical: 15,
    paddingHorizontal: 15,
  }
});