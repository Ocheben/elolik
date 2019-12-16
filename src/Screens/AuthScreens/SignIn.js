
import React, { useState } from 'react';
import {
  View, StatusBar, TouchableOpacity, Dimensions
} from 'react-native';
import { Toast, Spinner } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { onSignIn } from '../../../_services';
import {
  MainView, StyledText, LogoImg, StyledButton, BlockView, Line
} from '../../Components/styledComponents';
import Input from '../../Components/Input';
import { APIS, request, toastDefault } from '../../_services';
// import SignUp from './SignUp';

const logo = require('../../assets/img/logo.png');

const { width } = Dimensions.get('window');

const SignIn = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(false);
  const [formInputs, setformInputs] = useState({
    email: '',
    password: '',
    remember_me: 1
  });

  const signIn = async (user) => {
    await onSignIn(user);
    navigation.navigate('SignedIn');
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  const handleChange = (text, name) => {
    setformInputs(prev => ({
      ...prev,
      [name]: text
    }));
  };

  const handleSubmit = async () => {
    const { baseUrl, login: { method, url } } = APIS;
    const submitUrl = `${baseUrl}${url}`;
    navigation.navigate('SignedIn');

    // setLoading(true);
    // const response = await request(method, submitUrl, formInputs);
    // if (response.access_token) {
    //   Toast.show({
    //     ...toastDefault,
    //     text: 'You have successfully logged in',
    //     type: 'success',
    //   });
    //   setLoading(false);
    //   await signIn(JSON.stringify(response));
    //   console.log(response);
    // } else if (response.error) {
    //   Toast.show({
    //     ...toastDefault,
    //     text: response.error,
    //     type: 'danger',
    //   });
    //   setLoading(false);
    // } else {
    //   console.log(response);
    // }
    // console.log(response);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <MainView bg="#ffffff" justify="space-between" vpadding={40} hpadding={25}>
        <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
        <View style={{ flex: 4, justifyContent: 'center' }}>
          <LogoImg bmargin={30} width={width * 0.4} source={logo} resizeMode="contain" />
        </View>
        <BlockView flex={4} justify="center">
          <Input label="Email" name="email" labelProps={{ color: '#666666' }} keyType="email-address" textType="emailAddress" handleChange={handleChange} />
          <Input label="Password" labelProps={{ color: '#666666' }} name="password" textType="password" handleChange={handleChange} secureTextEntry />
        </BlockView>
        <BlockView flex={1} align="center" justify="flex-end">
          <StyledButton curved width="100%" onPress={() => handleSubmit()} title="Sign In" bg="#abd136">
            {
            loading
              ? <Spinner color="#ffffff" />
              : <StyledText textAlign="center" size="22px">Sign In</StyledText>
          }

          </StyledButton>
          <BlockView flexD="row" align="center" justify="center">
            <Line />
            <StyledText textAlign="center" width="15%" color="#999999" size="18px">Or</StyledText>
            <Line />
          </BlockView>
          <StyledButton curved width="100%" title="FACEBOOK LOGIN" bg="#1e5096">
            <StyledText textAlign="center" size="18px">FACEBOOK LOGIN</StyledText>
          </StyledButton>
          <BlockView flexD="row" vpadding={5} justify="center">
            <StyledText textAlign="center" width="60%" color="#999999" size="18px">Don&#39;t have an account?</StyledText>
            <TouchableOpacity onPress={() => signUp()}>
              <StyledText textAlign="center" width="100%" color="#00bbd4" size="18px">Sign Up</StyledText>
            </TouchableOpacity>
          </BlockView>
        </BlockView>
      </MainView>
    </KeyboardAwareScrollView>
  );
};
SignIn.navigationOptions = () => ({
  header: null
});

export default SignIn;
