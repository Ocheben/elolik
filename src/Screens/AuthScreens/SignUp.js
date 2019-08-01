
import React, { Component } from 'react';
import { StatusBar, CheckBox, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { onSignIn } from '../../../_services';
import {
  MainView, StyledText, LogoImg, StyledButton, BlockView
} from '../../Components/styledComponents';
import Input from '../../Components/Input';

const img = require('../../assets/img/logo.png');

const { height, width } = Dimensions.get('window');


export default class SignUp extends Component {
    // static navigationOptions = {
    //   header: null
    // }

    signUp = () => {
      const { navigation } = this.props;
      onSignIn().then(() => navigation.navigate('SignedIn'));
    }

    signIn = () => {
      const { navigation } = this.props;
      navigation.navigate('SignIn');
    }

    render() {
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
              <Input label="First name" />
              <Input label="Last name" />
            </BlockView>
            <BlockView flex={3} align="center">
              <StyledText color="#000000" size="22px" fontWeight={900} width="100%">Account Details</StyledText>
              <Input label="Username" />
              <Input label="Email" />
              <Input label="Password" />
              <BlockView flexD="row" justify="center" style={{ paddingTop: 8 }} width="91%">
                <StyledText color="#000000" fontWeight={400} size="17px">Register as Vendor</StyledText>
                <CheckBox />
              </BlockView>
            </BlockView>

            <StyledButton width="90%" onPress={() => this.signUp()} title="Sign Up" bg="#abd136"><StyledText textAlign="center" size="22px">Sign Up</StyledText></StyledButton>
          </MainView>
        </KeyboardAwareScrollView>
      );
    }
}
