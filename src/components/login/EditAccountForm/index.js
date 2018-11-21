import React from 'react';
import { func, array, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import formStyles from '../../common/FormStyle';
import { validations, editAccount } from '../../../utils/constraints';
import PickerInput from '../../common/PickerInput';

const EditAccountForm = ({ handleSubmit, containerStyle, error }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="username"
      label="USERNAME"
      component={Input}
    />
    <Field
      name="email"
      label="EMAIL"
      component={Input}
    />
    <TouchableOpacity style={styles.changePassword}>
      <Text>CHANGE PASSWORD</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
      <Text style={formStyles.submitText}>SAVE CHANGES</Text>
    </TouchableOpacity>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

EditAccountForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array,
  error: string
};

export default reduxForm({
  form: 'editAccount',
  validate: validations(editAccount)
})(EditAccountForm);
