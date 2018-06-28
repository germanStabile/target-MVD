import { StyleSheet } from 'react-native';

import { blackColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    textAlign:'center'
  },
  inputContainer: {
    marginBottom: 24,
    width: 188,
    minHeight: 37,
    borderWidth: 0.5,
    borderColor: blackColor,
  },
  labelContainer: {
    alignItems: 'center'
  }
});

export default styles;
