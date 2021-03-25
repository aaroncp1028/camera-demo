import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View, SafeAreaView, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';

import { getAvaiableCamera } from '@store/actions'

import Orientation from 'react-native-orientation-locker';
import PrimaryButton from '@components/PrimaryButton';

import styles from './styles'
const name_cam = require('@assets/images/titles/name_cam.png')

const Account = ({ navigation }) => {
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
                <Image source={name_cam} style={{
                    resizeMode: 'stretch',
                    width: "60%",
                    
                    alignSelf: 'center'
                }} />
                <Text style={[styles.txt, {marginTop: 30}]}>LISA FRANK</Text>
                <Text style={[styles.txt, {marginBottom: 20}]}>#3 3  /   5,000</Text>
                <Image style={styles.camImage} source={{uri: "https://herman-cat.s3.amazonaws.com/later/90s_1.png"}}></Image>

                <Text style={styles.giveText}>Give your camera a name</Text>
                <TextInput style={styles.input}></TextInput>
                <View style={{width: "100%", marginTop: 20}}>
                <PrimaryButton 
                    style={{
                    width: "90%",
                    height: 50,
                    marginBottom: 30,
                    marginTop: 10,
                    alignSelf: 'center',
                }}
                    
                    text={"TIGHT"}
                />
                </View>
                
            </SafeAreaView>
        </View>
    )
}

Account.propTypes = {
    navigation: PropTypes.object.isRequired,
}
Account.defaultProps = {}

export default Account
