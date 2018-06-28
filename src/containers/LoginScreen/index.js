import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './styles';

class LoginScreen extends React.Component {

  constructor() {
    super();
    this.onSignUpButtonPressed = this.onSignUpButtonPressed.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.redText}>This is the login screen</Text>
        <Button title="Sign up" onPress={this.onSignUpButtonPressed}/>
      </View>
    );
  }

  onSignUpButtonPressed() {
    this.props.navigator.push({screen:"target.CreateAccountScreen"});
  }
}

export default LoginScreen;
