import React from 'react';
import 'react-native-gesture-handler';


import AppNavigator from '@navigation/AppNavigator';
import {InitialState, NavigationContainer} from '@react-navigation/native';
import App from './src'

export default () => (
  <>
    <NavigationContainer initialState={InitialState}>
      <App/>
    </NavigationContainer>
  </>
);