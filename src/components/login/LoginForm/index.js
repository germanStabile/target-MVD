import React from 'react';
import { func, string, array } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Input from '../../common/Input';
import styles from './styles';
import { validations, login } from '../../../utils/constraints';

const LoginForm = ({ handleSubmit, error, containerStyle }) => {
  return (
    <View onSubmit={handleSubmit} style={[styles.container, ...containerStyle]}>
        <Field
          name="email"
          label="EMAIL"
          component= {Input}
        />
        <Field
          name="password"
          label="PASSWORD"
          component= {Input}
          password
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <TouchableOpacity
         style={styles.submit}
         onPress={handleSubmit}
        >
          <Text style={styles.submitText}>SIGN IN</Text>
        </TouchableOpacity>
    </View>
  );
}

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  containerStyle: array
};

export default reduxForm({
  form: 'login',
  validate: validations(login)
})(LoginForm);
