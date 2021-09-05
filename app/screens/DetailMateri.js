import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const DetailMateri = ({navigation, route}) => {
  const {id, title} = route.params;
  const [judul, setJudul] = useState();
  const [kataKunci, setKataKunci] = useState();
  const [kompetensiDasar, setKompetensiDasar] = useState();
  const [pengalamanBelajar, setPengalamanBelajar] = useState();
  const [subMateri, setSubMateri] = useState();
  const [latihan, setLatihan] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get(
        `https://backend-mtkapp.herokuapp.com/api/v1/app/detail-materi/${id}`,
        {signal: signal},
      )
      .then(response => {
        setJudul(response.data.detail.title);
        setKataKunci(response.data.detail.kataKunci);
        setKompetensiDasar(response.data.detail.kompetisiDasar);
        setPengalamanBelajar(response.data.detail.pengalamanBelajar);
        setSubMateri(response.data.detail.subMateriId);
        setLatihan(response.data.detail.latihanId);
      })
      .catch(err => console.log('err:', err));

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#E9F3FB',
          width: '100%',
          height: 50,
          marginBottom: 10,
          borderRadius: 10,
          elevation: 5,
          shadowColor: '#AFC3FB',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={() => {
          navigation.navigate('IsiSubMateri', {
            id: item._id,
            name: item.judul,
          });
        }}>
        <Text style={{color: '#AFC3FB', fontSize: 25, flex: 1}}>
          0{index + 1}
        </Text>
        <Text style={{color: 'black', fontSize: 12, flex: 7}}>
          {' '}
          {item.judul}
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          color={'black'}
          size={27}
        />
      </TouchableOpacity>
    );
  };

  const renderItem2 = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#E9F3FB',
          width: '100%',
          height: 50,
          marginBottom: 10,
          borderRadius: 10,
          elevation: 5,
          shadowColor: '#AFC3FB',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={() => {
          navigation.navigate('IsiLatihan', {
            id: item._id,
            name: item.judul,
          });
        }}>
        <Text style={{color: '#AFC3FB', fontSize: 25, flex: 1}}>
          0{index + 1}
        </Text>
        <Text style={{color: 'black', fontSize: 12, flex: 7}}>
          {' '}
          {item.judul}
        </Text>

        <MaterialCommunityIcons
          name="chevron-right"
          color={'black'}
          size={27}
        />
      </TouchableOpacity>
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
        // onPress={() => goBack()}>
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color={'white'} size={27} />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: '#AFC3FB',
          width: 320,
          height: 76,
          margin: 5,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          position: 'absolute',
          top: 190,
          elevation: 5,
          shadowColor: '#AFC3FB',
        }}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 22}}>
          {title}
        </Text>
      </View>

      <View style={{padding: 10}}>
        <SafeAreaView>
          <ScrollView style={{}} horizontal={true}>
            <TouchableOpacity
              style={{
                marginTop: 50,
                margin: 7,
                backgroundColor: '#FFFFFF',
                height: 90,
                width: 120,
                elevation: 5,
                shadowColor: '#FB9646',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => {
                navigation.navigate('KataKunci', {
                  kataKunci: kataKunci,
                });
              }}>
              <MaterialCommunityIcons
                name="key-outline"
                color={'#FB9646'}
                size={24}
              />
              <Text style={{fontWeight: '700'}}>Kata Kunci</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 50,
                margin: 7,
                backgroundColor: '#FFFFFF',
                height: 90,
                width: 120,
                elevation: 5,
                shadowColor: '#FB9646',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => {
                navigation.navigate('PetaKonsep', {
                  title: title,
                });
              }}>
              <MaterialCommunityIcons
                name="map-outline"
                color={'#FB9646'}
                size={24}
              />
              <Text style={{fontWeight: '700'}}>Peta Konsep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 50,
                margin: 7,
                backgroundColor: '#FFFFFF',
                height: 90,
                width: 150,
                elevation: 5,
                shadowColor: '#FB9646',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => {
                navigation.navigate('KompetensiDasar', {
                  kompetensiDasar: kompetensiDasar,
                });
              }}>
              <MaterialCommunityIcons
                name="lightbulb-outline"
                color={'#FB9646'}
                size={24}
              />
              <Text style={{fontWeight: '700'}}>Kompetensi Dasar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 50,
                margin: 7,
                backgroundColor: '#FFFFFF',
                height: 90,
                width: 150,
                elevation: 5,
                shadowColor: '#FB9646',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
              onPress={() => {
                navigation.navigate('PengalamanBelajar', {
                  pengalamanBelajar: pengalamanBelajar,
                });
              }}>
              <MaterialCommunityIcons
                name="book-outline"
                color={'#FB9646'}
                size={24}
              />
              <Text style={{fontWeight: '700'}}>Pengalaman Belajar</Text>
            </TouchableOpacity>
            
          </ScrollView>
        </SafeAreaView>
      </View>

      <FlatList
        style={{paddingHorizontal: 20}}
        ListHeaderComponent={
          <Text style={{fontWeight: '700', marginBottom: 15}}>Materi</Text>
        }
        data={subMateri}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
      <FlatList
        style={{paddingHorizontal: 20}}
        ListHeaderComponent={
          <Text style={{fontWeight: '700', marginBottom: 15}}>Latihan</Text>
        }
        data={latihan}
        renderItem={renderItem2}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default DetailMateri;

const styles = StyleSheet.create({});
