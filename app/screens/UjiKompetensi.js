import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Item = ({item, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#E6F1F9',
      width: 153,
      height: 153,
      borderRadius: 10,
      marginRight: 12,
      marginTop: 10,
      alignItems: 'center',
    }}>
    <View
      style={{
        backgroundColor: 'white',
        width: 134,
        height: 47,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7,
      }}>
      <Text style={{fontWeight: '700'}}>{item.title}</Text>
    </View>
    <Image
      source={require('../assets/images/statistika.png')}
      style={{position: 'absolute'}}
      resizeMode="center"
    />
  </TouchableOpacity>
);

const UjiKompetensi = ({navigation}) => {
  const [home, setHome] = useState();

  axios
    .get('https://backend-mtkapp.herokuapp.com/api/v1/app/home')
    .then(response => {
      setHome(response.data.materi);
    })
    .catch(err => console.log('err:', err));
  // console.log(DATA);
  // console.log(home[0]._id);

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate('Quiz', {
            id: item._id,
            title: item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <View style={{marginTop: 15}}>
        <Text style={{fontWeight: '700', marginBottom: 10}}>
          Uji Kompetensi
        </Text>
        <View
          style={{
            backgroundColor: '#E6F1F9',
            width: 320,
            height: 137,
            borderRadius: 10,
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center', fontWeight: '700'}}>
                Latih Kemampuanmu Sekarang
              </Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/ujiKom.png')}
                style={{width: 205, height: 137}}
                resizeMode="center"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontWeight: '700', marginTop: 10}}>Uji Kompetensi</Text>
        <SafeAreaView>
          <FlatList
            horizontal={true}
            data={home}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

export default UjiKompetensi;

const styles = StyleSheet.create({});
