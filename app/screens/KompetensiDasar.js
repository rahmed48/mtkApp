import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const KompetensiDasar = ({navigation, route}) => {
  const {kompetensiDasar} = route.params;
//   console.log(kompetensiDasar);

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', flex:1, alignItems: 'center', marginTop: 20}}>
        <View
          style={{
            backgroundColor: '#AFC3FB',
            height: 50,
            width: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 22}}>0{index + 1}</Text>
        </View>
        <Text style={{marginLeft: 20, fontSize: 16, textAlign: 'justify', flexWrap:'wrap', flex:1}}>
          {item}
        </Text>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{width: '100%', backgroundColor: '#E6F1F9', height: 230}}>
        <Image
          source={require('../assets/images/statistika.png')}
          style={{width: '100%'}}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#FB9646',
          borderRadius: 10,
          position: 'absolute',
          left: 20,
          top: 26,
          shadowColor: '#FB9646',
          elevation: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color={'white'} size={27} />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          borderRadius: 40,
          position: 'absolute',
          top: 190,
        }}>
        <Image
          source={require('../assets/images/Garis.png')}
          style={{
            position: 'absolute',
            top: 15,
            alignSelf: 'center',
            borderRadius: 5,
          }}
        />
        <View style={{marginTop: 40, padding: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Kompetensi Dasar
          </Text>
          <FlatList
            data={kompetensiDasar}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </View>
  );
};

export default KompetensiDasar;

const styles = StyleSheet.create({});
