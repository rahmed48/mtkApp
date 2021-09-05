import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const IsiLatihan = ({navigation, route}) => {
  const {id} = route.params;
  const [isiLatihan, setIsiLatihan] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get(
        `https://backend-mtkapp.herokuapp.com/api/v1/app/isi-latihan/${id}`,
        {signal: signal},
      )
      .then(response => {
        // console.log(response.data);
        setIsiLatihan(response.data.isiLatihan.isi);
      })
      .catch(err => console.log('err:', err));

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const source = {
    html: `${isiLatihan}`,
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', flex: 1}}>
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
        <View style={{marginTop: 70, padding: 20}}>
          <RenderHtml source={source} />
        </View>
      </View>
    </ScrollView>
  );
};

export default IsiLatihan;

const styles = StyleSheet.create({});
