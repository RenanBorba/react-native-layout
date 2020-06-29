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