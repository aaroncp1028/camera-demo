import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '@screens/Home'
import Settings from '@screens/Settings'

import { NAV_HEADER_OPTION } from '@navigation/constants'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Home" screenOptions={NAV_HEADER_OPTION}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Settings" component={Settings} />
    </AppStack.Navigator>
  )
}

AppStackScreen.propTypes = {}
AppStackScreen.defaultProps = {}

export default AppStackScreen