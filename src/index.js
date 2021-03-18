import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';

import AppNavigator from '@navigation/AppNavigator';

const App = () => {
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}}>  
          <StatusBar hidden />
          <AppNavigator />     
    </KeyboardAvoidingView>
  );
};

export default App;
