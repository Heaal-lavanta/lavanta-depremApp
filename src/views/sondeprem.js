import React, {useState, useEffect,useContext, useCallback} from 'react';
import {View, Text, StyleSheet,SafeAreaView, ScrollView} from 'react-native';
import {TextInput, FlatList} from 'react-native-gesture-handler';
import Axios from 'axios';
import Colors from '../constants/Colors';
import {ListItem, IconButton, Loading} from '../components';
import themeContext from '../../config/themeContext';
const ITEM_HEIGHT = 95;

function Search({navigation}) {
  const [searchResult, setResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
 const theme = useContext(themeContext);
 let [max, maximum] = React.useState('')
 let [min, minimum] = React.useState('')


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     
      fetchData();
      fetchApiCall();
      
    });
    
  }, []);
  const fetchApiCall = () => {
  
   fetch("https://lavantapapi.bymisakimey.repl.co/enyuksek"
  )
    .then(response => response.json())
    .then(response => {
      maximum(response.data[0].max)
      minimum(response.data[1].min)

      
    })
    .catch(err => {
      console.log(err);
    })
    
}


  const fetchData = () => {
    setLoading(true);
    return Axios.get(
      'https://lavantapapi.bymisakimey.repl.co/depremler',
    )
      .then((res) => {
        setResult(res.data.result);
        return res.data.result;
      })
      .catch((err) => {
        alert(err);
        return err;
      })
      .finally(() => setLoading(false));
  };

  const searchData = () => {
    fetchData().then((response) => {
      let result = [];
      const text = keyword.toUpperCase();
      if (text != '') {
        response.map((element) => {
          if (element.title.includes(text)) {
            result.push(element);
          }
        });
      } else {
        result = response;
      }
      setResult(result);
      console.log(searchResult)
    });
  };

  const renderItem = useCallback(
    ({item}) => (
      <ListItem
        onPress={() => navigation.navigate('QuakeDetail', {item: item})}
        title={item.title}
        mag={item.mag}
        date={item.date}
      />
    ),
    [],
  );

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  
  return (
    
    <View style={styles.container}>
      <View style={[styles.contentView, {backgroundColor: theme.backgroundColor}]}>
        {loading ? (
          <Loading
            title="Veriler Yükleniyor..."
            subtitle="Veriler yükleniyor. Lütfen bekleyiniz."
          />
        ) : (
          <View style={styles.container}>
            <View style={[styles.headerView,{backgroundColor: theme.backgroundColor}]}>

{/* Değerler */}



 {/* Min Değer */}
<View style={[styles.minDegerBox , {backgroundColor: theme.settingsHeaderLineBackground}]}>
<Text style={[styles.minDegerTitle, {color: theme.textColor}]}>Günün En Düşük Şiddetli Depremi</Text>
<Text style={[styles.minDegerLocation , {color : theme.listItemDetailText}]}>{min.title}</Text>
<Text style={[styles.minDegerDescription]}>{min.mag}</Text>
</View>

 {/* Max Değer */}
<View style={[styles.maxDegerBox , {backgroundColor: theme.settingsHeaderLineBackground}]}>
<Text style={[styles.maxDegerTitle, {color: theme.textColor}]}>Günün En Şiddetli Depremi</Text>
<Text style={[styles.maxDegerLocation , {color : theme.listItemDetailText}]}>{max.title}</Text>
<Text style={[styles.maxDegerDescription]}>{max.mag}</Text>
</View>


</View>

          <FlatList showsVerticalScrollIndicator={false}
            data={searchResult}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            maxToRenderPerBatch={5}
          />
          <View style={[styles.gap]}></View>
          </View>
          
        )
        }
      </View>
      
    
    </View>  

  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 210,
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    flexDirection : "row",
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
  inputView: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    width: 300,
    bottom: -30,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  textInput: {
    width: '90%',
  },
  contentView: {
    flex: 1,
    zIndex: -1,
  },
  gap : {
    height : 80, 
  },
  maxDegerBox : {
    width : "45%",
    height : 175,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    display : "flex",
    justifyContent : "space-around",
    alignItems : "flex-start",
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop : 7,
  },
  minDegerBox : {
    width : "45%",
    height : 175,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    display : "flex",
    justifyContent : "space-around",
    alignItems : "flex-start",
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop : 7,
  },
  maxDegerTitle : {
    fontSize : 16,
  },
  minDegerTitle : {
    fontSize : 16
  },
  maxDegerLocation : {
    fontSize : 14,
    marginBottom : 10,
    textTransform : "capitalize",
  },
  minDegerLocation : {
    fontSize : 14,
    marginBottom : 10,
    textTransform : "capitalize",
  },
  maxDegerDescription : {
    fontSize : 60,
    color : Colors.primary,
    lineHeight : 60
  },
  minDegerDescription : {
    fontSize : 60,
    color : Colors.primary,
    lineHeight : 60
  }
});