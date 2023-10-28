<div align="center"> 

# Projeto Portfólio Layout - Aplicação Mobile React Native

</div>

<br>

<div align="center">

[![Generic badge](https://img.shields.io/badge/Made%20by-Renan%20Borba-purple.svg)](https://shields.io/) [![Build Status](https://img.shields.io/github/stars/RenanBorba/react-native-layout.svg)](https://github.com/RenanBorba/react-native-layout) [![Build Status](https://img.shields.io/github/forks/RenanBorba/react-native-layout.svg)](https://github.com/RenanBorba/react-native-layout) [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

<br>

![home](https://github.com/RenanBorba/react-native-layout/assets/48495838/643cf51b-d0fb-4954-89bf-f66f35d6febb)

</div>

<br>

Aplicação Front-end Mobile desenvolvida em React Native com o design Flexbox, para layout de portfólio de Loja de Vestuário feminino e empresas de diversos segmentos, permitindo a visualização dos demais itens ao rolar a tela do app (ScrollView).

<br><br>

<div align="center">

![layout](https://user-images.githubusercontent.com/48495838/84693847-8a285480-af1e-11ea-8607-a6b8c4932967.png)

</div>

<br><br>

## :rocket: Tecnologias
<ul>
  <li>Components</li>
  <li>StatusBar</li>
  <li>Platform</li>
  <li>ScrollView</li>
  <li>States</li>
  <li>Dimensions</li>
  <li>react-native-vector-icons</li>
  <li>StyleSheet</li>
</ul>

<br><br>

## :arrow_forward: Start
<ul>
  <li>npm install</li>
  <li>npm run start / npm start</li>
</ul>

<br><br>

## :punch: Como contribuir
<ul>
  <li>Dê um fork nesse repositório</li>
  <li>Crie a sua branch com a feature</li>
    <ul>
      <li>git checkout -b my-feature</li>
    </ul>
  <li>Commit a sua contribuição</li>
    <ul>
      <li>git commit -m 'feat: My feature'</li>
    </ul>
  <li>Push a sua branch</li>
    <ul>
      <li>git push origin my-feature</li>
    </ul>
</ul>
<br><br><br>

## :mega: ⬇ Abaixo, as principais estruturas e interface principal:

<br><br><br>

## src/index.js
```js
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
```

<br><br>

## src/components/ProductList/Product/index.js
```js
import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Product = ({
  product:
  {
    image,
    title,
    description,
    price
  }
}) => (
  <View style={ styles.container }>
    <Icon name="ios-checkmark-circle-outline"
      size={26}
      style={ styles.checkIcon } />
    <View style={ styles.imageContainer }>
      <Image
        source={{ uri: image }}
        style={ styles.image }
      />
    </View>

    <View style={ styles.infoContainer }>
      <Text style={ styles.title }>{ title }</Text>
      <Text style={ styles.description }>{ description }</Text>
      <Text style={ styles.price }>{ price }</Text>
    </View>
  </View>
);

export default Product;
```

<br><br>

## src/components/ProductList/index.js
```js
import React, { Component } from 'react';
import { View } from 'react-native';

import Product from './Product';
import styles from './styles';

export default class index extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://live.staticflickr.com/5542/9337583623_7e3dcc1072_c.jpg',
        title: 'Vestido Andrea pink flamingos',
        description: 'Andrea Accessori di abbigliamento pink flamingos',
        price: 'R$140,00'
      },
      {
        id: 2,
        image: 'https://live.staticflickr.com/5443/9551762710_4498b5e9ed_c.jpg',
        title: 'Vestido Perón black sky',
        description: 'Perón Studios El Caribe black sky',
        price: 'R$160,00'
      },
      {
        id: 3,
        image: 'https://live.staticflickr.com/3730/9339533933_d944303fb6_c.jpg',
        title: 'Vestido longo Andrea blue',
        description: 'Andrea Accessori di abbigliamento blue river',
        price: 'R$200,00'
      },
      {
        id: 4,
        image: 'https://live.staticflickr.com/3684/9339500607_bbc39f8bd5_c.jpg',
        title: 'Vestido longo Andrea wine',
        description: 'Andrea Accessori di abbigliamento wine tango',
        price: 'R$220,00'
      }
    ],
  };

  render() {
    return (
      <View style={ styles.container }>
        {this.state.products.map(product =>
          <Product
            key={ product.id }
            product={ product }
          />
        )}
      </View>
    );
  }
};
```

<br><br>

## Interface do Perfil de Vendedor

<div align="center">

![0](https://user-images.githubusercontent.com/48495838/70284212-17396680-17a2-11ea-964b-b1dcff910f95.jpg)

</div>

<br><br>

<div align="center">

![1](https://user-images.githubusercontent.com/48495838/70284211-16a0d000-17a2-11ea-8a6f-acfac5e94a72.jpg)

</div>
