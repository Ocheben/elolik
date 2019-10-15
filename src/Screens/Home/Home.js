/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, View, Text, Dimensions, FlatList
} from 'react-native';
import { Toast, Spinner } from 'native-base';
import { onSignOut } from '../../../_services';
import { FeaturedItem, ItemCard } from '../../Components/FeaturedItem';
import { MainView, StyledText, LogoImg, BlockView } from '../../Components/styledComponents';
import { APIS, request } from '../../_services';

const img = require('../../assets/img/iphone.jpeg');
const logo = require('../../assets/img/logo.png');

const { height, width } = Dimensions.get('window');

const Home = (props) => {
  const { navigation } = props;
  const [products, setProducts] = useState([]);
  const signOut = () => {
    onSignOut();
    navigation.navigate('SignedOut');
  };

  useEffect(() => {
    const getProducts = async () => {
      const { baseUrl, filterProducts: { method, path } } = APIS;
      const submitUrl = `${baseUrl}${path}`;
      const response = await request(method, submitUrl);
      if (response.success) {
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
      <FeaturedItem img={img} />
      <MainView justify="space-between" vpadding={40} hpadding={17} align="flex-start" bg="#f9fafd">
        <StyledText color="#333333" size="17px" textAlign="left" fontWeight="900">Featured Deals</StyledText>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingTop: 10, paddingBottom: 10, alignContent: 'space-between', height: height / 2.5
          }}
        >
          {
            products.length === 0
              ? <BlockView width={width} height={height / 5} justify="center" align="center"><Spinner color="#abd136" /></BlockView>
              : products.map((item) => {
                const {
                  id, title, cost, minimum_bid
                } = item.meta;
                return <ItemCard navigate={() => navigation.navigate('Product', { productInfo: item })} key={id} rmargin img={{ uri: item.images[0] }} desc={title} oldPrice={minimum_bid} newPrice={cost} />;
              })
          }
        </ScrollView>
        {
        // <FlatList
        //   horizontal
        //   data={products}
        //   renderItem={({ item }) => {
        //     const {
        //       id, title, cost, minimum_bid
        //     } = item.meta;
        //     return (
        //       <ItemCard itemHeight={0.3} navigate={() => navigation.navigate('Product', { productInfo: item })} itemWidth={0.45} key={id} rmargin img={{ uri: item.images[0] }} desc={title} oldPrice={minimum_bid} newPrice={cost} />
        //     );
        //   }}
        //   keyExtractor={item => item.meta.id}
        //   ListEmptyComponent={() => (<Text>No Data</Text>)}
        //   // columnWrapperStyle={{ alignItems: 'center', justifyContent: 'center' }}
        // />
        }
        <StyledText color="#333333" style={{ marginTop: 20 }} size="17px" textAlign="left" fontWeight="900">Ongoing Deals</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
          <ItemCard rmargin img={img} navigate={() => navigation.navigate('Product')} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
        <StyledText color="#333333" style={{ marginTop: 20 }} size="17px" textAlign="left" fontWeight="900">Ongoing Auctions</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
        <StyledText color="#333333" style={{ marginTop: 20 }} size="17px" textAlign="left" fontWeight="900">Ongoing Deals</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
      </MainView>
      {
            // <Button onPress={()=> this.signOut()} title='Sign Out' />
        }
    </ScrollView>
  );
};

export default Home;


// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
