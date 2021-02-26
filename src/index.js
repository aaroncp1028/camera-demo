import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

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