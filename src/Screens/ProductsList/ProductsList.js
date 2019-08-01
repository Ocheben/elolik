import React, { Component } from 'react';
import {
  ScrollView, Dimensions, View, Text
} from 'react-native';
import { MainView, BlockView, StyledText } from '../../Components/styledComponents';
import { CategoryItem, ItemCard } from '../../Components/FeaturedItem';
import {
  FilterIcon, ListIcon, GridIcon, BackArrow
} from '../../Components/icons';

const img = require('../../assets/img/iphone.jpeg');


// eslint-disable-next-line react/prefer-stateless-function
export default class ProductsList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
        <StyledText color="#000000" fontWeight="500" size="24px">{navigation.getParam('pageTitle', 'Accessories')}</StyledText>
      </BlockView>
    )
  })

  render() {
    const { navigation } = this.props;
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

          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
          <BlockView flexD="row" justify="space-around" align="center" vpadding={10} width="100%" hpadding={10}>
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
            <ItemCard itemWidth={0.45} navigate={() => navigation.navigate('Product')} img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          </BlockView>
        </MainView>
      </ScrollView>
    );
  }
}
