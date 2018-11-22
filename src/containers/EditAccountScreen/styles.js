import { StyleSheet } from 'react-native';

import {
  transparentBlack,
  greenColor,
  blackColor,
  whiteColor,
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
  },
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
  closeModal: {
    flex: 1
  },
  cancelEditPassword: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
    width: 114,
    marginBottom: 20
  }
});

export default styles;
