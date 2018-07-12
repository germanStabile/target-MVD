import React from 'react';
import { View, Image, Text } from 'react-native';
import { object } from 'prop-types';

import { newTargetImage, profileIcon, dialogIcon } from '../../image';
import styles from './styles';
import NavHeader from '../../components/common/NavHeader';
import MapComponent from '../../components/common/MapComponent';
import IconButton from '../../components/common/IconButton';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onProfilePress = this.onProfilePress.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.chatButton = this.chatButton.bind(this);
  }

  onProfilePress() {
    const { navigator } = this.props;
    navigator.push({
      screen: 'target.LoggedInScreen'
    });
  }

  onChatPress() {
  }

  profileButton() {
    return (
      <IconButton
        style={styles.leftBarButton}
        onPress={this.onProfilePress}
        image={profileIcon}
      />
    );
  }

  chatButton() {
    return (
      <IconButton
        style={styles.rightBarButton}
        onPress={this.onChatPress}
        image={dialogIcon}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <NavHeader
          title="Target Points"
          leftChild={this.profileButton()}
          rightChild={this.chatButton()}
        />
        <MapComponent mapStyle={[styles.map]} />
        <View style={styles.footer}>
          <Image source={newTargetImage} />
          <Text style={styles.footerText}>CREATE NEW TARGET</Text>
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigator: object.isRequired
};

export default HomeScreen;
