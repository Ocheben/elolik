
import React, { Component } from 'react';
import {
  View, StatusBar, TouchableOpacity, Dimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { onSignIn } from '../../../_services';
import {
  MainView, StyledText, LogoImg, StyledButton, BlockView, Line
} from '../../Components/styledComponents';
import Input from '../../Components/Input';

const logo = require('../../assets/img/logo.png');
const { height, width } = Dimensions.get('window');

export default class App extends Component {
    static navigationOptions = {
      header: null
    }

    signIn = () => {
      const { navigation } = this.props;
      onSignIn().then(() => navigation.navigate('SignedIn'));
    }

    signUp = () => {
      const { navigation } = this.props;
      navigation.navigate('Phone');
    }

    render() {
      return (
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <MainView bg="#ffffff" justify="space-between" vpadding={40} hpadding={25}>
            <StatusBar backgroundColor="#ffffff" barStyle="light-content" />
            <View style={{ flex: 4, justifyContent: 'center' }}>
              <LogoImg bmargin={30} width={width*0.4} source={logo} resizeMode="contain" />
            </View>
            <BlockView flex={4} justify="center">
              <Input label="Username or email" labelProps={{ color: '#666666' }} />
              <Input label="Password" labelProps={{ color: '#666666' }} />
            </BlockView>
            <BlockView flex={1} align="center" justify="flex-end">
              <StyledButton width="100%" onPress={() => this.signIn()} title="Sign In" bg="#abd136">
                <StyledText textAlign="center" size="22px">Sign In</StyledText>
              </StyledButton>
              <BlockView flexD="row" align="center" justify="center">
                <Line />
                <StyledText textAlign="center" width="15%" color="#999999" size="18px">Or</StyledText>
                <Line />
              </BlockView>
              <StyledButton width="100%" title="FACEBOOK LOGIN" bg="#1e5096">
                <StyledText textAlign="center" size="18px">FACEBOOK LOGIN</StyledText>
              </StyledButton>
              <BlockView flexD="row" vpadding={5} justify="center">
                <StyledText textAlign="center" width="60%" color="#999999" size="18px">Don&#39;t have an account?</StyledText>
                <TouchableOpacity onPress={() => this.signUp()}>
                  <StyledText textAlign="center" width="100%" color="#00bbd4" size="18px">Sign Up</StyledText>
                </TouchableOpacity>
              </BlockView>
            </BlockView>
          </MainView>
        </KeyboardAwareScrollView>
      );
    }
}
