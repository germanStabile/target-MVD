import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, TouchableOpacity, Text } from 'react-native';
import { func, array } from 'prop-types';

import formStyles from '../../common/FormStyle';
import styles from './styles';
import Input from '../../common/Input';
import PickerInput from '../../common/PickerInput';
import { validations, createTarget } from '../../../utils/constraints';

const CreateTargetForm = ({ handleSubmit, topics, onAreaChange }) => (
  <View onSubmit={handleSubmit} style={styles.container}>
    <Field
      name="areaLength"
      label="SPECIFY AREA LENGTH"
      component={Input}
      containerStyle={styles.field}
      keyboardType="numeric"
      unit="m"
      inputStyle={styles.input}
      onChange={onAreaChange}
    />
    <Field
      name="title"
      label="TARGET TITLE"
      containerStyle={styles.field}
      component={Input}
    />
    <Field
      name="topic"
      label="SELECT A TOPIC"
      component={PickerInput}
      containerStyle={styles.field}
      labels={topics.map(topic => topic.label)}
      values={topics.map(topic => topic.label)}
      objectRef={topics}
      initialValue="What do you want to talk about?"
    />
    <TouchableOpacity onPress={handleSubmit} style={formStyles.submit}>
      <Text style={formStyles.submitText}>SAVE TARGET</Text>
    </TouchableOpacity>
  </View>
);

CreateTargetForm.propTypes = {
  handleSubmit: func.isRequired,
  topics: array.isRequired,
  onAreaChange: func
};

export default reduxForm({
  form: 'createTarget',
  validate: validations(createTarget)
})(CreateTargetForm);
