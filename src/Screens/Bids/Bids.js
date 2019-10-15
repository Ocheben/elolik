import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import {
 MainView, BlockView, StyledText, StyledButton, Circle 
} from '../../Components';
import { onSignOut } from '../../../_services';

const { height, width } = Dimensions.get('window');

const Bids = (props) => {
  const signOut = () => {
    const { navigation } = props;
    onSignOut();
    navigation.navigate('SignedOut');
  };
  return (
    <MainView>
      <BlockView bg="#f58521" align="center" justify="center" height={height / 2}>
        <View style={{
          backgroundColor: '#ffffff',
          borderRadius: width / 12,
          borderColor: '#ffffff',
          borderWidth: 1,
          width: width / 6,
          height: width / 6,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        />
        <StyledText fontWeight="400" color="#ffffff">Godfrey</StyledText>
        <StyledText fontWeight="400" color="#333333" size="30px">Bid Credit Bal.</StyledText>
        <StyledText fontWeight="900" color="#ffffff" size="70px">N287</StyledText>
        <StyledButton borderR={5} width="40%" bg="#ffff" onPress={() => signOut()}>
          <StyledText fontWeight="400" color="#f58521" size="18px">Add Fund</StyledText>
        </StyledButton>
      </BlockView>
      <BlockView bg="#ffffff" height={height / 2} align="center">
        <BlockView flexD="row" height="50%" justify="space-around" vmargin={10}>
          <BlockView height="100%" justify="space-around" align="center">
            <Circle bg="#ffffff" borderR={width / 8} width={width / 4} borderW={4} height={width / 4} borderC="#f58521" />
            <StyledText fontWeight="400" color="#999999" size="18px">Ongoing bids (3)</StyledText>
          </BlockView>
          <BlockView height="100%" justify="space-around" align="center">
            <Circle bg="#ffffff" borderR={width / 8} width={width / 4} borderW={4} height={width / 4} borderC="#f58521" />
            <StyledText fontWeight="400" color="#999999" size="18px">Won bids(0)</StyledText>
          </BlockView>
        </BlockView>
        <BlockView width="90%" bg="#abd136" align="center">
          <StyledText fontWeight="400" color="#ffffff" size="42px">UPCOMING</StyledText>
          <StyledText fontWeight="800" color="#ffffff" size="48px">AUCTION</StyledText>
          <StyledButton borderR={5} width="40%" bg="#ffff" onPress={() => signOut()}>
            <StyledText fontWeight="400" color="#abd136" size="18px">View</StyledText>
          </StyledButton>
        </BlockView>
      </BlockView>
    </MainView>
  );
};

export default Bids;
