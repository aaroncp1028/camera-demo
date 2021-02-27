import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { DARK_BLUE, GREY } from '@themes/colors';
import { logout } from "@store/actions"
import { useDispatch } from 'react-redux'

const backImg = require('@assets/images/tab_back_img.png');
const gearImg = require('@assets/images/btn_gear_img.png');
const galleryImg = require('@assets/images/btn_gallery_img.png');
const playImg = require('@assets/images/btn_play_img.png');
const CustomTabBar = (props) => {
  const { navigation } = props;
  const state = navigation.dangerouslyGetState();
  const routeName = state.routeNames[state.index];
  const dispatch = useDispatch()

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
    <View style={{height: 140, backgroundColor: color, flexDirection: 'row'}}>
      <Image
        source={backImg}
        style={{
          resizeMode: 'stretch',
          width: '100%',
          position: 'absolute',
          height: '100%',
        }}
      />
      <View style={{flex: 1}}>
        <TouchableOpacity
          
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <Image source={gearImg} style={{resizeMode: 'contain'}}></Image>
        </TouchableOpacity>
      </View>
      <View style={{flex: 3.5, flexDirection: 'row', paddingTop: 60, justifyContent:'center'}}>
        <TouchableOpacity>
          <Image source={galleryImg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Home')}
        >
          <Image source={playImg} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            paddingTop: 45,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: GREY,
              width: 15,
              height: 70,
              borderRadius: 10,
            }}></View>
          <Text style={{color: 'white', fontSize: 12}}>Order</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            paddingTop: 45,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: GREY,
              width: 15,
              height: 70,
              borderRadius: 10,
            }}></View>
          <Text style={{color: 'white', fontSize: 12}}>Friends</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 2}}>
        <TouchableOpacity
          onPress={()=>{
            dispatch(logout())
          }}
          style={{
            flexDirection: 'column',
            paddingTop: 40,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>Account</Text>
          <View
            style={{
              backgroundColor: GREY,
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: 5,
            }}></View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 1,
          position: 'absolute',
          width: '96%',
          bottom: 5,
          backgroundColor: DARK_BLUE,
          left: '2%',
        }}></View>
    </View>
  );
};

CustomTabBar.propTypes = {};
CustomTabBar.defaultProps = {};

export default CustomTabBar;
