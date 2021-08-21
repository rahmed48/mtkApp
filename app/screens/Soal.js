import React, {useState, useEffect} from 'react';
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
import axios from 'axios';

const Soal = ({navigation, route}) => {
  const {id} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [allQuestions, setAllQuestion] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    axios
      .get(`https://backend-mtkapp.herokuapp.com/api/v1/app/quiz/${id}`, {
        signal: signal,
      })
      .then(response => {
        console.log(response.data.quiz.ujiId);
        setAllQuestion(response.data.quiz.ujiId);
        setLoading(false);
      })
      .catch(err => console.log('err:', err));
    // console.log(isiSubMateri);

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  if (isLoading) {
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
          <View style={{marginTop: 40, padding: 20}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Loading ....</Text>
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
        <View style={{marginTop: 40, padding: 20}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            {allQuestions.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Soal;

const styles = StyleSheet.create({});
