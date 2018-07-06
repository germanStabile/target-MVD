import { StyleSheet } from 'react-native';

import { blackColor } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 180,
    marginBottom: -130
  },
  disabledForm: {
    opacity: 0.2
  },
  hidden: {
    height: 0
  },
  divider: {
    height: 0.5,
    width: 121,
    backgroundColor: blackColor,
    marginTop: 19,
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
  },
  activityLoading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
