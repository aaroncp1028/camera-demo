import React from 'react';
import 'react-native-gesture-handler';

import AppNavigator from '@navigation/AppNavigator';
import {InitialState, NavigationContainer} from '@react-navigation/native';

const App = () => (
  <NavigationContainer initialState={InitialState}>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
