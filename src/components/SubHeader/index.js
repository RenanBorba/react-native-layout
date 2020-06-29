import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../Button';
import styles from './styles';

const SubHeader = () => (
  <View style={ styles.container }>
    <Image
      style={ styles.avatar }
      source={{
        uri: 'https://randomuser.me/api/portraits/men/28.jpg'
      }}
    />

    <View style={ styles.profileInfo }>
      <Text style={ styles.name }>Paulo Américo</Text>
      <Text style={ styles.bio }>
        27 anos, empresário varejista, entusiasta na moda brasileira.
          Representante Andrea Abbigliamento &
            Perón Studios no Brasil.
      </Text>

      <View style={ styles.buttonContainer }>
        <Button style={ styles.firstButton }>Mensagem</Button>
        <Button type='outline'>Favoritar</Button>
      </View>
    </View>
  </View>
);

export default SubHeader;