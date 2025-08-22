import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charts</Text>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [{ data: [10, 20, 15, 30, 25, 40] }]
        }}
        width={Dimensions.get("window").width - 30}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
        }}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  chart: { borderRadius: 10 }
});
