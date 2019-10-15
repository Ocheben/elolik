import React, { useState, useEffect } from 'react';
import {
  Dimensions, Image, View, FlatList, Text, StyleSheet
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Toast, Spinner } from 'native-base';
import {
  MainView, BlockView, StyledText, Line, DeleteIcon
} from '../../Components';
import Input from '../../Components/Input';
import { APIS, request, requestJwt, toastDefault } from '../../_services';
import { TOKEN } from '../../../_services';

const { height, width } = Dimensions.get('window');
const img = require('../../assets/img/iphone.jpeg');

const CartItems = (props) => {
  const { isFocused } = props;
  const totalPrice = 'N90,000';
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    getCart();
    console.log(isFocused);
  }, [isFocused]);

  const getCart = async () => {
    const { baseUrl, getCart: { method, path } } = APIS;
    const submitUrl = `${baseUrl}${path}`;
    console.log(submitUrl);
    const token = await AsyncStorage.getItem(TOKEN);
    const response = await requestJwt(method, submitUrl, {}, token);
    if (response.success) {
      console.log(response);
      return setCartList(response.success);
    }
    if (response.error) return response.error;
    console.log(response);
    return null;
  };
  

  const updateItem = async (count, id) => {
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

  return (
    <ScrollView style={{ backgroundColor: '#e9e9e9' }}>
      <BlockView justify="space-between" flexD="row" bg="#ffffff">
        <StyledText color="#000000" size={width / 20}>Total Price:</StyledText>
        <StyledText color="#000000" size={width / 20} fontWeight="400">{totalPrice}</StyledText>
      </BlockView>
      <Line width="100%" vmargin="0px" bg="#e9e9e9" />
      <FlatList
        data={cartList}
        renderItem={({ item }) => {
          const { id, quantity } = item;
          const { title, cost } = item.product.meta;
          return (
            <BlockView justify="space-between" flexD="row" height={height / 5} bg="#ffffff" vmargin={2}>
              <BlockView flex={1.5}>
                <Image source={{ uri: item.product.images[0] }} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
              </BlockView>
              <BlockView flex={2} justify="space-evenly" height="100%">
                <StyledText color="#000000" size={width / 20} fontWeight="500">{title}</StyledText>
                <StyledText color="#000000" size={width / 26} fontWeight="700">
N
{cost}
</StyledText>
              </BlockView>
              <BlockView justify="space-evenly" align="center" height="100%">
                <Input
                  name="number"
                  keyType="numeric"
                  textType="none"
                  width="50%"
                  // value={quantity.toString()}
                  // handleChange={e => console.log(e)}
                  onSubmitEditing={({ nativeEvent }) => updateItem(nativeEvent.text, id)}
                />
                <TouchableOpacity onPress={() => deleteItem(id, title)}>
                  <DeleteIcon size={20} color="#999999" />
                </TouchableOpacity>
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
