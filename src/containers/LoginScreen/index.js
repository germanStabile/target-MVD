import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redText: {
    color: 'red',
    fontSize: 20,
  }

});
