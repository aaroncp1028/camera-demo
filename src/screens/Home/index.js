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
import {
  SIDE_WIDTH,
  MID_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '@themes/dimension';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import axios from 'axios';
import Orientation from 'react-native-orientation-locker';
import { RNCamera } from 'react-native-camera';
import SystemSetting from 'react-native-system-setting';
import SwipeButton from 'rn-swipe-button';
import { useIsFocused } from '@react-navigation/native';

import Background from '@components/CameraBody';

import styles from './styles';
import {IS_IOS} from '@root/constants';

const viewfinder_img = require('@assets/images/view_finder_img.png');
const counter_img = require('@assets/images/counter_img.png');
const photo_img = require('@assets/images/photo_img.png');
const flash_img = require('@assets/images/flash_img.png');
const flash_off_img = require('@assets/images/flash_off_img.png');
const settings_img = require('@assets/images/settings_img.png');
const winder_image = require('@assets/images/winder_img.png');
const Home = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ratio, setRatio] = useState('1:1');
  const [flash, setFlash] = useState(true);
  const prepareRatio = async (DESIRED_RATIO) => {
    setRatio(DESIRED_RATIO);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    Orientation.lockToLandscape();
    const volumeListener = SystemSetting.addVolumeListener((data) => {
      const volume = data.value;
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

  useEffect(()=>{
    if(isFocused){
      Orientation.lockToLandscape();
    }
  },[isFocused])
  const handleVolume = (data) => {
    handleShoot();
  };
  const cameraRef = useRef(null);
  const handleShoot = async () => {
    if (cameraRef.current && !loading) {
      const options = {quality: 0.5, base64: false};
      const image = await cameraRef.current.takePictureAsync(options);
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
  const handleSettings = () => {
    navigation.navigate("BottomTabbed", {name: "Settings"})
  };
  const handleFlash = () => {
    if (flash) setFlash(false);
    else setFlash(true);
  };

  const handleRatio = () => {
    if (ratio === '3:2') prepareRatio('1:1');
    else prepareRatio('3:2');
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

  const maskStyle = useCallback(() => {
    if (ratio === '3:2')
      return [
        [
          {
            width: '101%',
            height: '16.6666%',
            backgroundColor: 'black',
            position: 'absolute',
            zIndex: 3,
          },
          {top: -2},
          {bottom: -1},
        ],
        {
          flexDirection: 'column',
        },
      ];
    else
      return [
        [
          {
            position: 'absolute',
            width: '12.5%',
            height: '103%',
            backgroundColor: 'black',
            zIndex: 3,
            top: -1,
            bottom: -1,
          },
          {left: 0},
          {right: 0},
        ],
        {
          flexDirection: 'row',
        },
      ];
  }, [ratio]);
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: 'grey',
          flexGrow: 1,
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Background />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <View style={styles.boxStyle}>
            <Image
              source={viewfinder_img}
              style={styles.viewFinderBackground}
            />
            <View style={[styles.viewFinder, maskStyle()[1]]}>
              <RNCamera
                ref={cameraRef}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={
                  flash
                    ? RNCamera.Constants.FlashMode.on
                    : RNCamera.Constants.FlashMode.off
                }
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                captureAudio={false}
              />
              <View style={[maskStyle()[0][0], maskStyle()[0][1]]}></View>
              <View style={[maskStyle()[0][0], maskStyle()[0][2]]}></View>
            </View>
          </View>
        </View>
        <View style={styles.counter}>
          <Image source={counter_img} style={styles.counterImg}></Image>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.counterText}>27</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.photo} onPress={() => handleShoot()}>
          <Image source={photo_img} style={styles.photoImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flash} onPress={() => handleFlash()}>
          <Image
            source={flash ? flash_img : flash_off_img}
            style={styles.flashImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settings}
          onPress={() => handleSettings()}>
          <Image source={settings_img} style={styles.settingsImage}></Image>
        </TouchableOpacity>
        <View
          onGestureEvent = {(e)=>{
            console.log('=============on gesture event=========', e)
          }}
          style={styles.winder}
        >
            <Image source={winder_image} style={styles.winderImage}></Image>
        </View>    
        
        <View style={{flexGrow: 1}}></View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
export default Home;
