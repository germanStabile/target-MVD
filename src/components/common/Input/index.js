import React from 'react';
import { string, object, bool } from 'prop-types';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const Input = ({ input: { onChange, ...restInput }, password = false, label, meta: { touched, error }}) => (
  <View>
    <View style={styles.labelContainer}>
      {label && <Text>{label}</Text>}
    </View>
    <View style={styles.inputErrorLabelContainer}>
      <View style={[styles.inputContainer, touched && error ? styles.errorInputContainer : {}]}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          secureTextEntry={password}
          {...restInput}
        />
        </View>
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool
};

export default Input;
