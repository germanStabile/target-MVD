import React from 'react';
import { View, Text, Button } from 'react-native';
import { sessionService } from 'redux-react-native-session';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { logOut } from '../../actions/userActions';
import styles from './styles';

class LoggedInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.logOutButtonTapped = this.logOutButtonTapped.bind(this);
    this.state = { username: '' }
    sessionService.loadSession().then(currentSession => {
      this.setState({ username: currentSession.uid })
    }).catch(error => {
      this.setState({ username: 'no user name found' })
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>This is a dummy screen to show the logged in username</Text>
        <Text>{this.state.username}</Text>
        <Button onPress={this.logOutButtonTapped} title='LOG OUT'/>
      </View>
    );
  }

  logOutButtonTapped() {
    this.props.logOut();
  }
}

LoggedInScreen.propTypes = {
  logOut: func.isRequired,
};

const mapDispatch = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(null, mapDispatch)(LoggedInScreen);
