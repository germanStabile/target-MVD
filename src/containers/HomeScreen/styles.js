import { StyleSheet } from 'react-native';

import { blackColor } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    marginTop: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centeredImage: {
    alignSelf: 'center'
  },
  leftBarButton: {
    marginTop: 40,
    marginLeft: 11
  },
  rightBarButton: {
    marginTop: 40,
    marginRight: 11
  },
  createTargetFooter: {
    width: '100%',
    height: 350
  },
  divider: {
    height: 0.5,
    width: 121,
    backgroundColor: blackColor,
    marginTop: 40,
    alignSelf: 'center',
    opacity: 0.5
  },
  cancelCreateTarget: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: 114,
  },
  centeredText: {
    textAlign: 'center'
  },
  loader: {
    position: 'relative',
    flex: 1
  }
});

export default styles;
