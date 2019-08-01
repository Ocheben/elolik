import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { MainView } from '../../Components/styledComponents';
import { CategoryItem } from '../../Components/FeaturedItem';

const acc = require('../../assets/img/acc.jpg');
const cam = require('../../assets/img/cam.jpg');
const com = require('../../assets/img/com.jpg');
const gad = require('../../assets/img/gad.jpg');

// eslint-disable-next-line react/prefer-stateless-function
export default class Categories extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <MainView>
          <CategoryItem img={acc} title="Accessories" navigate={() => navigation.navigate('ProductsList', { pageTitle: 'Accessories' })} detail="11 products" />
          <CategoryItem img={cam} title="Camera & Photography" detail="5 products" navigate={() => navigation.navigate('ProductsList', { pageTitle: 'Camera & Photography' })} />
          <CategoryItem img={com} title="Computer Components" detail="8 products" navigate={() => navigation.navigate('ProductsList', { pageTitle: 'Computer Components' })} />
          <CategoryItem img={gad} title="Gadgets" detail="14 products" navigate={() => navigation.navigate('ProductsList', { pageTitle: 'Gadgets' })} />
          <CategoryItem img={acc} title="Camera & Photography" detail="5 products" navigate={() => navigation.navigate('ProductsList', { pageTitle: 'Accessories' })} />
        </MainView>
      </ScrollView>
    );
  }
}
