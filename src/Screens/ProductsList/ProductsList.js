/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, Dimensions, View, Text, FlatList, StyleSheet
} from 'react-native';
import { Toast, Spinner } from 'native-base';
import { MainView, BlockView, StyledText } from '../../Components/styledComponents';
import { CategoryItem, ItemCard } from '../../Components/FeaturedItem';
import {
  FilterIcon, ListIcon, GridIcon, BackArrow
} from '../../Components/icons';
import { APIS, request } from '../../_services';

const img = require('../../assets/img/iphone.jpeg');

const { height } = Dimensions.get('window');

const ProductsList = (props) => {
  const { navigation } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { baseUrl, filterProducts: { method, path } } = APIS;
      const submitUrl = `${baseUrl}${path}/?category=${navigation.getParam('categoryId', 1)}`;
      console.log(submitUrl);
      const response = await request(method, submitUrl);
      if (response.success) {
        console.log(response);
        return setProducts(response.success);
      }
      if (response.error) return response.error;
      console.log(response);
      return null;
    };
    getProducts();
  }, []);
  return (
    <ScrollView>
      <MainView justify="space-between">
        <BlockView vpadding={7} hpadding={10} flexD="row">
          <BlockView flexD="row" align="center" justify="flex-start" width="40%">
            <FilterIcon size={20} color="#999999" />
          </BlockView>
          <BlockView flexD="row" align="center" justify="flex-end" width="30%">
            <GridIcon size={20} color="#999999" />
          </BlockView>
        </BlockView>
        {
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
        // <BlockView flexD="row" justify="space-around" align="center" vpadding={3} width="100%" hpadding={10}>
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        //   <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        // </BlockView>
      }
      </MainView>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => {
          const {
            id, title, cost, minimum_bid
          } = item.meta;
          return (
            <ItemCard
              navigate={() => navigation.navigate('Product', { productInfo: item })}
              itemWidth={0.45}
              key={id}
              rmargin
              img={{ uri: item.images[0] }}
              desc={title}
              oldPrice={minimum_bid}
              newPrice={cost}
            />
          );
        }}
        keyExtractor={item => item.meta.id}
        ListEmptyComponent={() => (<BlockView width="100%" height={height / 2} justify="center" align="center"><Spinner color="#abd136" /></BlockView>)}
        columnWrapperStyle={styles.flatList}
      />
    </ScrollView>
  );
};

ProductsList.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
      <StyledText color="#000000" fontWeight="500" size="24px">{navigation.getParam('pageTitle', 'Accessories')}</StyledText>
    </BlockView>
  )
});

export default ProductsList;

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    width: '95%'
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
