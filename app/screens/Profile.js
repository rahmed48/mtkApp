import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Profile = () => {
  return (
    <View
      style={{padding: 10, paddingTop: 20, backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          width: '100%',
          backgroundColor: '#E9F3FB',
          borderRadius: 20,
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          source={require('../assets/images/saiman.png')}
          style={{height: 75, width: 75, marginLeft: 15}}
        />
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Dr.Saiman,M.Pd</Text>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            Email : saiman@unsam.ac.id
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          width: '100%',
          backgroundColor: '#E9F3FB',
          borderRadius: 20,
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          source={require('../assets/images/zaki.png')}
          style={{height: 75, width: 75, marginLeft: 15}}
        />
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>
            Muhammad Zaki,S.Pd.I.M.Pd
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            Email : acutzaki@unsam.ac.id
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          width: '100%',
          backgroundColor: '#E9F3FB',
          borderRadius: 20,
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Image
          source={require('../assets/images/puji.png')}
          style={{height: 75, width: 75, marginLeft: 15}}
        />
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>
            Puji Wahyuningsih.S.Si.M.Sc
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            Email : puji_wahyuningsih@unsam.ac.id
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
