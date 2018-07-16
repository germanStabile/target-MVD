import React from 'react';
import { ActivityIndicator } from 'react-native';

import { blackColor } from '../../../constants/styleConstants';
import styles from './styles';

const Loader = props => (
  <ActivityIndicator
    style={styles.activityLoading}
    size="large"
    color={blackColor}
    animating
    {...props}
  />
);

export default Loader;
