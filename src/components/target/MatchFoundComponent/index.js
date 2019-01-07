import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import { matchFoundHeader, profileIcon } from '../../../image';
import styles from './styles.js';

const MatchFoundComponent = ({ foundMatch: { username }, skipMatch }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true} >
      <View style={styles.outerModal}>
        <View style={styles.modal}>
          <Image
            source={matchFoundHeader}
            style={styles.headerImage}
          />
          <Text style={styles.yayText}>Yay!</Text>
          <Text style={styles.newMatchText}>You have a new match!</Text>
          <View style={styles.matchProfileView}>
            <Image
              source={profileIcon}
              style={styles.matchProfileBackground}
            />
            <Text style={styles.matchProfileText}>{username}</Text>
          </View>
          <TouchableOpacity style={styles.startChatButton}>
            <Text style={styles.startChatText}>Cool! Start chatting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={skipMatch}
            style={styles.skipMatch}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

MatchFoundComponent.propTypes = {
  skipMatch: func.isRequired,
  foundMatch: object.isRequired
};

export default MatchFoundComponent;
