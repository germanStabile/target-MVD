import React from 'react';
import { ImageBackground, Text } from 'react-native';

import styles from './styles';
import { bubbleGroupImage } from '../../../image';

const Header = props => (
  <ImageBackground
    source={bubbleGroupImage}
    style={styles.headerBackground}
    imageStyle={styles.headerImage}
    {...props}
  >
    <Text style={styles.headerText}>
    TARGET MVD
    </Text>
  </ImageBackground>
);

export default Header;
