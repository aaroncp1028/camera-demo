import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {useIsFocused} from '@react-navigation/native';

import styles from './styles';

const logo_img = require('@assets/images/logo.png');

const AuthScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [regMode, setRegMode] = useState(true);
  useEffect(() => {
    if (isFocused) Orientation.lockToPortrait();
  }, [isFocused]);
  const hintText = useCallback(() => {
    if (regMode) return 'Already have an account? Log In';
    else return `Don't have an account? Sign Up`;
  }, [regMode]);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          {regMode && (
            <View style={styles.inputRow}>
              <Text style={styles.rowText}>Name:</Text>
              <TextInput style={styles.rowInput}></TextInput>
            </View>
          )}

          <View style={styles.inputRow}>
            <Text style={styles.rowText} textContentType='email'>Email:</Text>
            <TextInput style={styles.rowInput}></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.rowText}>Password:</Text>
            <TextInput style={styles.rowInput} secureTextEntry={true} ></TextInput>
          </View>
          {!regMode && (
            <View style={styles.inputRow}>
              <TextInput editable={false} style={styles.hidden}></TextInput>
            </View>
          )}
          <View style={styles.inputRow}>
            <Text style={styles.rowText}></Text>
            <TouchableOpacity style={{flex: 5}}>
              <Text style={styles.btnSignup}>
                {regMode ? 'Sign Up' : 'Log In'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.inputRow}
            onPress={() => {
              setRegMode(!regMode);
            }}>
            <Text style={styles.question}>{hintText()}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Welcome to Later.com</Text>
        <Image style={styles.logo} source={logo_img}></Image>
      </View>
    </View>
  );
};

AuthScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
AuthScreen.defaultProps = {};

export default AuthScreen;
