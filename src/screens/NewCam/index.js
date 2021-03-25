import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';

import { getAvaiableCamera } from '@store/actions'

import Orientation from 'react-native-orientation-locker';
import PrimaryButton from '@components/PrimaryButton';

import CamList from './list'
import styles from './styles'
const pick_cam = require('@assets/images/titles/pick.png')

const Cameras = ({ navigation }) => {
    const handleNewCam = useCallback(()=>{
        console.log("==pressed=======")
        navigation.navigate('NewCam')
    },[navigation])
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const cameras = useSelector(state => state.camera.cameras)

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Image source={pick_cam} style={{
                    resizeMode: 'contain',
                    width: "90%",
                    alignSelf: 'center'
                }} />
              
                <CamList list={cameras} navigation={navigation}/>
            </SafeAreaView>
        </View>
    )
}

Cameras.propTypes = {
    navigation: PropTypes.object.isRequired,
}
Cameras.defaultProps = {}

export default Cameras
