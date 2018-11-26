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
  headerBackground: {
    width: 133,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop:30
  },
  headerImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
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
    justifyContent:'center',
    height: 40,
    marginHorizontal: 45,
    marginBottom: 20
  },
  matchProfileImage: {
    flex: 1,
    resizeMode: 'cover',
    alignSelf: 'flex-start'
  },
  matchProfileBackground: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
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
