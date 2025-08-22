import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ResultCard from '../components/ResultCard';

export default function ResultsScreen() {
  const [results, setResults] = useState([]);

  const generateResult = () => {
    const number = Math.floor(Math.random() * 10);
    const period = Date.now();
    const color = number % 2 === 0 ? 'Green' : 'Red';
    const size = number >= 5 ? 'Big' : 'Small';

    const newResult = { id: period.toString(), period, number, color, size };
    setResults([newResult, ...results]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={generateResult} style={styles.btn}>
        Generate
      </Button>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  btn: { marginBottom: 10, backgroundColor: '#00e676' },
});
