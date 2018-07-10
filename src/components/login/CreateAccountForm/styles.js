import { StyleSheet } from 'react-native';

import { redColor, blackColor, whiteColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center'
  },
  errorText: {
    color: redColor,
    textAlign: 'center'
  },
  signUp: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blackColor,
    height: 37,
    width: 114,
  },
  signUpText: {
    textAlign: 'center',
    color: whiteColor
  }
});

export default styles;
