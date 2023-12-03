import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import DummyApiCalling from './Screens/DummyApiCalling'
import cuponCode from './Screens/cuponCode';
import AsnycStorageData from './Screens/AsyncStorageData'


const App = () => {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home}></Stack.Screen>
        <Stack.Screen name='Loginscreen' component={Login}></Stack.Screen>
        <Stack.Screen name='DummyApiCallingScreen' component={DummyApiCalling}></Stack.Screen>
        <Stack.Screen  name='CuponCodeScreen' component={cuponCode}></Stack.Screen>
        <Stack.Screen name='AsyncStorageDataScreen' component={AsnycStorageData}></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;