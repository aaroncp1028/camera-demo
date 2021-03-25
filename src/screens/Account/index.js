import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, View, SafeAreaView, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';

import { getAvaiableCamera } from '@store/actions'

import Orientation from 'react-native-orientation-locker';
import PrimaryButton from '@components/PrimaryButton';

import styles from './styles'
const account = require('@assets/images/titles/account.png')

const CamName = ({ navigation }) => {
    const handleNewCam = useCallback(() => {
        console.log("==pressed=======")
        navigation.navigate('NewCam')
    }, [navigation])
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const cameras = useSelector(state => state.camera.cameras)

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <Image source={account} style={{
                    resizeMode: 'stretch',
                    width: "90%",

                    alignSelf: 'center'
                }} />

                <View style={styles.inputRow}>
                    <Text style={styles.rowText} keyboardType="email-address">
                        Your Name
                    </Text>
                    <TextInput
                        style={styles.rowInput}
                        
                        keyboardType="email-address"
                        onChangeText={()=>null}></TextInput>
                </View>

                <View style={styles.inputRow}>
                    <Text style={styles.rowText} keyboardType="email-address">
                        E-Mail
                    </Text>
                    <TextInput
                        style={styles.rowInput}
                        
                        keyboardType="email-address"
                        onChangeText={()=>null}></TextInput>
                </View>

                <PrimaryButton
                    style={{
                        width: "90%",
                        height: 50,

                        marginTop: 30,
                        alignSelf: 'center',
                    }}

                    text={"UPDATE"}
                />

                <PrimaryButton
                    style={{
                        width: "90%",
                        height: 50,

                        marginTop: 30,
                        alignSelf: 'center',
                    }}

                    text={"CHANGE PASSWORD"}
                />

                <PrimaryButton
                    style={{
                        width: "90%",
                        height: 50,

                        marginTop: 30,
                        alignSelf: 'center',
                    }}

                    text={"NOTIFICATION"}
                />

                <PrimaryButton
                    style={{
                        width: "90%",
                        height: 50,

                        marginTop: 30,
                        alignSelf: 'center',
                    }}

                    text={"PEACE OUT"}
                />

                <PrimaryButton
                    style={{
                        width: "90%",
                        height: 50,

                        marginTop: 30,
                        alignSelf: 'center',
                    }}

                    text={"CLOSE ACCOUNT"}
                />

            </SafeAreaView>
        </View>
    )
}

CamName.propTypes = {
    navigation: PropTypes.object.isRequired,
}
CamName.defaultProps = {}

export default CamName
