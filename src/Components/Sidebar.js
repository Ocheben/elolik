import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { onSignOut } from '../../_services';
import { MainView, BlockView, StyledText, LogoImg } from './styledComponents';

const avatar = require('../assets/img/avatar.png');

const { height, width } = Dimensions.get('window');

const Sidebar = (props) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      setUserInfo(JSON.parse(user).user);
    };
    getUser();
  }, []);

  const signOut = () => {
    const { navigation } = props;
    onSignOut();
    navigation.navigate('SignedOut');
  };

  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    props.navigation.dispatch(navigateAction);
  };
  return (
    <View style={{ backgroundColor: '#f58521', height: '100%' }}>
      <View style={{ flexDirection: 'row', marginTop: height * 0.1, marginBottom: height * 0.05, marginLeft: width / 20 }}>
        <View style={{ borderRadius: width * 0.075, overflow: 'hidden', backgroundColor: '#ffffff' }}>
          <LogoImg source={avatar} width={width * 0.15} height={width * 0.15} resizeMode="contain" />
        </View>
        <BlockView hmargin={width / 30}>
          <StyledText color="#333333" size="27px">{'Godfrey'}</StyledText>
          <BlockView flexD="row" align="center">
            <StyledText color="#333333" size="17px">Bid Credit Balane: </StyledText>
            <StyledText color="#ffffff" size="17px">N287</StyledText>
          </BlockView>
        </BlockView>
      </View>
      <ScrollView>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">Deals</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">News</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">Contact Us</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">About Us</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">Settings</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">Login</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" uppercase fontWeight="400">Categories</StyledText>
          </BlockView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signOut()}>
          <BlockView width="100%" hmargin={width / 20} height={height / 15}>
            <StyledText color="#ffffff" size="22px" fontWeight="400" uppercase>Logout</StyledText>
          </BlockView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sidebar;
