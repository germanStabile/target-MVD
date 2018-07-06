import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Header from '../../components/common/Header';
import LoginForm from '../../components/login/LoginForm';

class LoginScreen extends React.Component {

  constructor() {
    super();
    this.onSignUpButtonPressed = this.onSignUpButtonPressed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}/>
        <View style={styles.formContainer}>
          <LoginForm onSubmit={this.handleSubmit} containerStyle={[styles.form]}/>
          <Text style={styles.forgotPlaceholder}>Forgot your password?</Text>
          <Text style={styles.facebookPlaceholder}>CONNECT WITH FACEBOOK</Text>
          <View style={styles.divider}/>
          <TouchableOpacity onPress={this.onSignUpButtonPressed} style={styles.signUp}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleSubmit() {
    console.log("login handle submit tapped");
  }

  onSignUpButtonPressed() {
    this.props.navigator.push({
      screen:"target.CreateAccountScreen",
      navigatorStyle: {
          navBarHidden: true
      }
    });
  }
}

export default LoginScreen;
