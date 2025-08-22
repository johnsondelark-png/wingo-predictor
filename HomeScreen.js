import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>🎲 Wingo Predictor</Text>
      <Text style={styles.subtitle}>AI Powered Prediction System</Text>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    color: '#00e676',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 10,
  },
  version: {
    fontSize: 14,
    color: '#888',
    marginTop: 40,
  },
});
