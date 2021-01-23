import React from 'react';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import Followers from './src/screens/Followers';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Github users">
      <Stack.Screen name="Github users" component={MainScreen} />
      <Stack.Screen name="Followers" component={Followers} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
