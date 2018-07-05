import React from 'react';
import { View, Text } from 'react-native';
import { sessionService } from 'redux-react-native-session';

class LoggedInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "" }
    sessionService.loadSession().then(currentSession => {
      this.setState({ username: currentSession.uid })
    }).catch(error => {
      this.setState({ username: "no user name found"})
    })

  }

  render () {
    return (
      <View>
        <Text>This is a dummy screen to show the logged in username</Text>
        <Text>{this.state.username}</Text>
      </View>
    );
  }
}

export default LoggedInScreen;
