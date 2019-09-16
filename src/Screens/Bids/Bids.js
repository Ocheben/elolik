import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import {
 MainView, BlockView, StyledText, StyledButton, Circle 
} from '../../Components';

const { height, width } = Dimensions.get('window');

const Bids = () => (
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
      <StyledButton borderR={5} width="40%" bg="#ffff">
        <StyledText fontWeight="400" color="#f58521" size="18px">Add Fund</StyledText>
      </StyledButton>
    </BlockView>
    <BlockView bg="#ffffff" height={height / 2}>
      <BlockView flexD="row" justify="space-around">
        <Circle bg="#ffffff" borderR={width / 8} width={width / 4} borderW={4} height={width / 4} borderC="#f58521" />
        <Circle bg="#ffffff" borderR={width / 8} width={width / 4} borderW={4} height={width / 4} borderC="#f58521" />
      </BlockView>
    </BlockView>
  </MainView>
);

export default Bids;
