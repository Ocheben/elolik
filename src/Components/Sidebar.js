import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

  const navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    props.navigation.dispatch(navigateAction);
  };
  return (
    <View style={{ backgroundColor: '#f58521', height: '100%' }}>
      <BlockView width="100%" flexD="row" tmargin={height * 0.05} style={{flexBasis: 1}}>
        <View style={{ borderRadius: width * 0.075, overflow: 'hidden', backgroundColor: '#ffffff' }}>
          <LogoImg source={avatar} width={width * 0.15} height={width * 0.15} resizeMode="contain" />
        </View>
        <BlockView>
          <StyledText color="#333333" size="27px">{userInfo.first_name}</StyledText>
          <BlockView flexD="row">
            <StyledText color="#333333" size="17px">Bid Credit Balane</StyledText>
            <StyledText color="#ffffff" size="27px">N287</StyledText>
          </BlockView>
        </BlockView>
      </BlockView>
      <ScrollView>
        <TouchableOpacity onPress={navigateToScreen('Bids')}>
          <BlockView width="100%">
            <StyledText color="#333333" size="17px" fontWeight="400">Bids</StyledText>
          </BlockView>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sidebar;
