import React from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import styles from './styles';
import Header from '../../components/common/Header';
import LoginForm from '../../components/login/LoginForm';
import { logIn } from '../../actions/userActions';
import { blackColor } from '../../constants/styleConstants';

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.onSignUpButtonPressed = this.onSignUpButtonPressed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container} pointerEvents={ isLoading ? 'none' : 'auto' }>
        <Header style={styles.header}/>
        <View style={styles.formContainer}>
          <LoginForm onSubmit={this.handleSubmit}
            containerStyle={isLoading ? [styles.form, styles.disabledForm] : [styles.form]}
            />
          <Text style={styles.forgotPlaceholder}>Forgot your password?</Text>
          <Text style={styles.facebookPlaceholder}>CONNECT WITH FACEBOOK</Text>
          <View style={styles.divider}/>
          <TouchableOpacity onPress={this.onSignUpButtonPressed} style={styles.signUp}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <ActivityIndicator
         style={isLoading ? styles.activityLoading : styles.hidden }
         size="large"
         color={blackColor}
         animating={isLoading}
         />
      </View>
    );
  }

  handleSubmit(values) {
    return this.props.logIn(values.toJS());
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

LoginScreen.propTypes = {
  logIn: func.isRequired,
  isLoading: bool.isRequired
};

const mapDispatch = dispatch => ({
  logIn: user => dispatch(logIn(user))
});

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.getIn(['user', 'isLoading'])
});

export default connect(mapStateToProps, mapDispatch)(LoginScreen);
