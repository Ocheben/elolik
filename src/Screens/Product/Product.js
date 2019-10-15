import React, { useState } from 'react';
import {
  ScrollView, Dimensions, Text, Image, Modal, View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Tab, Tabs, Button, Toast, Spinner
} from 'native-base';
import {
  MainView, BlockView, StyledText, Line, StyledButton
} from '../../Components/styledComponents';
import {
  Heart, CartIcon, ShareIcon
} from '../../Components/icons';
import { Rating } from '../../Components/FeaturedItem';
import BidModal from './BidModal';
import { APIS, requestJwt, toastDefault } from '../../_services';
import { TOKEN } from '../../../_services';

const { height, width } = Dimensions.get('window');

const img = require('../../assets/img/iphone.jpeg');

const tabStyles = {
  tabStyle: {
    backgroundColor: '#ffffff',
  },
  activeTabStyle: {
    borderBottomColor: '#abd136',
    backgroundColor: '#ffffff',
  },
  textStyle: {
    color: '#666666',
    fontWeight: '900',
    fontSize: 20
  },
  activeTextStyle: {
    color: '#000000',
    fontSize: 20
  }
};

const Product = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleModal = (value) => {
    setOpenModal(value);
  };
  const { navigation } = props;
  const productInfo = navigation.getParam('productInfo');
  const {
    rating, title, cost, description, id
  } = productInfo.meta;

  const addToCart = async () => {
    const { baseUrl, addToCart: { method, path } } = APIS;
    setLoading(true);
    const submitUrl = `${baseUrl}${path}`;
    const data = {
      id,
      quantity: 1,
    };
    const token = await AsyncStorage.getItem(TOKEN);
    console.log(data);
    const response = await requestJwt(method, submitUrl, data, token);
    if (response.success) {
      Toast.show({
        ...toastDefault,
        text: `You have added ${title} to your cart`,
        type: 'success',
      });
    } else if (response.error) {
      Toast.show({
        ...toastDefault,
        text: response.message,
        type: 'danger',
      });
    } else {
      console.log(response);
    }
    console.log(response);
    setLoading(false);
  };
  return (
    <View>
      <ScrollView>
        <Image source={{ uri: productInfo.images[0] }} style={{ height: height * 0.5, width }} resizeMode="cover" />
        <MainView>
          <BlockView vpadding={10} align="center" justify="space-between" height={height * 0.2}>
            <BlockView flex={1} align="center" justify="space-between">
              <StyledText size="22px" color="#000000" fontWeight="900">{ title }</StyledText>
              <StyledText size="22px" color="#000000" fontWeight="400">{ cost }</StyledText>
            </BlockView>
            <BlockView flex={1} flexD="row" justify="center" align="center">
              <Rating size={25} rating={rating} />
              <StyledText size="22px" color="#000000" fontWeight="400">
                {' '}
(
                { rating }
)
              </StyledText>
              <StyledText size="22px" color="#000000" fontWeight="400"> Write a review</StyledText>
            </BlockView>
          </BlockView>
          <Tabs tabBarUnderlineStyle={{ backgroundColor: '#abd136' }}>
            <Tab heading="Description" {...tabStyles}>
              <BlockView hpadding={15} vpadding={15} style={{ marginBottom: 100 }}>
                <StyledText size="18px" color="#666666" fontWeight="400">{ description }</StyledText>
              </BlockView>
            </Tab>
            <Tab heading="Features" {...tabStyles}>
              <Text>This is Tab 2</Text>
            </Tab>
            <Tab heading="Reviews" {...tabStyles}>
              <BlockView hpadding={15} vpadding={15}>
                <StyledText size="18px" color="#2196f3" fontWeight="400">Godfrey</StyledText>
                <StyledText size="18px" color="#666666" fontWeight="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledText>
                <BlockView flexD="row" justify="space-between">
                  <StyledText size="18px" color="#999999" fontWeight="400">March 25, 2016, 06:44</StyledText>
                  <Rating size={18} />
                </BlockView>
              </BlockView>
              <Line width="100%" height={1} bg="#e9e9e9" />
              <BlockView hpadding={15} vpadding={15}>
                <StyledText size="18px" color="#2196f3" fontWeight="400">Oche</StyledText>
                <StyledText size="18px" color="#666666" fontWeight="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledText>
                <BlockView flexD="row" justify="space-between">
                  <StyledText size="18px" color="#999999" fontWeight="400">March 25, 2016, 06:44</StyledText>
                  <Rating size={18} />
                </BlockView>
              </BlockView>
            </Tab>
          </Tabs>
          <Modal
            animationType="fade"
            transparent
            visible={openModal}
          >
            <MainView bg="transparent" vpadding={0} justify="center">
              <BidModal close={e => toggleModal(e)} productId={id} productName={title} />
            </MainView>
          </Modal>
        </MainView>
      </ScrollView>
      <BlockView bg="#ffffff" flexD="row" align="center" style={{ position: 'absolute', bottom: 0 }}>
        <BlockView flexD="row" justify="space-around" width="34%">
          <Heart size={30} hmargin={10} color="#666666" />
          <ShareIcon size={30} hmargin={10} color="#666666" />
        </BlockView>
        <StyledButton bg="#f58521" width="33%" height={55} onPress={() => toggleModal(true)}>
          <StyledText color="#ffffff">Bid</StyledText>
        </StyledButton>
        <StyledButton bg="#abd136" width="33%" height={55} onPress={() => addToCart()}>
          {
          loading
            ? <Spinner color="#ffffff" />
            : <StyledText color="#ffffff">Buy Now</StyledText>
        }
        </StyledButton>
      </BlockView>
    </View>
  );
};

Product.navigationOptions = () => ({
  headerTitle: (
    <BlockView justify="flex-end" hpadding={20} align="center" flexD="row">
      <Heart size={20} hmargin={10} color="#666666" />
      <CartIcon size={20} color="#666666" />
    </BlockView>
  )
});

export default Product;
