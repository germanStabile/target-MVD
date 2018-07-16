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
