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
const title_cams = require('@assets/images/titles/cams.png')

const Cameras = ({ navigation }) => {
    const handleNewCam = useCallback(()=>{
        console.log("==pressed=======")
        navigation.navigate('NewCam')
    },[navigation])
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const cameras = useSelector(state => state.camera.cameras)
    useEffect(() => {
        if (isFocused) {
            Orientation.lockToPortrait()
            dispatch(getAvaiableCamera())
        }
        console.log("====camera list view=====", cameras)
    }, [isFocused])

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Image source={title_cams} style={{
                    resizeMode: 'contain',
                    width: "53%",
                    alignSelf:"center"
                }} />
                <PrimaryButton 
                    onPress={()=>handleNewCam()}
                    style={{
                    width: "33%",
                    height: 50,
                    marginBottom: 30,
                    marginTop: 10,
                    alignSelf: 'center'
                }}
                    text={"NEW CAM"}
                />
                <CamList list={cameras}/>
            </SafeAreaView>
        </View>
    )
}

Cameras.propTypes = {
    navigation: PropTypes.object.isRequired,
}
Cameras.defaultProps = {}

export default Cameras
