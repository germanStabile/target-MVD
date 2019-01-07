import { StyleSheet } from 'react-native';

import { whiteColor, transparentBlack, targetYellow, blackColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: whiteColor,
    width: '70%',
    marginTop: 110,
    flex: 0
  },
  outerModal: {
    backgroundColor: transparentBlack,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  skipMatch: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  headerImage: {
    width: 133,
    height: 78,
    marginBottom: 20,
    marginTop: 30,
    alignSelf: 'center'
  },
  startChatButton: {
    backgroundColor: targetYellow,
    marginHorizontal: 30,
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  startChatText: {
    color: whiteColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10
  },
  newMatchText: {
    marginBottom: 10,
    fontSize: 22,
    marginHorizontal: 40,
    alignSelf: 'center',
    textAlign: 'center'
  },
  yayText: {
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  matchProfileView: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    height: 40,
    marginHorizontal: 45,
    marginBottom: 20
  },
  matchProfileBackground: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: 'center'
  },
  matchProfileText: {
    fontSize: 19,
    color: blackColor,
    fontWeight: '400'
  },
  skipText: {
    fontWeight: '600',
    fontSize: 17
  }
});

export default styles;
