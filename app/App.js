import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './Router';

const App = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  return splash ? (
    <View style={styles.container}>
      <Text style={styles.textSplash}>Belajar Matematika</Text>
    </View>
  ) : (
    <Router />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  textSplash: {fontSize: 20, fontWeight: '700', fontFamily: 'Poppins-SemiBold'},
});
