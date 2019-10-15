import React, { useState, useEffect } from 'react';
import { Dimensions, View  } from 'react-native';
import { Tabs, Tab, TabHeading } from 'native-base';
import { StyledText, StyledButton, BlockView } from '../../Components/styledComponents';
import { TabIcon, CartIcon } from '../../Components';
import CartItems from './CartItems';


const { height, width } = Dimensions.get('window');

const Cart = () => {
  const [currentPage, setcurrentPage] = useState(0);
  return (
    <Tabs page={currentPage} tabBarUnderlineStyle={{ backgroundColor: '#ffffff' }} tabContainerStyle={{ height: height / 8, backgroundColor: '#ffffff' }}>
      <Tab heading={<TabHeading icon={CartIcon} style={{ backgroundColor: '#ffffff', justifyContent: 'flex-start', marginLeft: width / 10 }}><TabIcon title="Cart" active={currentPage === 0} completed={currentPage > 0} /></TabHeading>}>
        <CartItems />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
        >
          <StyledButton width="50%" height={height / 15} bg="#abd136" onPress={() => setcurrentPage(1)}>
            <StyledText size={width / 20} fontWeight="500">Next Step</StyledText>
          </StyledButton>
        </View>
      </Tab>
      <Tab heading={<TabHeading style={{ backgroundColor: '#ffffff', justifyContent: 'flex-start' }}><TabIcon title="Delivery" active={currentPage === 1} completed={currentPage > 1} /></TabHeading>}>
        <StyledText color="#000000">This is Tab {currentPage}</StyledText>
        <StyledButton bg="red" onPress={() => setcurrentPage(2)}><StyledText>Next</StyledText></StyledButton>
        <StyledButton bg="red" onPress={() => setcurrentPage(0)}><StyledText>Back</StyledText></StyledButton>
      </Tab>
      <Tab heading={<TabHeading style={{ backgroundColor: '#ffffff', justifyContent: 'flex-start' }}><TabIcon title="Payment" active={currentPage === 2} completed={currentPage > 2} /></TabHeading>}>
        <StyledText color="#000000">This is Tab {currentPage}</StyledText>
        <StyledButton bg="red" onPress={() => setcurrentPage(3)}><StyledText>Next</StyledText></StyledButton>
        <StyledButton bg="red" onPress={() => setcurrentPage(1)}><StyledText>Back</StyledText></StyledButton>
      </Tab>
      <Tab heading={<TabHeading style={{ backgroundColor: '#ffffff', justifyContent: 'flex-start' }}><TabIcon title="Order" active={currentPage === 3} last /></TabHeading>}>
        <StyledText color="#000000">This is Tab {currentPage}</StyledText>
        <StyledButton bg="red" onPress={() => setcurrentPage(2)}><StyledText>Back</StyledText></StyledButton>
      </Tab>
    </Tabs>
  );
};

export default Cart;
