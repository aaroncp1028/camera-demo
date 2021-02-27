import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';

import { getAvaiableCamera } from '@store/actions'
import styles from './styles'

const Settings = ({ navigation }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  useEffect(()=>{
    if(isFocused)
      dispatch(getAvaiableCamera())
  },[isFocused])

  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <Text style={styles.title}>Goto Scene 1</Text>
      </TouchableOpacity>
    </View>
  )
}

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
}
Settings.defaultProps = {}

export default Settings
