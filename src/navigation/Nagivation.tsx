import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CoinDetail from '../screens/CoinDetail';
import TopList from '../screens/TopList';
import Settings from '../screens/Settings';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faChartSimple,
  faGear,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons';

// Define types for the stack navigators
type HomeStackParamList = {
  Home: undefined;
  CoinDetail: undefined;
};

type TopListStackParamList = {
  TopList: undefined;
};

type SettingsStackParamList = {
  Settings: undefined;
};

// Define types for bottom tab navigator
type BottomTabParamList = {
  HomeStack: undefined;
  TopListStack: undefined;
  SettingsStack: undefined;
};

// Create navigators
const HStack = createNativeStackNavigator<HomeStackParamList>();
const TLStack = createNativeStackNavigator<TopListStackParamList>();
const STStack = createNativeStackNavigator<SettingsStackParamList>();

const Tab = createBottomTabNavigator<BottomTabParamList>();

const screenOptions = ({
  route,
}: {
  route: { name: keyof BottomTabParamList };
}) => ({
  tabBarIcon: ({ color }: { color: string }) => {
    let icon;
    if (route.name === 'TopListStack') {
      icon = faChartSimple;
    } else if (route.name === 'SettingsStack') {
      icon = faGear;
    } else {
      icon = faPieChart;
    }
    return <FontAwesomeIcon icon={icon} color={color} />;
  },
  tabBarActiveTintColor: '#6f34ff',
  tabBarInactiveTintColor: '#7c8283',
  headerShown: false,
});

const HomeStack = () => {
  return (
    <HStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#6f34ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HStack.Screen name="Home" component={Home} />
      <HStack.Screen name="CoinDetail" component={CoinDetail} />
    </HStack.Navigator>
  );
};

const TopListStack = () => {
  return (
    <TLStack.Navigator>
      <TLStack.Screen name="TopList" component={TopList} />
    </TLStack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <STStack.Navigator>
      <STStack.Screen name="Settings" component={Settings} />
    </STStack.Navigator>
  );
};

// Main Navigation component
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="TopListStack"
          component={TopListStack}
          options={{ title: 'Top' }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
