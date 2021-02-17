/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  DeviceEventEmitter
} from 'react-native';
import axios from 'axios';
import Orientation from 'react-native-orientation-locker';
import {RNCamera} from 'react-native-camera';
import SystemSetting from 'react-native-system-setting';


const App: () => React$Node = () => {
  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState('4:3')
  const prepareRatio = async (DESIRED_RATIO) => {
    if (Platform.OS === 'android' && cameraRef.current) {
         const ratios = await cameraRef.current.getSupportedRatiosAsync();
         console.log('=========ratios==========') 
         console.log(ratios)
         // See if the current device has your desired ratio, otherwise get the maximum supported one
         // Usually the last element of "ratios" is the maximum supported ratio
         const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
         
         setRatio(ratio);
    }
}

  useEffect(() => {
    Orientation.lockToLandscape();
    const volumeListener = SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
      console.log('===vol===', volume);
      handleShoot();
    });
    const listener = DeviceEventEmitter.addListener('volume-click', handleVolume)
    return () => {
      DeviceEventEmitter.removeListener(listener);
    };
  }, []);
  const handleVolume = (data) =>{
    console.log('===vol===', data);
    handleShoot();
  }
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
  const handleRatio = () =>{
    console.log("=============hey handle ratio============")
    if(ratio === '4:3')
      prepareRatio('1:1')
    else
      prepareRatio('4:3')  
  }
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
  const boxStyle = useCallback(
    () => {
      if(ratio==='4:3')
        return {
          width: 400,
          height: 300,
          backgroundColor: 'blue',
          alignSelf: 'center',
          borderColor:'red',
          borderWidth: 1
        }
      else
        return {
          width: 400,
          height: 400,
          backgroundColor: 'blue',
          alignSelf: 'center',
          borderColor:'red',
          borderWidth: 1
        }
    },
    [ratio],
  )
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: 'grey', flexGrow: 1}}>
        <View
          style={boxStyle()}>
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
         
        </View>
        <View>
          <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={()=>handleRatio()}>
            <View style={styles.switchBtn} >
            </View>
          </TouchableOpacity>
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
    borderColor: 'white',
    borderWidth: 2
  },
  switchBtn:{
    zIndex:999,
    width: 100, height: 100, backgroundColor: 'green',
  }
});

export default App;
