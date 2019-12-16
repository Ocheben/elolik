import React, { useState, useEffect } from 'react';
import {
  Dimensions, Image, View, FlatList, Text, StyleSheet
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Toast, Spinner } from 'native-base';
import {
  MainView, BlockView, StyledText, Line, DeleteIcon, StyledButton
} from '../../Components';
import Input from '../../Components/Input';
import {
  APIS, request, requestJwt, toastDefault
} from '../../_services';
import { TOKEN } from '../../../_services';

const { height, width } = Dimensions.get('window');
const img = require('../../assets/img/iphone.jpeg');

const CartItems = (props) => {
  const { isFocused } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [qtyArr, setQtyArr] = useState([]);
  useEffect(() => {
    getCart();
    console.log(isFocused);
  }, [isFocused]);

  const getCart = async () => {
    const { baseUrl, getCart: { method, path } } = APIS;
    const submitUrl = `${baseUrl}${path}`;
    setCartList([]);
    setQtyArr([]);
    console.log(submitUrl);
    const token = await AsyncStorage.getItem(TOKEN);
    const response = await requestJwt(method, submitUrl, {}, token);
    if (response.success) {
      console.log(response);
      setTotalPrice(response.success.map(item => item.quantity * parseInt(item.product.meta.cost, 10)).reduce((acc, cur) => acc + cur, 0));
      const newQtyArr = [];
      response.success.map(() => newQtyArr.push(false));
      setQtyArr(newQtyArr);
      return setCartList(response.success);
    }
    if (response.error) return response.error;
    console.log(response);
    return null;
  };


  const updateItem = async (count, id, index) => {
    const { baseUrl, updateItem: { method, path } } = APIS;
    const updateUrl = `${baseUrl}${path}`;
    const data = {
      cart_id: id,
      count
    };
    const token = await AsyncStorage.getItem(TOKEN);
    console.log(data);
    const response = await requestJwt(method, updateUrl, data, token);
    if (response.success) {
      Toast.show({
        ...toastDefault,
        text: 'You have successfully updated your cart',
        type: 'success',
      });
      getCart();
      openInput(index, false);
    } else if (response.errors) {
      Toast.show({
        ...toastDefault,
        text: response.message,
        type: 'danger',
      });
    } else {
      console.log(response);
    }
    console.log(response);
  };

  const deleteItem = async (id, title) => {
    const { baseUrl, deleteItem: { method, path } } = APIS;
    const deleteUrl = `${baseUrl}${path}${id}`;
    const token = await AsyncStorage.getItem(TOKEN);
    const response = await requestJwt(method, deleteUrl, {}, token);
    if (response.success) {
      Toast.show({
        ...toastDefault,
        text: `You have removed ${title} from your cart`,
        type: 'success',
      });
      return getCart();
    }
    Toast.show({
      ...toastDefault,
      text: response.message || 'Something might be wrong with your connection',
      type: 'danger',
    });
    console.log(response);
    return null;
  };

  const openInput = (index, action) => {
    const newArr = qtyArr.slice();
    newArr[index] = action;
    setQtyArr(newArr);
  };

  return (
    <ScrollView style={{ backgroundColor: '#e9e9e9' }}>
      <BlockView justify="space-between" flexD="row" bg="#ffffff" hpadding="15px">
        <StyledText color="#000000" size={width / 20}>Total Price:</StyledText>
        <StyledText color="#000000" size={width / 20} fontWeight="400">
          N
          {Number(totalPrice).toLocaleString()}
        </StyledText>
      </BlockView>
      <Line width="100%" vmargin="0px" bg="#e9e9e9" />
      <FlatList
        data={cartList}
        renderItem={({ item, index }) => {
          const { id, quantity } = item;
          const { title, cost } = item.product.meta;
          let showInput = false;
          return (
            <BlockView justify="space-between" flexD="row" height={height / 5} bg="#ffffff" vmargin={2}>
              <BlockView flex={1.5}>
                <Image source={{ uri: item.product.images[0] }} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
              </BlockView>
              <BlockView flex={2} justify="space-evenly" hpadding="10px" height="100%">
                <StyledText color="#000000" size={width / 20} fontWeight="500">{title}</StyledText>
                <StyledText color="#000000" size={width / 26} fontWeight="700">
                  N
                  {Number(parseInt(cost, 10) * quantity).toLocaleString()}
                </StyledText>
              </BlockView>
              <BlockView justify="space-evenly" align="center" height="100%">
                {
                qtyArr[index]
                  ? (
                    <Input
                      name="number"
                      keyType="numeric"
                      textType="none"
                      width="50%"
                      autoFocus
                  // value={quantity.toString()}
                  // handleChange={e => console.log(e)}
                      onSubmitEditing={({ nativeEvent }) => { updateItem(nativeEvent.text, id, index); }}
                    />
                  )
                  : (
                    <StyledButton bg="#ffffff" width="33%" height={55} onPress={() => openInput(index, true)}>
                      <StyledText color="#000000">{quantity}</StyledText>
                    </StyledButton>
                  )
              }

                <StyledButton bg="#ffffff" width="33%" height={55} onPress={() => deleteItem(id, title)}>
                  <DeleteIcon size={20} color="#999999" />
                </StyledButton>
              </BlockView>
            </BlockView>
          );
        }}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <BlockView width="100%" height={height / 3} justify="center" align="center"><Spinner color="#abd136" /></BlockView>
        )}
      />
    </ScrollView>
  );
};

export default withNavigationFocus(CartItems);

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    width: '100%',
    height: height / 3,
    justifyContent: 'center'
  }
});
