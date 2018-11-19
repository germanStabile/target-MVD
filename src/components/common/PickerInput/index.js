import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import SimplePicker from 'react-native-simple-picker';
import { array, string, object, number } from 'prop-types';

import styles from './styles';

class PickerInput extends React.Component {
  constructor(props) {
    super(props);
    this.selectValue = this.selectValue.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const { initialValue } = this.props;
    this.selectValue(initialValue);
  }

  selectValue(value) {
    const { objectRef, input } = this.props;
    const obj = objectRef ?
      objectRef.filter(obj => obj.label == value)[0] : {};
    this.setState({
      selectedValue: obj ? value.toUpperCase() : value,
      icon: obj ? obj.icon : null
    });

    if (obj) {
      input.onChange(value);
    }
  }

  render() {
    const onPress = () => {
      const { disabled } = this.props;
      if (disabled) {
        return
      }
      picker.show(); // eslint-disable-line no-undef
    };
    const { values, labels, meta, label, input, containerStyle, initialOptionIndex } = this.props;
    const { selectedValue, icon } = this.state;

    return (
      <View>
        <View style={styles.labelContainer}>
          {label && <Text>{label}</Text>}
        </View>
        <TouchableOpacity style={styles.inputErrorLabelContainer} onPress={onPress}>
          <View
            style={[styles.inputContainer, containerStyle,
              (meta.touched && meta.error) ? styles.errorInputContainer : {}]}
          >
            {icon && <Image source={{ uri: icon }} style={styles.icon} />}
            <Text style={styles.input}>{selectedValue}</Text>
            <SimplePicker
              labels={labels}
              options={values}
              initialOptionIndex={initialOptionIndex}
              ref={(select) => { picker = select; }} // eslint-disable-line no-undef
              onSubmit={(value) => {
                const { objectRef } = this.props;
                const obj = objectRef ?
                  objectRef.filter(obj => obj.label == value)[0] : {};
                this.setState({
                  selectedValue: value.toUpperCase(),
                  icon: obj ? obj.icon : null
                });
                input.onChange(value);
              }}
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
  label: string,
  initialValue: string,
  input: object.isRequired,
  containerStyle: number,
  objectRef: array,
  initialOptionIndex: number
};

export default PickerInput;
