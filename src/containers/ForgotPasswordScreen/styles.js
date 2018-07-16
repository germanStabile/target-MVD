import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 260
  },
  container: {
    flex: 1
  },
  resetPassword: {
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
  }
});

export default styles;
