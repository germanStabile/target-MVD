import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign: 'center'
  },
  inputContainer: {
    width: 180,
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
    alignItems: 'center',
    marginHorizontal: 40
  },
  nameLabel: {
    textAlign: 'center'
  },
  errorText: {
    color: redColor
  },
  unit: {
    marginLeft: 5
  }
});

export default styles;
