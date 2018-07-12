import React from 'react';
import { View, Text } from 'react-native';
import { object, array, string } from 'prop-types';

import styles from './styles';

const NavHeader = ({ props, leftChild, rightChild, title }) => (
  <View
    style={styles.container}
    {...props}
  >
    {leftChild &&
      <View>
        {leftChild}
      </View> }
    <Text style={styles.title}>{title}</Text>
    {rightChild &&
      <View>
        {rightChild}
      </View> }
  </View>
);

NavHeader.propTypes = {
  props: array,
  leftChild: object,
  rightChild: object,
  title: string.isRequired
};

export default NavHeader;
