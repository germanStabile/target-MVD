import React from 'react';
import { func, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  View, Text, TouchableOpacity
} from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, login } from '../../../utils/constraints';

const LoginForm = ({ handleSubmit, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="email"
      label="EMAIL"
      component={Input}
    />
    <Field
      name="password"
      label="PASSWORD"
      component={Input}
      password
    />
    <TouchableOpacity
      style={styles.submit}
      onPress={handleSubmit}
    >
      <Text style={styles.submitText}>
      SIGN IN
      </Text>
    </TouchableOpacity>
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array
};

export default reduxForm({
  form: 'login',
  validate: validations(login)
})(LoginForm);
