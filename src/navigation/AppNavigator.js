import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spinner from 'react-native-loading-spinner-overlay';

import Home from '@screens/Home'
import Settings from '@screens/Settings'
import Auth from '@screens/Auth'
import { NAV_HEADER_OPTION } from '@navigation/constants'
import ToastMessage from '@components/ToastMessage'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <>
      <AppStack.Navigator initialRouteName="Auth" screenOptions={NAV_HEADER_OPTION}>
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Settings" component={Settings} />
      </AppStack.Navigator>
      <ToastMessage></ToastMessage>
    </>
  )
}

AppStackScreen.propTypes = {}
AppStackScreen.defaultProps = {}

export default AppStackScreen