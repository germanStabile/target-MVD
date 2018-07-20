import React from 'react';
import { ActivityIndicator } from 'react-native';
import { number } from 'prop-types';

import { blackColor } from '../../../constants/styleConstants';
import styles from './styles';

const Loader = ({ loaderStyle, ...otherProps }) => (
  <ActivityIndicator
    style={[styles.activityLoading, loaderStyle]}
    size="large"
    color={blackColor}
    animating
    {...otherProps}
  />
);

Loader.propTypes = {
  loaderStyle: number
};

export default Loader;
