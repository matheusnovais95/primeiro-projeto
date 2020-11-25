import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OlaMundo from './components/OlaMundo';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo styleOne={styles.paragrafo} styleTwo={styles.msg} nome='Jonas'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragrafo: {
    backgroundColor: '#993399',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    borderRadius: 5
  },
  msg: {
    backgroundColor: '#C8A2C8',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    textAlign: 'center'
  }
});

