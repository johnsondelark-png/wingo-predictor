import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PredictScreen() {
  const [prediction, setPrediction] = useState(null);

  const generatePrediction = () => {
    const number = Math.floor(Math.random() * 10); // 0-9
    const size = number >= 5 ? 'Big' : 'Small';
    const color = number % 2 === 0 ? 'Green' : 'Red';

    setPrediction({ number, size, color });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prediction</Text>
      <Button title="Generate Prediction" onPress={generatePrediction} />
      {prediction && (
        <View style={styles.result}>
          <Text>Number: {prediction.number}</Text>
          <Text>Size: {prediction.size}</Text>
          <Text>Color: {prediction.color}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  result: { marginTop: 15, alignItems: 'center' }
});
