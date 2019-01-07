import { StyleSheet } from 'react-native';

import { transparentBlack, whiteColor } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileInfoView: {
    flexDirection:'row',
    alignItems:'center',
    flex: 1,
    height: 50,
  },
  matchProfileImage: {
    width: 30,
    height: 30,
    marginHorizontal: 16
  },
  topicIconContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  topicIcon: {
    width: 17,
    height: 22,
    alignSelf: 'center',
    marginRight: 10
  },
  topicUnreadContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  notificationCircle: {
    width: 16,
    height: 16,
    alignSelf: 'flex-start',
    marginTop: 2,
    marginLeft: -10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastMessage: {
    width: 150,
    fontSize: 14,
    fontWeight: '100'
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16
  },
  notificationCountText: {
    fontSize: 8,
    color: whiteColor
  },
  divider: {
    height: 0.3,
    width: '100%',
    backgroundColor: transparentBlack
  }
});

export default styles;
