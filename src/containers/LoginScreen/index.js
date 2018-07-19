import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { func, bool, object } from 'prop-types';

import styles from './styles';
import Header from '../../components/common/Header';
import Loader from '../../components/common/Loader';
import LoginForm from '../../components/login/LoginForm';
import { logIn } from '../../actions/userActions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.onSignUpButtonPressed = this.onSignUpButtonPressed.bind(this);
    this.onForgotPasswordButtonTapped = this.onForgotPasswordButtonTapped.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSignUpButtonPressed() {
    const { navigator } = this.props;
    navigator.push({
      screen: 'target.CreateAccountScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  onForgotPasswordButtonTapped() {
    const { navigator } = this.props;
    navigator.push({
      screen: 'target.ForgotPasswordScreen',
    });
  }

  handleSubmit(values) {
    const { logIn } = this.props;
    return logIn(values.toJS());
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container} pointerEvents={isLoading ? 'none' : 'auto'}>
        <Header style={styles.header} />
        <View style={styles.formContainer}>
          <LoginForm
            onSubmit={this.handleSubmit}
            containerStyle={isLoading ? [styles.form, styles.disabledForm] : [styles.form]}
          />
          <TouchableOpacity onPress={this.onForgotPasswordButtonTapped}>
            <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          </TouchableOpacity>
          <Text style={styles.facebookPlaceholder}>CONNECT WITH FACEBOOK</Text>
          <View style={styles.divider} />
          <TouchableOpacity onPress={this.onSignUpButtonPressed} style={styles.signUp}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        {isLoading && <Loader />}
      </View>
    );
  }
}

LoginScreen.propTypes = {
  logIn: func.isRequired,
  isLoading: bool.isRequired,
  navigator: object.isRequired
};

const mapDispatch = dispatch => ({
  logIn: user => dispatch(logIn(user))
});

const mapStateToProps = state => ({
  isLoading: state.getIn(['user', 'isLoading'])
});

export default connect(mapStateToProps, mapDispatch)(LoginScreen);
