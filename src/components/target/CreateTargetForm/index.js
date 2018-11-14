import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, TouchableOpacity, Text } from 'react-native';
import { func, array, object } from 'prop-types';

import formStyles from '../../common/FormStyle';
import styles from './styles';
import Input from '../../common/Input';
import PickerInput from '../../common/PickerInput';
import { validations, createTarget } from '../../../utils/constraints';

const CreateTargetForm = ({ handleSubmit, topics, onAreaChange, selectedTarget }) => {
  const topicLabels = topics.map(topic => topic.label);
  let initialPickerIndex = null;
  let initialLabel = null;
  let submitText = 'SAVE TARGET';
  if (selectedTarget) {
    submitText = 'DELETE TARGET';
    let i;
    for (i = 0; i < topics.length; i += 1) {
      if (selectedTarget.target.topicId == topics[i].id) {
        initialPickerIndex = i;
        initialLabel = topicLabels[i];
        break;
      }
    }
  }
  return (
    <View onSubmit={handleSubmit} style={styles.container}>
      <Field
        name="areaLength"
        label="SPECIFY AREA LENGTH"
        component={Input}
        containerStyle={styles.field}
        keyboardType="numeric"
        unit="m"
        disabled={selectedTarget}
        inputStyle={styles.input}
        onChange={onAreaChange}
      />
      <Field
        name="title"
        label="TARGET TITLE"
        containerStyle={styles.field}
        component={Input}
        disabled={selectedTarget}
      />
      <Field
        name="topic"
        label="SELECT A TOPIC"
        component={PickerInput}
        containerStyle={styles.field}
        labels={topicLabels}
        values={topicLabels}
        objectRef={topics}
        initialValue={initialLabel || 'What do you want to talk about?'}
        initialOptionIndex={initialPickerIndex}
        disabled={selectedTarget}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={[formStyles.submit, selectedTarget && formStyles.delete]}>
        <Text style={formStyles.submitText}>{submitText}</Text>
      </TouchableOpacity>
    </View>
  );
};

CreateTargetForm.propTypes = {
  handleSubmit: func.isRequired,
  topics: array.isRequired,
  onAreaChange: func,
  selectedTarget: object
};

export default reduxForm({
  form: 'createTarget',
  validate: validations(createTarget),
  enableReinitialize: true
})(CreateTargetForm);
