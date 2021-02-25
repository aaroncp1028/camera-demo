import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Scene1')}>
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
