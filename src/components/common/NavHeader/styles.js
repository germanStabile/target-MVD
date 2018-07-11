import { StyleSheet } from 'react-native';

import { whiteColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: whiteColor,
    justifyContent: 'center'
  },
  title: {
    marginTop: 40,
    textAlign: 'center'
  }
});

export default styles;
