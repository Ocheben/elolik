/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  View, ImageBackground, Dimensions, Image, TouchableOpacity,
} from 'react-native';
import {
  StyledText, GradientView, BlockView, Card, CategoryCard
} from './styledComponents';

const { height, width } = Dimensions.get('window');
export const FeaturedItem = (props) => {
  const { img } = props;
  return (
    <ImageBackground source={img} style={{ height: height * 0.6 }} resizeMode="contain">
      <GradientView colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}>
        <View style={{ height: '20%', justifyContent: 'space-between' }}>
          <StyledText color="#ffffff" size="19px" fontWeight="300" width="80%">Notebook Black Spire V Nitro</StyledText>
          <BlockView flexD="row" justify="flex-start" align="flex-end" width="100%">
            <StyledText color="#ffffff" size="15px" fontWeight="300">N60,990  </StyledText>
            <StyledText color="#ffffff" size="13px" fontWeight="300" style={{ textDecorationLine: 'line-through' }}>N200,990</StyledText>
          </BlockView>
        </View>
      </GradientView>
    </ImageBackground>
  );
};


export const ItemCard = (props) => {
  const {
    img, desc, newPrice, oldPrice, navigate, itemWidth, rmargin
  } = props;
  return (
    <TouchableOpacity style={{ marginLeft: 0, marginRight: 0 }} onPress={navigate}>
      <Card height={height * 0.45} width={width * (itemWidth || 0.4)} br={3} rmargin={rmargin ? 10 : 0}>
        <Image source={img} resizeMode="cover" style={{ width: '100%', height: '70%' }} />
        <BlockView hpadding={8} vpadding={8} justify="space-between">
          <StyledText color="#333333" size="17px">{desc}</StyledText>
          <View>
            <StyledText color="#333333" size="15px" fontWeight="300">{newPrice && newPrice}</StyledText>
            <StyledText color="#333333" size="13px" fontWeight="300" style={{ textDecorationLine: 'line-through' }}>{oldPrice}</StyledText>
          </View>
        </BlockView>
      </Card>
    </TouchableOpacity>
  );
};

export const CategoryItem = (props) => {
  const {
    img, title, detail, navigate
  } = props;
  return (
    <TouchableOpacity onPress={navigate}>
      <CategoryCard source={img} vmargin={10} height={height * 0.22} imageStyle={{ borderRadius: 10 }} width={width * 0.95} resizeMode="cover">
        <GradientView style={{ borderRadius: 10 }} colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}>
          <BlockView justify="space-around" vpadding={30} align="flex-end" width="100%">
            <StyledText color="#ffffff" size="28px" fontWeight="700">{title}</StyledText>
            <StyledText color="#ffffff" size="17px" fontWeight="300">{detail}</StyledText>
          </BlockView>
        </GradientView>
      </CategoryCard>
    </TouchableOpacity>
  );
};
