import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View , SafeAreaView, Image} from 'react-native'


import styles from './styles'


const Item = ({ navigation, data }) => {
  return (
    <TouchableOpacity style={{
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
}
Item.defaultProps = {}

export default Item
