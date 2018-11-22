import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import styles from './styles.js';

export default class MatchFoundComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skipMatch } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true} >
        <View style={styles.outerModal}>
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={this.skipMatch}
              style={styles.skipMatch}
            >
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

MatchFoundComponent.propTypes = {
  skipMatch: func.isRequired,
};
