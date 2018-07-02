import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign:'center',
    backgroundColor: 'transparent'
  },
  inputContainer: {
    width: 188,
    minHeight: 37,
    borderWidth: 0.5,
    borderColor: blackColor,
    backgroundColor: 'transparent'
  },
  errorInputContainer: {
    borderColor: redColor,
    backgroundColor: 'transparent'
  },
  inputErrorLabelContainer: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  labelContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  errorText: {
    color: redColor
  }
});

export default styles;
