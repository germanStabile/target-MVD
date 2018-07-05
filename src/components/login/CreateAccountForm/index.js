import React from 'react';
import { func, string, array, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button, ScrollView } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, createAccount } from '../../../utils/constraints';
import PickerInput from '../../common/PickerInput';

const CreateAccountForm = ({ handleSubmit, error, containerStyle }) => {
  console.log("are we getting an error or what", error);
  return (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
      <Field
        name= "username"
        label= "NAME"
        component= {Input} />
      <Field
        name= "email"
        label= "EMAIL"
        component= {Input} />
      <Field
        name= "password"
        label= "PASSWORD"
        component= {Input}
        password />
      <Field
        name= "password_confirmation"
        label= "CONFIRM PASSWORD"
        component= {Input}
        password />
      <Field
        name= "gender"
        label= "GENDER"
        component= {PickerInput}
        labels={["Male", "Female", "Other"]}
        values={["male", "female", "other"]} />
        {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="SIGN UP" onPress={handleSubmit} />
  </View>
); }

CreateAccountForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  containerStyle: array,
};

export default reduxForm({
  form: 'createAccount',
  validate: validations(createAccount)
})(CreateAccountForm);
