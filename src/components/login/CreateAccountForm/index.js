import React from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button, ScrollView } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, createAccount } from '../../../utils/constraints';
import PickerInput from '../../common/PickerInput';

const CreateAccountForm = ({ handleSubmit, error }) => (
  <View onSubmit={handleSubmit} style={styles.container}>
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
        name="gender"
        component= {PickerInput}
        mode="dropdown"
        children = { [
          { label:"Male", value:"male" },
          { label:"Female", value:"female" },
          { label:"Other", value:"other" }]
        } >
      </Field>
      <Button title="SIGN UP" onPress={handleSubmit} />
  </View>
);

CreateAccountForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'createAccount',
  validate: validations(createAccount)
})(CreateAccountForm);
