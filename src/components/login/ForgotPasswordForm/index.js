import React from 'react';
import { func, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../common/Input';
import styles from '../../common/FormStyle';
import { validations, forgotPassword } from '../../../utils/constraints';

const ForgotPasswordForm = ({ handleSubmit, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="email"
      label="EMAIL"
      component={Input}
    />
    <TouchableOpacity
      style={styles.submit}
      onPress={handleSubmit}
    >
      <Text style={styles.submitText}>RESET PASSWORD</Text>
    </TouchableOpacity>
  </View>
);

ForgotPasswordForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array
};

export default reduxForm({
  form: 'forgotPassword',
  validate: validations(forgotPassword)
})(ForgotPasswordForm);
