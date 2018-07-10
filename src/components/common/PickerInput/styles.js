import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: 'center',
    marginTop: 10
  },
  inputContainer: {
    width: 188,
    minHeight: 37,
    borderWidth: 0.5,
    borderColor: blackColor
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
  }
});

export default styles;
