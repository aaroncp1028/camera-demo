import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DARK_BLUE, GREY } from '@themes/colors';
import { logout } from '@store/actions';
import { useDispatch } from 'react-redux';
import styles from './styles';
const backImg = require('@assets/images/bottom-nav/bottom-back.png');
const gearImg = require('@assets/images/bottom-nav/gear.png');
const galleryImg = require('@assets/images/bottom-nav/photo.png');
const playImg = require('@assets/images/bottom-nav/play.png');
const orderImg = require('@assets/images/bottom-nav/orders.png')
const accountImg = require('@assets/images/bottom-nav/account.png')
const CustomTabBar = (props) => {
  const { navigation } = props;
  const state = navigation.dangerouslyGetState();
  const routeName = state.routeNames[state.index];
  const dispatch = useDispatch();

  console.log('==================Custom bar props==============', routeName);
  let color = '#fffff';
  switch (routeName) {
    case 'Settings':
      color = DARK_BLUE;
      break;
    default:
      color = '#FFFFF';
  }

  return (
    <View style={{ height: 0 }}>
      <View
        style={styles.container}>
        <Image
          source={backImg}
          style={{
            resizeMode: 'stretch',
            width: '100%',
            position: 'absolute',
            height: '100%',
          }}
        />
        <View style={{ position: 'absolute' }}>
          <TouchableOpacity
            onPress={() => {
              console.log("=======gear press=======")
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              left: 20,
            }}>
            <Image source={gearImg} style={styles.gear}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 3.5,
            flexDirection: 'row',
            marginTop: 100,
          }}>
          <TouchableOpacity>
            <Image source={galleryImg} style={styles.gallery} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={playImg} style={styles.play} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.5 }}>
          <TouchableOpacity
            style={styles.bottomButton}>
            <Image source={orderImg} style={styles.order} />
            <Text style={{ color: 'white', fontSize: 12 }}>Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5 }}>
          <TouchableOpacity
            style={styles.bottomButton}>
            <Image source={orderImg} style={styles.order} />
            <Text style={{ color: 'white', fontSize: 12 }}>Help</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2 }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(logout());
            }}
            style={styles.bottomButton}>
            <Image source={accountImg} style={styles.order} />
            <Text style={{ color: 'white', fontSize: 12 }}>Account</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

CustomTabBar.propTypes = {};
CustomTabBar.defaultProps = {};

export default CustomTabBar;
