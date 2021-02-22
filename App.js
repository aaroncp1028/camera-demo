/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
  TouchableWithoutFeedback,
  DeviceEventEmitter,
  Image,
} from 'react-native';
import axios from 'axios';
import Orientation from 'react-native-orientation-locker';
import {RNCamera} from 'react-native-camera';
import SystemSetting from 'react-native-system-setting';

const App: () => React$Node = () => {
  const ratios = ['1:1', '3:2'];
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState('1:1');
  const prepareRatio = async (DESIRED_RATIO) => {
    // if (Platform.OS === 'android' && cameraRef.current) {
    //      const ratios = await cameraRef.current.getSupportedRatiosAsync();
    //      console.log('=========ratios==========')
    //      console.log(ratios)
    //      // See if the current device has your desired ratio, otherwise get the maximum supported one
    //      // Usually the last element of "ratios" is the maximum supported ratio
    //      const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];

    // }
    setRatio(DESIRED_RATIO);
  };

  useEffect(() => {
    Orientation.lockToLandscape();
    const volumeListener = SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
      console.log('===vol===', volume);
      handleShoot();
    });
    const listener = DeviceEventEmitter.addListener(
      'volume-click',
      handleVolume,
    );
    return () => {
      DeviceEventEmitter.removeListener(listener);
    };
  }, []);
  const handleVolume = (data) => {
    console.log('===vol===', data);
    handleShoot();
  };
  const cameraRef = useRef(null);
  const handleShoot = async () => {
    if (cameraRef.current && !loading) {
      const options = {quality: 0.99, base64: false};
      const image = await cameraRef.current.takePictureAsync(options);
      console.log(image);
      var data = new FormData();
      data.append('file', {
        uri:
          Platform.OS === 'android'
            ? image.uri
            : image.uri.replace('file://', ''),
        name: `dummy${Date.now()}.jpg`,
        type: 'image/*',
      });
      setImage(image);
      uploadImage(data);
    }
  };
  const handleRatio = () => {
    console.log('=============hey handle ratio============');
    if (ratio === '3:2') prepareRatio('1:1');
    else prepareRatio('3:2');
  };
  const uploadImage = (data) => {
    let base_url = 'https://cctrphwvh.ngrok.io/later/photo';
    setLoading(true);
    axios
      .post(base_url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((resp) => {
        console.log(resp);
        setLoading(false);
      })
      .catch((e) => {
        console.log('err=============', e);
        setLoading(false);
      });
  };
  const boxStyle = useCallback(() => {
    return {
      width: 200,
      height: 200,
      backgroundColor: 'blue',
      position: 'relative',
    };
  }, [ratio]);
  const maskStyle = useCallback(() => {
    if (ratio === '3:2')
      return {
        width: '100%',
        height: 0,
        backgroundColor: 'blue',
        position: 'absolute',
      };
    else
      return {
        position: 'absolute',
        width: '100%',
        height: 200 / 3 / 2,
        backgroundColor: 'black',
      };
  }, [ratio]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: 'grey', flexGrow: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
            backgroundColor: 'red',
          }}>
          <View style={boxStyle()}>
            <RNCamera
              ref={cameraRef}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              ratio={ratio}
              captureAudio={false}
            />
            <View style={[maskStyle(), {top: 0}]}></View>
            <View style={[maskStyle(), {bottom: 0}]}></View>
          </View>
          <View>
            <Image
              source={image}
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
                marginLeft: 30,
              }}></Image>
          </View>
        </View>
        <View style={{flexGrow: 1}}></View>
        <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
          <TouchableOpacity
            style={styles.switchBtn}
            onPress={() => handleRatio()}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'red',
              alignSelf: 'flex-end',
              zIndex: 999,
            }}
            onPress={() => handleShoot()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  preview: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
  },
  switchBtn: {
    zIndex: 999,
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

export default App;
