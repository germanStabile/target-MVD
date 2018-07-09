import React from 'react';
import { Picker, View, Text, TouchableOpacity } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { array, string, object, func, bool } from 'prop-types';

import styles from './styles';

class PickerInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedValue: 'select your gender' };
  }

  render() {
    const onPress = () => {
      picker.show();
    }

    const { values, labels, meta, error, label, selectedValue, input } = this.props;

    return (
      <View>
        <View style={styles.labelContainer}>
          {label && <Text>{label}</Text>}
        </View>
        <TouchableOpacity style={styles.inputErrorLabelContainer} onPress={onPress}>
          <View
            style={[styles.inputContainer,
             (meta.touched && meta.error) ? styles.errorInputContainer : {}]}
          >
            <Text style={styles.input}>{this.state.selectedValue.toUpperCase()}</Text>
            <SimplePicker
              labels={labels}
              options={values}
              ref={ select => { picker = select; }}
              onSubmit={ value => {
                  this.setState({ selectedValue: value });
                  input.onChange(value);
                  }
                }
              />
            </View>
            {meta.touched && meta.error &&
               <Text style={styles.errorText}>{meta.error}</Text>
             }
        </TouchableOpacity>
      </View>
    );
  }
}

PickerInput.propTypes = {
  values: array.isRequired,
  labels: array.isRequired,
  meta: object.isRequired,
  error: string,
  label: string,
  input: object.isRequired
};

export default PickerInput;
