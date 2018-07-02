import React from 'react';
import { Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'

import styles from './styles'

const PickerInput = ({ input: { onChange, value, ...inputProps }, children, ...pickerProps }) => (
    <RNPickerSelect
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      items={ children }
      hideIcon={ true }
      { ...inputProps }
      { ...pickerProps }>
    </RNPickerSelect>
);

export default PickerInput;
