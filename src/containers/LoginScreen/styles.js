import { StyleSheet } from 'react-native';

import { blackColor, redColor } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
  },
  redText: {
    color: redColor,
    fontSize: 20,
  },
  header: {
    height: 260
  },
  container: {
    flex: 1
  },
  signUp: {
    height: 15,
    width: 103,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  form: {
    height: 220,
  },
  signUpText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  divider: {
    height: 0.5,
    width: 121,
    backgroundColor: blackColor,
    marginTop: 76,
    opacity: 0.5
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 11
  },
  facebookPlaceholder: {
    textAlign: 'center',
    marginTop: 22,
    fontSize: 18,
    fontWeight: 'bold'
  },
  hidden: {
    height: 0
  },
  disabledForm: {
    opacity: 0.2
  }
});

export default styles;
