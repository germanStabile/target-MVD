import React from 'react';
import { View, Text, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import { matchFoundHeader, profileIcon } from '../../../image';
import styles from './styles.js';

export default class MatchFoundComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skipMatch, foundMatch: { username }} = this.props;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true} >
        <View style={styles.outerModal}>
          <View style={styles.modal}>
            <ImageBackground
              source={matchFoundHeader}
              style={styles.headerBackground}
              imageStyle={styles.headerImage}
            />
            <Text style={styles.yayText}>Yay!</Text>
            <Text style={styles.newMatchText}>You have a new match!</Text>
            <View style={styles.matchProfileView}>
              <ImageBackground
                source={profileIcon}
                style={styles.matchProfileBackground}
                imageStyle={styles.matchProfileImage}
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
}

MatchFoundComponent.propTypes = {
  skipMatch: func.isRequired,
  foundMatch: object.isRequired
};
