import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { object, func, bool, array } from 'prop-types';
import { connect } from 'react-redux';

import { getTopics, createTarget, getTargets } from '../../actions/targetActions';
import { newTargetImage, profileIcon, dialogIcon } from '../../image';
import styles from './styles';
import NavHeader from '../../components/common/NavHeader';
import MapComponent from '../../components/common/MapComponent';
import IconButton from '../../components/common/IconButton';
import CreateTargetForm from '../../components/target/CreateTargetForm';
import Loader from '../../components/common/Loader';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creatingTarget: false,
      circleRadius: null
    };
    this.onProfilePress = this.onProfilePress.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.onCreateTargetPress = this.onCreateTargetPress.bind(this);
    this.chatButton = this.chatButton.bind(this);
    this.cancelCreateTarget = this.cancelCreateTarget.bind(this);
    this.onAreaChange = this.onAreaChange.bind(this);
    this.onPositionChange = this.onPositionChange.bind(this);
    this.createTarget = this.createTarget.bind(this);
  }

  componentDidMount() {
    const { getTargets, getTopics } = this.props;
    getTopics().then(() => {
      getTargets();
    });
  }

  onProfilePress() {
    const { navigator } = this.props;
    navigator.push({
      screen: 'target.LoggedInScreen'
    });
  }

  onChatPress() {
  }

  onCreateTargetPress() {
    this.setState({
      creatingTarget: true
    });
  }

  onPositionChange(position) {
    this.setState({
      position
    });
  }

  onAreaChange(value) {
    this.setState({
      circleRadius: Number(value)
    });
  }

  createTarget(values) {
    const { position } = this.state;
    const { topics, createTarget } = this.props;
    const jsValues = values.toJS();
    const selectedTopic = jsValues.topic;

    const topicId = topics.filter(topic => topic.topic.label == selectedTopic)[0].topic.id;
    const target = {
      target: {
        title: jsValues.title,
        lat: Number(position.latitude.toFixed(4)),
        lng: Number(position.longitude.toFixed(4)),
        radius: Number(jsValues.areaLength),
        topic_id: topicId
      }
    };
    createTarget(target).then(() => {
      const { getTargets } = this.props;
      this.setState({
        creatingTarget: false,
        circleRadius: null,
        message: 'successfully created target!'
      });

      setTimeout(() => {
        getTargets();
        this.setState({
          message: null
        });
      }, 2000);
    }).catch(() => {
      Alert.alert(
        'Error creating target',
        'You have already created a target with this topic!'
      );
    });
  }

  cancelCreateTarget() {
    this.setState({
      creatingTarget: false,
      circleRadius: null
    });
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
    const { creatingTarget, circleRadius, message } = this.state;
    const { isLoading, topics } = this.props;

    return (
      <View style={styles.container}>
        <NavHeader
          title="Target Points"
          leftChild={this.profileButton()}
          rightChild={this.chatButton()}
        />
        <MapComponent
          mapStyle={[styles.map]}
          circleRadius={circleRadius}
          onPositionChange={this.onPositionChange}
          creatingTarget={creatingTarget}
        />
        {!creatingTarget &&
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.onCreateTargetPress}>
              <Image source={newTargetImage} style={styles.centeredImage} />
              <Text style={styles.footerText}>CREATE NEW TARGET</Text>
            </TouchableOpacity>
            {message && <Text style={styles.centeredText}>{message}</Text>}
          </View>
        }
        {creatingTarget &&
          <View style={styles.createTargetFooter}>
            <KeyboardAwareScrollView>
              <CreateTargetForm
                onSubmit={this.createTarget}
                topics={topics.map(topic => topic.topic)}
                onAreaChange={this.onAreaChange}
              />
              <View style={styles.divider} />
              <TouchableOpacity
                onPress={this.cancelCreateTarget}
                style={styles.cancelCreateTarget}
              >
                <Text style={styles.centeredText}>CANCEL</Text>
              </TouchableOpacity>
              {message && <Text style={styles.centeredText}>{message}</Text>}
            </KeyboardAwareScrollView>
          </View>
        }
        {isLoading && <Loader /> }
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigator: object.isRequired,
  getTopics: func.isRequired,
  createTarget: func.isRequired,
  getTargets: func.isRequired,
  isLoading: bool.isRequired,
  topics: array
};

const mapStateToProps = state => ({
  isLoading: state.getIn(['target', 'isLoading']),
  topics: state.getIn(['target', 'topics'])
});

const mapDispatch = dispatch => ({
  getTopics: () => dispatch(getTopics()),
  createTarget: target => dispatch(createTarget(target)),
  getTargets: () => dispatch(getTargets())
});

export default connect(mapStateToProps, mapDispatch)(HomeScreen);
