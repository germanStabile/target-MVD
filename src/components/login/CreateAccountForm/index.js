import React from 'react';
import { func, string, array, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button, ScrollView } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, createAccount } from '../../../utils/constraints';
import PickerInput from '../../common/PickerInput';

const CreateAccountForm = ({ handleSubmit, error, containerStyle }) => (
  <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
    {error && <Text>{error}</Text>}
      <Field
        name= "name"
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
        name= "confirmPassword"
        label= "CONFIRM PASSWORD"
        component= {Input}
        password />
      <Field
        name= "gender"
        label= "GENDER"
        component= {PickerInput}
        labels={["Male", "Female", "Other"]}
        values={["male", "female", "other"]} />
      <Button title="SIGN UP" onPress={handleSubmit} />
  </View>
);

CreateAccountForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  containerStyle: array,
};

export default reduxForm({
  form: 'createAccount',
  validate: validations(createAccount)
})(CreateAccountForm);
