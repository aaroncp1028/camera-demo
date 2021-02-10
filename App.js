/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import axios from 'axios';
import Orientation from 'react-native-orientation-locker';
import {RNCamera} from 'react-native-camera';
import SystemSetting from 'react-native-system-setting';

const App: () => React$Node = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Orientation.lockToLandscape();
    const volumeListener = SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
      console.log('===vol===', volume);
      handleShoot();
    });
    return () => {
      SystemSetting.removeListener(volumeListener);
    };
  }, []);
  const cameraRef = useRef(null);
  const handleShoot = async () => {
    if (cameraRef.current && !loading) {
      const options = {quality: 0.5, base64: false};
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
      uploadImage(data);
    }
  };
  const uploadImage = (data) => {
    let base_url = 'https://hey.com/post';
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
 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: 'grey', flexGrow: 1}}>
        <View
          style={{
            width: '50%',
            height: '50%',
            backgroundColor: 'blue',
            alignSelf: 'center',
          }}>
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
            captureAudio={false}
          />
        </View>
        <View style={{flexGrow: 1}}></View>
        <View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
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
  },
});

export default App;
