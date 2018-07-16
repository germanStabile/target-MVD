import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';

import { sessionService } from 'redux-react-native-session';
import styles from './styles';
import Header from '../../components/common/Header';
import ResetPasswordForm from '../../components/login/ResetPasswordForm';
import { editResetPassword } from '../../actions/userActions';
import Loader from '../../components/common/Loader';
import { passwordResetSuccess } from '../../constants/messages';

class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.state = {
      successMessage: null
    };
  }

  goToLogin() {
    const { navigator } = this.props;
    navigator.push({
      screen: 'target.LoginScreen',
      navigatorStyle: {
        navBarHidden: true
      }
    });
  }

  handleSubmit(values) {
    const { editResetPassword } = this.props;
    return editResetPassword(values.toJS()).then(() => {
      // deleting session to avoid issues on next runs
      // if the user doesn't log in immediately
      sessionService.deleteSession();
      this.setState({
        successMessage: passwordResetSuccess
      });

      // give some time to the user to read the success message before pushing login screen
      setTimeout(() => {
        this.setState({
          successMessage: null,
        });
        this.goToLogin();
      }, 2000);
    });
  }

  render() {
    const { isLoading } = this.props;
    const { successMessage } = this.state;
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <ResetPasswordForm
          containerStyle={[styles.form, isLoading ? styles.disabledForm : null]}
          onSubmit={this.handleSubmit}
        />
        {isLoading && <Loader />}
        {successMessage && <Text>{successMessage}</Text>}
        <View style={styles.divider} />
        <TouchableOpacity onPress={this.goToLogin} style={styles.signIn}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ResetPasswordScreen.propTypes = {
  editResetPassword: func.isRequired,
  isLoading: bool.isRequired,
  navigator: object.isRequired
};

const mapDispatch = dispatch => ({
  editResetPassword: email => dispatch(editResetPassword(email))
});

const mapStateToProps = state => ({
  isLoading: state.getIn(['user', 'isLoading']),
});

export default connect(mapStateToProps, mapDispatch)(ResetPasswordScreen);
