import React from 'react';
import { Picker, View, Text, TouchableOpacity } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { array, string, object, func, bool } from 'prop-types';

import styles from './styles';

class PickerInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedValue: "select your gender" };
  }

  render() {
    const onPress = () => {
      picker.show();
    }
    return (
      <View>
        <View style={styles.labelContainer}>
          {this.props.label && <Text>{this.props.label}</Text>}
        </View>
        <TouchableOpacity style={styles.inputErrorLabelContainer} onPress={onPress}>
          <View style={[styles.inputContainer, this.props.meta.touched && this.props.meta.error ? styles.errorInputContainer : {}]}>
            <Text style={styles.input}>{this.state.selectedValue.toUpperCase()}</Text>
            <SimplePicker
              labels={this.props.labels}
              options={this.props.values}
              ref={ select => { picker = select; }}
              onSubmit={ value => {
                  this.setState({ selectedValue: value });
                  this.props.input.onChange(value);
                  }
                }
              />
            </View>
            {this.props.meta.touched && this.props.meta.error && <Text style={styles.errorText}>{this.props.meta.error}</Text>}
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
  selectedValue: string,
  input: object.isRequired
};

export default PickerInput;
