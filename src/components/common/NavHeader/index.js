import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NavHeader = props => (
  <View
    style={styles.container}
    {...props}
  >
    <Text style={styles.title}>This is the header</Text>
  </View>
);

export default NavHeader;
