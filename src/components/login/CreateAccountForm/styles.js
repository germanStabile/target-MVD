import { StyleSheet } from 'react-native';

import { blackColor } from '../../../constants/styleConstants';

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
    width: 114,
  }
});

export default styles;
