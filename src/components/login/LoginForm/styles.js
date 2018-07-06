import { StyleSheet } from 'react-native';

import { redColor } from '../../../constants/styleConstants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: 'transparent'
  },
  errorText: {
    color: redColor,
    textAlign: 'center'
  }
});

export default styles;
