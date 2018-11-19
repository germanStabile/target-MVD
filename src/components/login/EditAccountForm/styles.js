import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center'
  },
  submit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blackColor,
    height: 37,
    width: 130,
  },
  changePassword: {
    marginBottom: 20
  },
  errorText: {
    marginTop: 20,
    color: redColor
  }
});

export default styles;
