import { StyleSheet } from 'react-native';

import {
  blackColor,
  greenColor,
  profileBackgroundSize,
  profileBubbleMargin
} from '../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  disabledForm: {
    opacity: 0.2
  },
  hidden: {
    height: 0
  },
  divider: {
    height: 0.5,
    width: '40%',
    backgroundColor: blackColor,
    marginTop: 40,
    alignSelf: 'center',
    opacity: 0.5
  },
  headerBackground: {
    width: 205,
    height: 145,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -(profileBackgroundSize + profileBubbleMargin),
    alignSelf: 'center',
    marginRight: profileBackgroundSize,
    marginTop:30
  },
  headerImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },
  profileBackground: {
    width: profileBackgroundSize,
    height: profileBackgroundSize,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  profileImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },
  successMessage: {
    alignSelf: 'center',
    color: greenColor,
    marginTop: 50
  }
});

export default styles;
