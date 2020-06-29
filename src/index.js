import React from 'react';
import { View, StatusBar, ScrollView } from 'react-native';

import './config/ReactotronConfig';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';
import styles from '~/geral';

const App = () => (
  <>
    <StatusBar
      barStyle="dark-content"
      translucent
      backgroundColor="transparent"
    />

    <View style={ styles.container }>
      <Header />
      <ScrollView>
        <SubHeader />
        <ProductList />
      </ScrollView>
      <Tabs />
    </View>
  </>
);

export default console.tron.overlay(App);