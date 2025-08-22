import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCard({ period, number, size, color }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.period}>Period: {period}</Text>
      <Text style={styles.number}>Number: {number}</Text>
      <Text style={styles.detail}>Size: {size}</Text>
      <Text style={[styles.detail, { color }]}>{color}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  period: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  detail: {
    fontSize: 14,
  },
});
