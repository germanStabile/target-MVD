import { StyleSheet } from 'react-native';

import { redColor, blackColor, whiteColor } from '../../../constants/styleConstants';

const formStyles = StyleSheet.create({
  container: {
    marginTop: -20,
    alignItems: 'center'
  },
  errorText: {
    color: redColor,
    textAlign: 'center'
  },
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blackColor,
    height: 37,
    width: 160,
  },
  delete: {
    backgroundColor: redColor
  },
  submitText: {
    color: whiteColor,
    textAlign: 'center'
  }
});

export default formStyles;
