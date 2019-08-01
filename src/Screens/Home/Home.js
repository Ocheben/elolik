import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { onSignOut } from '../../../_services';
import { FeaturedItem, ItemCard } from '../../Components/FeaturedItem';
import { MainView, StyledText, LogoImg } from '../../Components/styledComponents';

const img = require('../../assets/img/iphone.jpeg');
const logo = require('../../assets/img/logo.png');

export default class Home extends Component {
    static navigationOptions = {
      // title: 'Homeless',
      // headerTitle: <View><LogoImg source={logo} resizeMode="contain" /><Text>Hello</Text></View>
    }

signOut = () => {
  const { navigation } = this.props;
  onSignOut().then(() => navigation.navigate('SignedOut'));
}

render() {
  return (
    <ScrollView>
      <FeaturedItem img={img} />
      <MainView justify="space-between" vpadding={40} hpadding={17} align="flex-start" bg="#f9fafd">
        <StyledText color="#333333" size="17px" textAlign="left" fontWeight="900">Featured Deals</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10, alignContent: 'space-between'}}>
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
        <StyledText color="#333333" style={{marginTop:20}} size="17px" textAlign="left" fontWeight="900">Ongoing Deals</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
        <StyledText color="#333333" style={{marginTop:20}} size="17px" textAlign="left" fontWeight="900">Ongoing Auctions</StyledText>
        <ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Variable product example" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
          <ItemCard rmargin img={img} desc="Coupon product with print function" oldPrice="N5,000.00" newPrice="N500.00" />
        </ScrollView>
        <StyledText color="#333333" style={{marginTop:20}} size="17px" textAlign="left" fontWeight="900">Ongoing Deals</StyledText>
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
}
}

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
