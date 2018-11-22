import { StyleSheet } from 'react-native';

import { whiteColor, transparentBlack } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: whiteColor,
    width: '80%',
    flex: 0
  },
  outerModal: {
    backgroundColor: transparentBlack,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skipMatch: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: 114,
    marginBottom: 20
  }
});

export default styles;
