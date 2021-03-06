import React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { object, func, bool, array } from 'prop-types';
import { connect } from 'react-redux';

import {
  getTopics,
  createTarget,
  getTargets,
  selectTarget,
  changeTargetCoords,
  deleteTarget,
  matchFound
} from '../../actions/targetActions';
import { newTargetImage, profileIcon, dialogIcon } from '../../image';
import styles from './styles';
import MatchFoundComponent from '../../components/target/MatchFoundComponent';
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
    this.onSkipMatch = this.onSkipMatch.bind(this);
    this.onProfilePress = this.onProfilePress.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.onCreateTargetPress = this.onCreateTargetPress.bind(this);
    this.chatButton = this.chatButton.bind(this);
    this.cancelCreateTarget = this.cancelCreateTarget.bind(this);
    this.onAreaChange = this.onAreaChange.bind(this);
    this.onPositionChange = this.onPositionChange.bind(this);
    this.createTarget = this.createTarget.bind(this);
    this.targetFormSubmit = this.targetFormSubmit.bind(this);
    this.targetFormFooter = this.targetFormFooter.bind(this);
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
      screen: 'target.EditAccountScreen'
    });
  }

  onChatPress() {
  }

  onSkipMatch() {
    const { matchFound } = this.props;
    matchFound(null);
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

  targetFormFooter() {
    const { topics, selectedTarget } = this.props;
    const { message } = this.state;
    const initialValues = selectedTarget ? {
      title: selectedTarget.target.title,
      areaLength: selectedTarget.target.radius.toString(),
    } : {};
    return (
      <View style={styles.createTargetFooter}>
        <KeyboardAwareScrollView>
          <CreateTargetForm
            initialValues={initialValues}
            onSubmit={this.targetFormSubmit}
            topics={topics.map(topic => topic.topic)}
            onAreaChange={this.onAreaChange}
            selectedTarget={selectedTarget}
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
    );
  }

  targetFormSubmit(values) {
    const { selectedTarget } = this.props;

    if (selectedTarget == null) {
      this.createTarget(values);
      return;
    }

    const { deleteTarget, getTargets, selectTarget } = this.props;
    const { id } = selectedTarget.target;

    deleteTarget(id).then(() => {
      selectTarget(null)
      this.setState({
        message: 'successfully deleted target'
      });

      setTimeout(() => {
        getTargets();
        this.setState({
          message: null
        });
      }, 2000);
    }).catch(() => {
      Alert.alert(
        'Error deleting target',
        'Try again!'
      );
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
    const { selectTarget, changeTargetCoords } = this.props;
    selectTarget(null);
    changeTargetCoords(null);
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
    const { isLoading, selectedTarget, foundMatch } = this.props;

    return (
      <View style={styles.container}>
        <NavHeader
          title="Target Points"
          leftChild={this.profileButton()}
          rightChild={this.chatButton()}
        />
        {foundMatch &&
          <MatchFoundComponent
            foundMatch={foundMatch}
            skipMatch={this.onSkipMatch}
          />
        }
        <MapComponent
          mapStyle={[styles.map]}
          circleRadius={circleRadius}
          onPositionChange={this.onPositionChange}
          creatingTarget={creatingTarget}
        />
        {!creatingTarget && !selectedTarget &&
          <View style={styles.footer}>
            <TouchableOpacity onPress={this.onCreateTargetPress}>
              <Image source={newTargetImage} style={styles.centeredImage} />
              <Text style={styles.footerText}>CREATE NEW TARGET</Text>
            </TouchableOpacity>
            {message && <Text style={styles.centeredText}>{message}</Text>}
          </View>
        }
        {(creatingTarget || selectedTarget) && this.targetFormFooter(creatingTarget) }
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
  selectTarget: func.isRequired,
  changeTargetCoords: func.isRequired,
  deleteTarget: func.isRequired,
  matchFound: func.isRequired,
  foundMatch: object,
  topics: array,
  selectedTarget: object
};

const mapStateToProps = state => ({
  isLoading: state.getIn(['target', 'isLoading']),
  topics: state.getIn(['target', 'topics']),
  selectedTarget: state.getIn(['target', 'selectedTarget']),
  foundMatch: state.getIn(['target', 'foundMatch'])
});

const mapDispatch = dispatch => ({
  getTopics: () => dispatch(getTopics()),
  createTarget: target => dispatch(createTarget(target)),
  getTargets: () => dispatch(getTargets()),
  selectTarget: target => dispatch(selectTarget(target)),
  changeTargetCoords: coords => dispatch(changeTargetCoords(coords)),
  deleteTarget: targetId => dispatch(deleteTarget(targetId)),
  matchFound: match => dispatch(matchFound(match))
});

export default connect(mapStateToProps, mapDispatch)(HomeScreen);
