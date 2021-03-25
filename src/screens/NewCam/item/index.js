import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View , SafeAreaView, Image} from 'react-native'


import styles from './styles'


const Item = ({ navigation, data, onTap }) => {
  return (
    <TouchableOpacity 
      onPress={onTap}
    style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height : 150
    }}>
        <Image 
            source={{uri: "https://herman-cat.s3.amazonaws.com/later/90s_1.png"}} 
            style={{
              width: "100%",
              height: 130,
              resizeMode: "contain"
            }}
        />
        <Text style={{
            color: 'white'
        }}>The Camera</Text>
        <Text style={{
            color: 'white'
        }}>23/27</Text>
        
    </TouchableOpacity>
  )
}

Item.propTypes = {
  navigation: PropTypes.object.isRequired,
  onTap: PropTypes.func
}
Item.defaultProps = {
  onTap: ()=>{}
}

export default Item
