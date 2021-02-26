import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { register, login } from '@store/actions'

import styles from './styles';
import Toast from 'react-native-toast-message';

const logo_img = require('@assets/images/logo.png');

const AuthScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [regMode, setRegMode] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    if (isFocused) Orientation.lockToPortrait();
  }, [isFocused]);

  useEffect(()=>{
    token && navigation.navigate('Home')
  }, [token])


  const hintText = useCallback(() => {
    if (regMode) return 'Already have an account? Log In';
    else return `Don't have an account? Sign Up`;
  }, [regMode]);

  const handleSubmit = () =>{
    if(regMode){
      const data = {
        email,
        password,
        name
      }
      dispatch(register(data))
    }else{
      const data ={
        email,
        password
      }
      dispatch(login(data))
    }
  }
  const handleEmail = (e) =>{
    setEmail(e)
  }
  const handleName = (e) =>{
    setName(e)
  }
  const handlePassword = (e) =>{
    setPassword(e)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          {regMode && (
            <View style={styles.inputRow}>
              <Text style={styles.rowText}>Name:</Text>
              <TextInput style={styles.rowInput} onChangeText={handleName}></TextInput>
            </View>
          )}

          <View style={styles.inputRow}>
            <Text style={styles.rowText} textContentType='email'>Email:</Text>
            <TextInput style={styles.rowInput} onChangeText={handleEmail}></TextInput>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.rowText}>Password:</Text>
            <TextInput style={styles.rowInput} secureTextEntry={true} onChangeText={handlePassword}></TextInput>
          </View>
          {!regMode && (
            <View style={styles.inputRow}>
              <TextInput editable={false} style={styles.hidden}></TextInput>
            </View>
          )}
          <View style={styles.inputRow}>
            <Text style={styles.rowText}></Text>
            <TouchableOpacity style={{flex: 5}} onPress={()=>handleSubmit()}>
              <Text style={styles.btnSignup}>
                {regMode ? 'Sign Up' : 'Log In'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.inputRow]}
            onPress={() => {
              setRegMode(!regMode);
            }}>
            <Text style={styles.question}>{hintText()}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Welcome to Later</Text>
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
