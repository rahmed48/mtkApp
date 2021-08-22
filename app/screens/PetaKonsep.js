import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import axios from 'axios';

const PetaKonsep = ({navigation, route}) => {
  const {title} = route.params;
  console.log(title);

  if (title == 'Probabilitas') {
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
            <Image
              source={require('../assets/images/PKprobabilitas.png')}
              style={{
                alignSelf: 'center',
              }}
              resizeMode={'center'}
            />
          </View>
        </View>
      </View>
    );
  }
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
          <Image
            source={require('../assets/images/PKstatistika.png')}
            style={{
              alignSelf: 'center',
            }}
            resizeMode={'center'}
          />
        </View>
      </View>
    </View>
  );
};

export default PetaKonsep;

const styles = StyleSheet.create({});
