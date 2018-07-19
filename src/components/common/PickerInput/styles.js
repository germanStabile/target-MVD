import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  input: {
    minWidth: 50,
    textAlign: 'center',
    marginTop: 5
  },
  inputContainer: {
    width: 188,
    minHeight: 37,
    borderWidth: 0.5,
    borderColor: blackColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorInputContainer: {
    borderColor: redColor
  },
  inputErrorLabelContainer: {
    marginBottom: 24,
    alignItems: 'center'
  },
  labelContainer: {
    alignItems: 'center'
  },
  errorText: {
    color: redColor
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});

export default styles;
