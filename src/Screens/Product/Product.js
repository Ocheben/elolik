import React, { Component } from 'react';
import {
  ScrollView, Dimensions, View, Text, Image
} from 'react-native';
import { Tab, Tabs } from 'native-base';
import { MainView, BlockView, StyledText } from '../../Components/styledComponents';
import { FeaturedItem } from '../../Components/FeaturedItem';

const { height, width } = Dimensions.get('window');

const img = require('../../assets/img/iphone.jpeg');

const tabStyles = {
  tabStyle: {
    backgroundColor: '#ffffff',
    color: '#666666'
  },
  activeTabStyle: {
    borderBottomColor: '#abd136',
    backgroundColor: '#ffffff',
  },
  textStyle: {
    color: '#666666'
  },
  activeTextStyle: {
    color: '#000000'
  }
};

export default class Product extends Component {
    static navigationOptions = ({ navigation }) => ({
      headerTitle: (
        <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
        
        </BlockView>
      )
    });

    render() {
      return (
        <ScrollView>
        <Image source={img} style={{ height: height * 0.6, width: width }} resizeMode="cover"/>
          <MainView>
          <BlockView vpadding={10} align="center" justify="space-between" height={height * 0.25}>
          <StyledText size="22px" color="#000000" fontWeight="900"> Apple MacBook Pro 13-inch Laptop</StyledText>
          <StyledText size="22px" color="#000000" fontWeight="400"> N100,900.00</StyledText>
          <StyledText size="22px" color="#000000" fontWeight="400"> Write a review</StyledText>
          </BlockView>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: '#abd136' }}>
              <Tab heading="Tab1" {...tabStyles}>
                <Text>This is Tab 1</Text>
              </Tab>
              <Tab heading="Tab2" {...tabStyles}>
                <Text>This is Tab 2</Text>
              </Tab>
              <Tab heading="Tab3" {...tabStyles}>
                <Text>This is Tab 3</Text>
              </Tab>
            </Tabs>
          </MainView>
        </ScrollView>
      );
    }
}
