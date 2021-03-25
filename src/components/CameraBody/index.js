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
  LEFT_WIDTH,
  SCREEN_WIDTH,
} from '@themes/dimension';
import styles from './styles';

const body_left = require('@assets/images/body-left.png')
const body_main = require('@assets/images/cam-body/tiger.png')
const body_right = require('@assets/images/body-right.png')

const CameraBody = () => {
  return (
    <View
      style={styles.container}>
      <Image
        style={{
          resizeMode: 'stretch',
          width: LEFT_WIDTH,
          height: SCREEN_HEIGHT,
          position: 'absolute',
          left: 0,
        }}
        source={body_left}
      />
      <Image
        style={{
          resizeMode: 'stretch',
          height: SCREEN_HEIGHT,
          width: MID_WIDTH,
          position: 'absolute',
          right: SIDE_WIDTH,
        }}
        source={body_main}
      />
      <Image
        style={{
          resizeMode: 'stretch',
          width: SIDE_WIDTH,
          height: SCREEN_HEIGHT,
          position: 'absolute',
          right: 0,
        }}
        source={body_right}
      />
    </View>
  );
};

export default CameraBody;
