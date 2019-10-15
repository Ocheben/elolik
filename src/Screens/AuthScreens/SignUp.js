
import React, { useState } from 'react';
import { StatusBar, CheckBox, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { onSignIn } from '../../../_services';
import {
  MainView, StyledText, LogoImg, StyledButton, BlockView
} from '../../Components/styledComponents';
import Input from '../../Components/Input';
import { APIS, request } from '../../_services';

const img = require('../../assets/img/logo.png');

const { height, width } = Dimensions.get('window');


const SignUp = (props) => {
  const signUp = () => {
    const { navigation } = props;
    onSignIn().then(() => navigation.navigate('SignedIn'));
  };

  const [formInputs, setformInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  });

  // const signIn = () => {
  //   const { navigation } = props;
  //   navigation.navigate('SignIn');
  // };

  const handleChange = (text, name) => {
    setformInputs(prev => ({
      ...prev,
      [name]: text
    }));
    console.log(formInputs);
  };

  const handleSubmit = async () => {
    const { baseUrl, register: { method, url } } = APIS;
    const submitUrl = `${baseUrl}${url}`;
    const { navigation } = props;

    const response = await request(method, submitUrl, formInputs);
    if (response.success) {
      navigation.navigate('Otp', formInputs.email);
    } else if (response.errors) {
      console.log(response.errors);
    } else {
      console.log(response);
    }
    console.log(response);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <MainView bg="#ffffff" justify="space-between" vpadding={40} hpadding={25}>
        <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
        <LogoImg bmargin={30} width={width * 0.4} source={img} resizeMode="contain" />
        <BlockView flex={2}>
          <StyledText color="#000000" size="22px" fontWeight={900} width="100%">Profile Details</StyledText>
          <Input label="First name" name="first_name" textType="name" handleChange={handleChange} />
          <Input label="Last name" name="last_name" textType="familyName" handleChange={handleChange} />
        </BlockView>
        <BlockView flex={3} align="center">
          <StyledText color="#000000" size="22px" fontWeight={900} width="100%">Account Details</StyledText>
          <Input label="Phone" name="phone" keyType="phone-pad" textType="telephoneNumber" handleChange={handleChange} />
          <Input label="Email" name="email" keyType="email-address" textType="emailAddress" handleChange={handleChange} />
          <Input label="Password" name="password" textType="password" handleChange={handleChange} />
          <Input label="Repeat Password" name="repeat_password" textType="password" handleChange={handleChange} />
          <BlockView flexD="row" justify="center" style={{ paddingTop: 8 }} width="91%">
            <StyledText color="#000000" fontWeight={400} size="17px">Register as Vendor</StyledText>
            <CheckBox />
          </BlockView>
        </BlockView>

        <StyledButton width="90%" onPress={() => handleSubmit()} title="Sign Up" bg="#abd136"><StyledText textAlign="center" size="22px">Sign Up</StyledText></StyledButton>
      </MainView>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
