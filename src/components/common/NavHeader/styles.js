import { StyleSheet } from 'react-native';

import { whiteColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: whiteColor,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    marginTop: 25,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default styles;
