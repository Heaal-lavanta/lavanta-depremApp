import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView , Image} from 'react-native';
import Touchable from '../components/Touchable';
import { Loading } from '../components';
import themeContext from '../../config/themeContext';
import Swiper from 'react-native-swiper';
import format from 'date-format'
import Colors from '../constants/Colors';



function Search({navigation}) {
  const [loading, setLoading] = useState(false);
  let [saat, hour] = React.useState('')
  let [haber_1, haber1] = React.useState('')
  let [haber_2, haber2] = React.useState('')
  let [haber_3, haber3] = React.useState('')
  let [bilgi1, bilgi] = useState('')
  let [habersp1,haberspli1] = useState('')
  let [habersp2,haberspli2] = useState('')
  let [habersp3,haberspli3] = useState('')
 const theme = useContext(themeContext);
 useEffect(() => {

  fetchApiCall();
  var hours = (format('hh', new Date()))
  if (hours === "00"){
    hour("İyi Geceler")
  } else if(hours === "01"){
    hour("İyi Geceler")
  } else if (hours === "02"){
    hour("İyi Geceler")
  } else if (hours === "03"){
    hour("İyi Geceler")
  }else if (hours === "04"){
    hour("İyi Geceler")
  }else if (hours === "05"){
    hour("İyi Geceler")
  }else if (hours === "06"){
    hour("Günaydın")
  } else if (hours === "07"){
    hour("Günaydın")
  }else if (hours === "08"){
    hour("Günaydın")
  }else if (hours === "09"){
    hour("Günaydın")
  }else if (hours === "10"){
    hour("Günaydın")
  }else if (hours === "11"){
    hour("Günaydın")
  }else if (hours === "12"){
    hour("İyi Günler")
  }else if (hours === "13"){
    hour("İyi Günler")
  }else if (hours === "14"){
    hour("İyi Günler")
  }else if (hours === "15"){
    hour("İyi Günler")
  }else if (hours === "16"){
    hour("İyi Günler")
  }else if (hours === "17"){
    hour("İyi Günler")
  }else if (hours === "18"){
    hour("İyi Akşamlar")
  }else if (hours === "19"){
    hour("İyi Akşamlar")
  }else if (hours === "20"){
    hour("İyi Akşamlar")
  }else if (hours === "21"){
    hour("İyi Akşamlar")
  }else if (hours === "22"){
    hour("İyi Akşamlar")
  }else if (hours === "23"){
    hour("İyi Geceler")
  }
}, []);
 const fetchApiCall = () => {
   setLoading(true);
   fetch("https://lavantapapi.bymisakimey.repl.co/haberler"
  )
    .then(response => response.json())
    .then(response => {
      let haber1split = response.data[0].haber.split(" ")
      let haber2split = response.data[1].haber.split(" ")
      let haber3split = response.data[2].haber.split(" ")

      if (haber1split.length > 8) {
        const kisaltilmisCumle = haber1split.slice(0, 8).join(' ');
        console.log(`${kisaltilmisCumle}...`);
        haberspli1(`${kisaltilmisCumle}...`);
        
      } else {
        haberspli1(response.data[0].haber);
      }

      if (haber2split.length > 8) {
        const kisaltilmisCumle = haber2split.slice(0, 8).join(' ');
        console.log(`${kisaltilmisCumle}...`);
        haberspli2(`${kisaltilmisCumle}...`);
        
      } else {
        haberspli2(response.data[1].haber);
      }
      if (haber3split.length > 8) {
        const kisaltilmisCumle = haber3split.slice(0, 8).join(' ');
        console.log(`${kisaltilmisCumle}...`);
        haberspli3(`${kisaltilmisCumle}...`);
        
      } else {
        haberspli3(response.data[2].haber);
      }


      haber1(response.data[0]);
      haber2(response.data[1])
      haber3(response.data[2])
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setLoading(false));

    fetch("https://lavantapapi.bymisakimey.repl.co/bilgi"
  )
    .then(response => response.json())
    .then(response => {
      bilgi(response.bilgi);
     
    })
    .catch(err => {
      console.log(err);
    })
}


  return (
    
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
    
    {loading ? (
    <View style={[styles.container , {backgroundColor: theme.backgroundColor}]}> 
          <Loading
            title="Yükleniyor"
            subtitle="Veriler yüklenirlen lütfen bekleyiniz.."
          />
          </View>
        ) : (          
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.hello}>
          <Text style={[styles.logMesaj, {color: theme.textColor}]}>{saat},</Text>
          </View>
          <View style={styles.dayinfo}>
            <Text style={[styles.dayinfomsg, {color: theme.textColor}]}></Text>
          </View>
          <View style={styles.dayinfobox}>
            <Text style={[styles.persona]}>Aklınızda Bulunsun!</Text>
            <Text style={[styles.info]}>{bilgi1}</Text>
           
          </View>
          <View style={styles.OkulHaber}>
            <Text style={[styles.dayinfomsg, {color: theme.textColor}]}>Deprem Haberleri</Text>
          </View>
          <Swiper 
      autoplay={true}
      autoplayTimeout={8}
      spaceBetween={30}
      centeredSlides={true}
      style={styles.wrapper}
      slidesPerView={"auto"}
      dot={
        <View
          style={[{
            backgroundColor: theme.navbarInactıve,
            width: 5,
            height: 5,
            borderRadius: 5,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          } 
          
        ]}
        />
      }
      activeDot={
        <View
          style={[{
            backgroundColor: theme.textColor,
            width: 8,
            height: 8,
            borderRadius: 8,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }]}
        />
      }
      paginationStyle={{
        top: 230,
      }}
      >


        {/* Haber 1 */}

      <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_1}) }>
      <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>

      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor}]}>{haber_1.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor}]}>{habersp1}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_1.tarih}</Text>
      </View>

      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_1.resim}}
         />   
      </View>
      </View>
      </Touchable>


      {/* Haber 2 */}

      <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_2}) }>
      <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>
      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor}]}>{haber_2.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor}]}>{habersp2}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_2.tarih}</Text>
      </View>
      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_2.resim}}
         />  
          
      </View>
      
      </View>
      </Touchable>

    {/* Haber 3 */}

    <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_3}) }>
    <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>
      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor}]}>{haber_3.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor}]}>{habersp3}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_3.tarih}</Text>
      </View>
      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_3.resim}}
         />  
        
      </View>
      
      </View>
      </Touchable>

    </Swiper>

          <View style={styles.OkulHaber}>
            <Text style={[styles.dayinfomsg, {color: theme.textColor}]}>Okul Haberleri</Text>
          </View>


    <Swiper 
      autoplay={true}
      autoplayTimeout={8}
      spaceBetween={30}
      centeredSlides={true}
      style={styles.wrapper}
      slidesPerView={"auto"}
      dot={
        <View
          style={[{
            backgroundColor: theme.navbarInactıve,
            width: 5,
            height: 5,
            borderRadius: 5,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          } 
          
        ]}
        />
      }
      activeDot={
        <View
          style={[{
            backgroundColor: theme.textColor,
            width: 8,
            height: 8,
            borderRadius: 8,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }]}
        />
      }
      paginationStyle={{
        top: 230,
      }}
      >


        {/* Haber 1 */}

      <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_1}) }>
      <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>
      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor}]}>{haber_1.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor}]}>{habersp1}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_1.tarih}</Text>
      </View>
      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_1.resim}}
         />  
        
      </View>
      
      </View>
      </Touchable>


      {/* Haber 2 */}

      <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_2}) }>
      <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>
      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor}]}>{haber_2.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor} ]}>{habersp2}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_2.tarih}</Text>
      </View>
      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_2.resim}}
         />  
       
      </View>
      
      </View>
      </Touchable>

    {/* Haber 3 */}

    <Touchable onPress={() => navigation.navigate('SliderHaber' ,{item: haber_3}) }>
    <View style={[styles.slide, {backgroundColor: theme.settingsHeaderLineBackground}]}>
      <View style={[styles.newsContent]}>
         <Text style={[styles.newsHeader , {color : theme.textColor} ]}>{haber_3.baslik}</Text>
         <Text style={[styles.newsDescription , {color : theme.newsDescriptionColor}]}>{habersp3}</Text>
         <Text style={[styles.newsDate , {color : theme.newsInfoDateColor}]}>{haber_3.tarih}</Text>
      </View>
      <View style={[styles.newsInfo]}>
      <Image
          style={{ width: '100%', height: '45%' , borderRadius:15, elevation : 10 , alignSelf: "flex-start"}}
          source={{uri: haber_3.resim}}
         />  
        
      </View>
      
      </View>
      </Touchable>

      
    </Swiper>

    <View style={[styles.gap , {backgroundColor: theme.backgroundColor}]}></View>
          
          </ScrollView>
       
        )
        }
    </View>
    );
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,   
      },
      hello: {
        marginTop : 5,
        width : "92%",
        alignSelf : "center",
        marginBottom : -30,
      },
      logMesaj : {
        fontSize : 24,
        fontWeight : 'bold',
      },
      OkulHaber : {
        marginLeft : 10,
      },
      dayinfomsg : {
        fontSize : 14,
        paddingTop: 15,
        marginBottom: 15,
      },
      gap : {
        height : 80, 
      },
      dayinfobox : {
        backgroundColor : Colors.primary,
        width : "95%",
        height : 170,
        display : "flex",
        justifyContent : "space-between",
        alignSelf : "center",
        borderRadius : 30,
        shadowColor: '#000',
        shadowOffset: {width: 100, height: 100},
        shadowOpacity: 100,
        shadowRadius: 100,
        elevation: 5,
        marginBottom : 10
      },
      persona : {
        color : "#fff",
        fontSize : 24,
        paddingLeft : 20,
        paddingTop : 15,
        fontWeight : "bold",
      },
      info : {
        color : Colors.white,
        fontSize : 12,
        paddingLeft : 20,
        paddingBottom : 25,
        paddingRight : 20,
      },
      date : {
        color : Colors.white,
        fontSize : 12
      },
      wrapper : {
        height : 250,
      },
      slide : {
        width : "95%",
        alignSelf : "center",
        borderRadius : 30,
        shadowColor: '#000',
        shadowOffset: {width: 100, height: 100},
        shadowOpacity: 100,
        shadowRadius: 100,
        elevation: 5,
        height : 200,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"
      },
      newsContent : {
        width : "60%",
        height : 200,
        display : "flex",
        justifyContent : "space-between",
      },
      newsInfo : {
        width : "30%",
        paddingTop : 15,
        paddingRight : 15
      },
      newsHeader: {
        fontSize : 18,
        textTransform : "capitalize",
        color : "#000",
        paddingTop : 20,
        paddingLeft : 15,
        textAlign : "center"
      },
      newsDescription : {
        fontSize : 12,
        paddingBottom : 20,
        paddingLeft : 20,
        textTransform : "capitalize",
      },
      text: {
        fontSize : 12,
        textAlign : "center",
        textTransform : "capitalize",
        position : "absolute",
        color : "#000"
      },
      newsDate : {
        fontSize : 200,
        fontSize : 12,
        paddingBottom : 20,
        paddingLeft : 20,
      }
    });

export default Search;