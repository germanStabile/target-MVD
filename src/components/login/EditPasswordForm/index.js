import React from 'react';
import { func, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../common/Input';
import formStyles from '../../common/FormStyle';
import styles from './styles.js';
import { validations, editPassword } from '../../../utils/constraints';

const EditPasswordForm = ({ handleSubmit, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="currentPassword"
      label="ENTER YOUR CURRENT PASSWORD TO EDIT"
      component={Input}
      password
    />
    <Field
      name="password"
      label="NEW PASSWORD"
      component={Input}
      password
    />
    <Field
      name="passwordConfirmation"
      label="REENTER NEW PASSWORD"
      component={Input}
      password
    />
    <TouchableOpacity onPress={handleSubmit} style={formStyles.submit}>
      <Text style={formStyles.submitText}>DONE</Text>
    </TouchableOpacity>
  </View>
);

EditPasswordForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array,
};

export default reduxForm({
  form: 'editPassword',
  validate: validations(editPassword)
})(EditPasswordForm);
