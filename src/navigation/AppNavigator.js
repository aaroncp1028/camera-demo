import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { useNavigationState } from "@react-navigation/native"

import Spinner from 'react-native-loading-spinner-overlay';
import ToastMessage from '@components/ToastMessage';
import {TouchableOpacity, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Home from '@screens/Home';
import Settings from '@screens/Settings';
import Auth from '@screens/Auth';
import { NAV_HEADER_OPTION } from '@navigation/constants';
import TabBar from './TabBar';
import { Axios } from '@root/utils';

const AppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function NoTab(props) {

  
  const token = useSelector((state) => state.auth.token); 
  useEffect(() => {
    if (token && token != 'NULL') {
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      console.log('======go to authed tab======', token);
      setTimeout(() => {
        props.navigation.navigate('BottomTabbed',{name:'Settings'});  
      }, 1000);
    }
  }, [token]);
  return (
    <AppStack.Navigator
      initialRouteName="Auth"
      screenOptions={NAV_HEADER_OPTION}>
      <AppStack.Screen name="Auth" component={Auth} />
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

function BottomTabbed(props) {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (token && token == 'NULL') {
      console.log('======go to No tab======', token);
      props.navigation.navigate('NoTab',{name:"Auth"});
      return
    }
  }, [token]);
  return (
    <BottomTab.Navigator
      initialRouteName="Settings"
      tabBar={(props) => <TabBar {...props} />}>
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
}

const AppStackScreen = (props) => {
  const token = useSelector((state) => state.auth.token);
  return (
    <>
      <AppStack.Navigator
        screenOptions={NAV_HEADER_OPTION}
        initialRouteName={'NoTab'}>
        <AppStack.Screen name="BottomTabbed" component={BottomTabbed} />
        <AppStack.Screen name="NoTab" component={NoTab} />
      </AppStack.Navigator>
      <ToastMessage></ToastMessage>
    </>
  );
};

AppStackScreen.propTypes = {};
AppStackScreen.defaultProps = {};

export default AppStackScreen;
