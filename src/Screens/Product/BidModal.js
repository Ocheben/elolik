import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Textarea } from "native-base";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ModalCard, MainView, StyledButton, BlockView, StyledText, Line } from '../../Components/styledComponents';
import { CloseIcon } from '../../Components/icons';

const { height, width } = Dimensions.get('window');

const BidModal = (props) => {
  const [state, setstate] = useState({
    formInputs: {}
  });
  return (
    <ModalCard br={3} height={height * 0.8} flex={0} width={width * 0.8}>
      <BlockView align="center" justify="flex-start" width={width * 0.8} hpadding={10}>
        <View style={{ alignItems: 'flex-end', width: '100%' }}>
          <StyledButton width="10%" height={30} onPress={() => props.close(false)}>
            <CloseIcon size={20} color="#999999" />
          </StyledButton>
        </View>
        <BlockView flex={1} hpadding={10}>
          <StyledText color="#999999" size="18px">Godfrey</StyledText>
          <StyledText color="#f58521" size="22px" fontWeight="700">Bid: N80,000.00</StyledText>
          <Line width="100%" height={1.5} bg="#e9e9e9" />
        </BlockView>
        <BlockView flex={1} hpadding={10}>
          <StyledText color="#999999" size="18px">Joe</StyledText>
          <StyledText color="#f58521" size="22px" fontWeight="700">Bid: N75,000.00</StyledText>
          <Line width="100%" height={1.5} bg="#e9e9e9" />
        </BlockView>
        <BlockView flex={1} hpadding={10}>
          <StyledText color="#999999" size="18px">Queen</StyledText>
          <StyledText color="#f58521" size="22px" fontWeight="700">Bid: N70,000.00</StyledText>
          <Line width="100%" height={1.5} bg="#e9e9e9" />
        </BlockView>
        <BlockView flex={5} align="center" hpadding={10} justify="space-around">
          <StyledText color="#999999" size="14px">You will be charged N50 from your bidding credit to enter this auction and this allows you to bid multiple times. The incremental bid on this item is N2000</StyledText>
          <Textarea rowSpan={5} bordered placeholder="Textarea" style={{width: '90%', borderRadius: 5}} />
          <StyledText color="#999999" size="14px">Your bidding credit balance is N287</StyledText>
          <StyledButton bg="#f58521" width="33%" height={55} curved>
            <StyledText color="#ffffff">Bid</StyledText>
          </StyledButton>
        </BlockView>
      </BlockView>
    </ModalCard>
  );
};

export default BidModal;
