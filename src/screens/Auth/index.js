import React, {useEffect, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Orientation from 'react-native-orientation-locker';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '@store/actions';
import PrimaryButton from '@components/PrimaryButton';
import styles from './styles';

const logo_img = require('@assets/images/logo.png');
const welcome = require('@assets/images/titles/welcome.png')
const login_img = require('@assets/images/titles/welcome.png')
const signup_img = require('@assets/images/titles/welcome.png')
const AuthScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [regMode, setRegMode] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const error = useSelector((state) => state.auth.error?.data);
  const isNew = useSelector((state) => state.auth.isNew);

  const [formError, setFormError] = useState({
    password : [null],
    email: [null],
    name: [null]
  });

  useEffect(() => {
    if(isNew){
      setRegMode(false)
    }else{
      setRegMode(true)
    }
  }, [isNew])

  useEffect(() => {
    if (isFocused) {
      Orientation.lockToPortrait();
      clearForm()
    }
  }, [isFocused]);

  const hintText = useCallback(() => {
    if (regMode) return 'Already have an account? Log In';
    else return `Don't have an account? Sign Up`;
  }, [regMode]);

  const handleSubmit = () => {
    const isValid = formValidation()
    if(!isValid) return
    if (regMode) {
      const data = {
        email,
        password,
        name,
      };
      dispatch(register(data));
    } else {
      const data = {
        email,
        password,
      };
      dispatch(login(data));
    }
  };
  const handleEmail = (e) => {
    setEmail(e);
    setFormError({...formError, email: null});
  };
  const handleName = (e) => {
    setName(e);
    setFormError({...formError, name: null});
  };
  const handlePassword = (e) => {
    setPassword(e);
    setFormError({...formError, password: null});
  };
  const validateEmail = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const formValidation = () =>{

    let result = true
    let ferror = {}
    if( !password || password.length < 8){
      ferror['password'] = ['Password should be at least 8 letters']
      result = false
    }
    if(!email){
      ferror['email'] = ["E-Mail can't be blank"]
      result = false
    }else{
      if(!validateEmail()){
        ferror['email'] = ["Invalid E-Mail"]
        result = false
      }
    }
    
    if( !name && regMode){

      ferror['name'] = [`Name can't be blank`]
      result = false
    }
    console.log("===========validation============", ferror)
    console.log("===========validation old state============", formError)
    setFormError(ferror)
    return result
  }
  useEffect(() => {
    if (error) {
      console.log("===========error from api=======", error)
      setFormError(error);
    }
  }, [error]);

  const clearForm = () => {
    setFormError(null);
    emailRef.current?.clear();
    passwordRef.current?.clear();
    nameRef.current?.clear();
    setShowPassword(false)
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <View style={{flexGrow: 1, backgroundColor: '#6B62FF'}}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.box}>
            
            <Image style={styles.logo} source={welcome}></Image>
            <View style={styles.inputBox}>
              {regMode && (
                <View style={styles.inputRow}>
                  <Text style={styles.rowText}>Full Name (Required)</Text>
                  {formError && formError.name && (
                    <Text style={styles.errorText}>{formError.name}</Text>
                  )}
                  <TextInput
                    style={styles.rowInput}
                    autoFocus={true}
                    ref={nameRef}
                    onChangeText={handleName}></TextInput>
                </View>
              )}

              <View style={styles.inputRow}>
                <Text style={styles.rowText} keyboardType="email-address">
                  E-Mail (Required)
                </Text>
                {formError && formError.email && (
                  <Text style={styles.errorText}>{formError.email}</Text>
                )}
                <TextInput
                  style={styles.rowInput}
                  ref={emailRef}
                  keyboardType="email-address"
                  onChangeText={handleEmail}></TextInput>
              </View>
              <View style={styles.inputRow}>
                <Text style={styles.rowText}>Password (Required)</Text>
                {formError && formError.password && (
                  <Text style={styles.errorText}>{formError.password}</Text>
                )}
                <TextInput
                  style={styles.rowInput}
                  secureTextEntry={!showPassword}
                  ref={passwordRef}
                  onChangeText={handlePassword}></TextInput>
                <BouncyCheckbox
                  isChecked={showPassword}
                  textStyle={{color: "white"}}
                  fillColor="grey"
                  borderRadius={0}
                  borderColor='grey'
                  unfillColor='white'
                  text="Show password"
                  textDecoration={'false'}
                  style={{width: "95%"}}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>


              <PrimaryButton 
                    onPress={()=>{
                      if(!regMode)
                        handleSubmit()
                      setRegMode(false)
                    }}
                    style={{
                    width: "100%",
                    height: 50,
                    marginBottom: 30,
                    marginTop: 10,
                    alignSelf: 'center'
                }}
                    text={"D O P E"}
                />
            </View>
            <PrimaryButton 
                    onPress={()=>{
                      if(regMode)
                        handleSubmit()
                      setRegMode(true)  
                    }}
                    style={{
                    width: "100%",
                    height: 50,
                    marginBottom: 30,
                    marginTop: 10,
                    alignSelf: 'center',
                }}
                    foreColor= '#2E2E2E'
                    text={"HOME SKELETE"}
                />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

AuthScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
AuthScreen.defaultProps = {};

export default AuthScreen;
