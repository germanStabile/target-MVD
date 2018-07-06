import { StyleSheet } from 'react-native';

import { blackColor } from '../../../constants/styleConstants'

const styles = StyleSheet.create({
  headerBackground: {
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
    height: 260,
  },
  headerImage: {
    flex: 1,
    resizeMode: 'stretch',
    alignSelf: 'flex-start'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 60,
    fontWeight: 'bold',
    color: blackColor
  }
});

export default styles;
