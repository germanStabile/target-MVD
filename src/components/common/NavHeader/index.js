import React from 'react';
import { View, Text } from 'react-native';
import { object, string } from 'prop-types';

import styles from './styles';

const NavHeader = ({ leftChild, rightChild, title, ...otherProps }) => (
  <View
    style={styles.container}
    {...otherProps}
  >
    {leftChild &&
      <View>
        {leftChild}
      </View>
    }
    <Text style={styles.title}>{title}</Text>
    {rightChild &&
      <View>
        {rightChild}
      </View>
    }
  </View>
);

NavHeader.propTypes = {
  leftChild: object,
  rightChild: object,
  title: string.isRequired
};

export default NavHeader;
