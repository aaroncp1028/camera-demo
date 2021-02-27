import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import createStore from '@store';
import {enableScreens} from 'react-native-screens';
import AppNavigator from '@navigation/AppNavigator';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PersistGate } from "redux-persist/lib/integration/react"

import App from './src';

const { store, persistor } = createStore();
enableScreens();

export default () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer initialState={InitialState}>
              <App />
          </NavigationContainer>
      </PersistGate>
    </Provider>
  </>
);
