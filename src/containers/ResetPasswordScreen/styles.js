import { StyleSheet } from 'react-native';

import { blackColor } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  header: {
    height: 260
  },
  container: {
    flex: 1
  },
  form: {
    height: 220,
  },
  activityLoading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hidden: {
    height: 0
  },
  disabledForm: {
    opacity: 0.2
  },
  message: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  divider: {
    height: 0.5,
    width: 121,
    backgroundColor: blackColor,
    marginTop: 40,
    alignSelf: 'center',
    opacity: 0.5
  },
  signIn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: 114,
  },
  signInText: {
    textAlign: 'center'
  }
});

export default styles;
