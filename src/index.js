import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'

import AppNavigator from '@navigation/AppNavigator'

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <AppNavigator />
    </>
  )
}

export default App