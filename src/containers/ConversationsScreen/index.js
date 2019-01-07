import React from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import { func, bool, array, object } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import Loader from '../../components/common/Loader';
import NavHeader from '../../components/common/NavHeader';
import IconButton from '../../components/common/IconButton';
import { getConversations } from '../../actions/conversationActions';
import ConversationListItem from '../../components/conversations/ConversationListItem';
import { profileIcon, mapIcon } from '../../image';

class ConversationsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.onMatchPressed = this.onMatchPressed.bind(this);
    this.profileButton = this.profileButton.bind(this);
    this.mapButton = this.mapButton.bind(this);
    this.onProfilePress = this.onProfilePress.bind(this);
    this.onMapPress = this.onMapPress.bind(this);
  }

  componentDidMount() {
    const { getConversations } = this.props;

    return getConversations();
  }

  onMatchPressed(match) {
    const { user: {fullName}} = match;
    Alert.alert(
      'Tapped on conversation with user ' + fullName,
      'Chat is not implemented yet'
    );
  }

  onProfilePress() {
    const { navigator } = this.props;

    navigator.push({
      screen: 'target.EditAccountScreen'
    });
  }

  onMapPress() {
    const { navigator } = this.props;

    navigator.pop();
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

  mapButton() {
    return (
      <IconButton
        style={styles.rightBarButton}
        onPress={this.onMapPress}
        image={mapIcon}
      />
    );
  }

  render() {
    const { matches, isLoading } = this.props;
    return (
      <View style={styles.container}>
        <NavHeader
          title="Chat"
          leftChild={this.profileButton()}
          rightChild={this.mapButton()}
        />
        <View style={styles.divider} />
        {isLoading && <Loader/> }
        {matches &&
        <FlatList
          data={matches}
          keyExtractor={(item) => item.matchId.toString()}
          renderItem={( {item} ) =>
            <ConversationListItem item={item} onConversationTap={this.onMatchPressed} />
          }
        />
        }
      </View>
    );
  }
}

ConversationsScreen.propTypes = {
  navigator: object.isRequired,
  getConversations: func.isRequired,
  isLoading: bool.isRequired,
  matches: array
};

const mapStateToProps = state => ({
  isLoading: state.getIn(['conversations', 'isLoading']),
  matches: state.getIn(['conversations', 'matches'])
});

const mapDispatch = dispatch => ({
  getConversations: () => dispatch(getConversations())
});

export default connect(mapStateToProps, mapDispatch)(ConversationsScreen);
