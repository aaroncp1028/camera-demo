import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

const AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Scene1')}>
        <Text style={styles.title}>Goto Scene 1</Text>
      </TouchableOpacity>
    </View>
  )
}

AuthScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
AuthScreen.defaultProps = {}

export default AuthScreen
