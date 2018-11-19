import { StyleSheet } from 'react-native';

import { blackColor, greenColor } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 260,
    marginTop: -50,
    marginBottom: -150
  },
  disabledForm: {
    opacity: 0.2
  },
  hidden: {
    height: 0
  },
  divider: {
    height: 0.5,
    width: 121,
    backgroundColor: blackColor,
    marginTop: 40,
    alignSelf: 'center',
    opacity: 0.5
  },
  headerBackground: {
    width: 205,
    alignItems: 'center',
    justifyContent: 'center',
    height: 145,
    marginBottom: -103,
    alignSelf: 'center',
    marginRight: 81,
    marginTop:30
  },
  headerImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },
  profileBackground: {
    width: 83,
    alignItems: 'center',
    justifyContent: 'center',
    height: 83,
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
    marginTop: 20
  }
});

export default styles;
