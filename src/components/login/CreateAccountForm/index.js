import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, Button, StyleSheet } from 'react-native';

import Input from '../../common/Input';

  const CreateAccountForm = ({ handleSubmit, error }) => (
    <View onSubmit={handleSubmit} style={styles.container}>
      <Field
        name= "Email"
        label= "Email"
        component= {Input} />
      <Field
        name= "Password"
        label= "Password"
        component= {Input} />
      <Field
        name= "Confirm Password"
        label= "Confirm Password"
        component= {Input} />
      <Button title="Sign up" onPress={handleSubmit} />
    </View>
  );

  const { func, string } = PropTypes;

  CreateAccountForm.propTypes = {
    handleSubmit: func.isRequired,
    error: string
  };

  export default reduxForm({
    form: 'createAccount'
  })(CreateAccountForm);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 80
    }
  });
