import React from 'react';
import { object, func } from 'prop-types';
import { TouchableOpacity, Text, View, Image, ImageBackground } from 'react-native';

import { profileIcon, defaultTopicIcon, chatCircle } from '../../../image';
import styles from './styles';

const ConversationListItem = ({ item, onConversationTap }) => {
  const { user: { fullName }, topicIcon, unreadMessages, lastMessage} = item;
  return (
    <TouchableOpacity
      onPress={() => { onConversationTap(item) }}
      style={styles.container} >
      <View style={styles.divider} />
      <View style={styles.profileInfoView}>
        <Image
          source={profileIcon}
          style={styles.matchProfileImage}
        />
        <View>
          <Text style={styles.username}>{fullName}</Text>
          {lastMessage &&
          <Text numberOfLines={1} style={styles.lastMessage}>
            {lastMessage}
          </Text>
          }
        </View>
        <View style={styles.topicIconContainer}>
          <Image
            defaultSource={defaultTopicIcon}
            source= {{ uri: topicIcon ? topicIcon : defaultTopicIcon.source }}
            style={styles.topicIcon}
          />
        </View>
        {unreadMessages > 0 &&
        <ImageBackground
          source={chatCircle}
          style={styles.notificationCircle}>
          <Text style={styles.notificationCountText}>
            {unreadMessages}
          </Text>
        </ImageBackground>
        }
      </View>
      <View style={styles.divider} />
      </TouchableOpacity>
    );
  }

ConversationListItem.propTypes = {
  item: object.isRequired,
  onConversationTap: func.isRequired
};

export default ConversationListItem;
