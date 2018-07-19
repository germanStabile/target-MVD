import React from 'react';
import { func, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../common/Input';
import styles from '../../common/FormStyle';
import { validations, resetPassword } from '../../../utils/constraints';

const ResetPasswordForm = ({ handleSubmit, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="password"
      label="PASSWORD"
      component={Input}
      password
    />
    <Field
      name="passwordConfirmation"
      label="CONFIRM PASSWORD"
      component={Input}
      password
    />
    <TouchableOpacity
      style={styles.submit}
      onPress={handleSubmit}
    >
      <Text style={styles.submitText}>RESET PASSWORD</Text>
    </TouchableOpacity>
  </View>
);

ResetPasswordForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array
};

export default reduxForm({
  form: 'resetPassword',
  validate: validations(resetPassword)
})(ResetPasswordForm);
