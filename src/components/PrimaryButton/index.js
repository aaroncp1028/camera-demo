import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View , SafeAreaView, Image} from 'react-native'
import styles from './styles'

const Item = ({ navigation, textSize, text, style, color }) => {
  return (
    <TouchableOpacity style={style}>
        <View style={styles.backButton}>
        </View>
        <View style={styles.upButton}>
            <Text style={{fontSize: textSize, color, textAlign: 'center'}}>
            {text}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

Item.propTypes = {
  navigation: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  textSize: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
}
Item.defaultProps = {
    text: "Primary Button",
    textSize: 20,
    color: 'white'
}

export default Item
