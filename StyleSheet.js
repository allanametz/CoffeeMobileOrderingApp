import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header1: {
    borderColor: 'white',
    borderWidth: 5,
    fontSize: 50,
    padding: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 150,
    fontFamily: 'Baskerville-Bold',
  },

  backgroundImage: {
    height: 800,
    width: 550,
  },
  paragraph: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Optima',
  },

  button: {
    position: 'absolute',
    alignItems: 'center',
    height: 35,
    width: 100,
    top: 250,
    left: 235,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  button2: {
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    top: 50,
    width: 200,
    height: 200,
    backgroundColor: '#0A547B',
    borderRadius: 100,
  },
});
