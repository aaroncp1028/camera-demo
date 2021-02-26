import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import createStore from '@store'
import { enableScreens } from 'react-native-screens'
import AppNavigator from '@navigation/AppNavigator';
import {InitialState, NavigationContainer} from '@react-navigation/native';
import App from './src'

const { store } = createStore()
enableScreens()

export default () => (
  <>
    <Provider store={store}>
      <NavigationContainer initialState={InitialState}>
        <App/>
      </NavigationContainer>
    </Provider>
  </>
);