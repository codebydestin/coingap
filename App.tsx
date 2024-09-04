/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import TopList from './src/screens/TopList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChartPie,
  faChartSimple,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetail from './src/screens/CoinDetail';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#6f34ff', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Optional: Set the font weight of the header title
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoinDetail" component={CoinDetail} />
      </Stack.Navigator>
    );
  };

  const TopListStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TopList" component={TopList} />
      </Stack.Navigator>
    );
  };

  const SettingsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TopListStack') {
              return <FontAwesomeIcon icon={faChartSimple} />;
            } else if (route.name === 'SettingsStack') {
              return <FontAwesomeIcon icon={faGear} />;
            }

            // You can return any component that you like here!
            return <FontAwesomeIcon icon={faChartPie} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="TopListStack" component={TopListStack} />
        <Tab.Screen name="SettingsStack" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
