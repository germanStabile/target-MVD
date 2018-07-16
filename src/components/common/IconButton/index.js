import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { func, number } from 'prop-types';

const IconButton = (props) => {
  const { image, style, onPress } = props;
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
    >
      <Image source={image} />
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  image: number.isRequired,
  style: number.isRequired,
  onPress: func.isRequired
};

export default IconButton;
