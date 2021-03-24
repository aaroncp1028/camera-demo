import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View , SafeAreaView, Image} from 'react-native'
import styles from './styles'

const PrimaryButton = ({ navigation, textSize, text, style, color, onPress, foreColor }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.9} onPress={ onPress }>
        <View style={[styles.backButton]}>
        </View>
        <View style={[styles.upButton, , {backgroundColor: foreColor}]}>
            <Text style={{fontSize: textSize, color, textAlign: 'center'}}>
            {text}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

PrimaryButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  foreColor: PropTypes.string.isRequired,
  onPress: PropTypes.func
}
PrimaryButton.defaultProps = {
    text: "Primary Button",
    textSize: 20,
    color: 'white',
    onPress: ()=>null,
    foreColor: '#FF0D9D'
}

export default PrimaryButton
