import React from 'react';
import { string, object, bool, number } from 'prop-types';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  password = false,
  label,
  unit,
  inputStyle,
  containerStyle,
  keyboardType,
  initialValue,
  disabled,
  meta: { touched, error }
}) => (
  <View>
    <View style={styles.labelContainer}>
      {label && <Text style={styles.nameLabel}>{label}</Text>}
    </View>
    <View style={styles.inputErrorLabelContainer}>
      <View
        style={[
          styles.inputContainer,
          containerStyle,
          touched && error ? styles.errorInputContainer : {}
        ]}
      >
        <TextInput
          style={[styles.input, unit && touched && !error ? inputStyle : {}]}
          onChangeText={onChange}
          secureTextEntry={password}
          keyboardType={keyboardType}
          defaultValue={initialValue}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          {...restInput}
        />
        {unit && touched && !error && <Text style={styles.unit}>{unit}</Text>}
      </View>
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  containerStyle: number,
  keyboardType: string,
  unit: string,
  inputStyle: number,
  initialValue: string
};

export default Input;
