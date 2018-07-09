import React from 'react';
import { func, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, createAccount } from '../../../utils/constraints';
import PickerInput from '../../common/PickerInput';

const CreateAccountForm = ({ handleSubmit, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    <Field
      name="username"
      label="NAME"
      component={Input}
    />
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
    <Field
      name="passwordConfirmation"
      label="CONFIRM PASSWORD"
      component={Input}
      password
    />
    <Field
      name="gender"
      label="GENDER"
      component={PickerInput}
      labels={['Male', 'Female', 'Other']}
      values={['male', 'female', 'other']}
    />
    <TouchableOpacity onPress={handleSubmit} style={styles.signUp}>
      <Text style={styles.signUpText}>
      SIGN UP
      </Text>
    </TouchableOpacity>
  </View>
);

CreateAccountForm.propTypes = {
  handleSubmit: func.isRequired,
  containerStyle: array,
};

export default reduxForm({
  form: 'createAccount',
  validate: validations(createAccount)
})(CreateAccountForm);
