import { StyleSheet } from 'react-native';

import { transparentBlack } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leftBarButton: {
    marginTop: 40,
    marginLeft: 11
  },
  rightBarButton: {
    marginTop: 40,
    marginRight: 11
  },
  divider: {
    height: 0.3,
    width: '100%',
    backgroundColor: transparentBlack
  }
});

export default styles;
