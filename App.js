import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import ChartsScreen from './screens/ChartsScreen';
import StatsScreen from './screens/StatsScreen';
import PredictScreen from './screens/PredictScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#121212' },
            tabBarActiveTintColor: '#00e676',
            tabBarInactiveTintColor: '#aaa',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} /> }}
          />
          <Tab.Screen
            name="Results"
            component={ResultsScreen}
            options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-list" size={24} color={color} /> }}
          />
          <Tab.Screen
            name="Charts"
            component={ChartsScreen}
            options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-line" size={24} color={color} /> }}
          />
          <Tab.Screen
            name="Stats"
            component={StatsScreen}
            options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-pie" size={24} color={color} /> }}
          />
          <Tab.Screen
            name="Predict"
            component={PredictScreen}
            options={{ tabBarIcon: ({ color }) => <MaterialCommunityIcons name="lightbulb-on" size={24} color={color} /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
