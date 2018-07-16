import React from 'react';
import { View, Text } from 'react-native';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles';
import Header from '../../components/common/Header';
import Loader from '../../components/common/Loader';
import ForgotPasswordForm from '../../components/login/ForgotPasswordForm';
import { resetPassword } from '../../actions/userActions';

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { resetPassword } = this.props;
    const emailValue = values.toJS().email;
    return resetPassword(emailValue);
  }

  render() {
    const { message, isLoading } = this.props;
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <ForgotPasswordForm
          containerStyle={isLoading ?
            [styles.form, styles.disabledForm] : [styles.form]}
          onSubmit={this.handleSubmit}
        />
        {message && <Text style={styles.message}>{message}</Text>}
        {isLoading && <Loader />}
      </View>
    );
  }
}

ForgotPasswordScreen.propTypes = {
  resetPassword: func.isRequired,
  message: string,
  isLoading: bool.isRequired
};

const mapDispatch = dispatch => ({
  resetPassword: email => dispatch(resetPassword(email))
});

const mapStateToProps = state => ({
  isLoading: state.getIn(['user', 'isLoading']),
  message: state.getIn(['user', 'resetMessage'])
});

export default connect(mapStateToProps, mapDispatch)(ForgotPasswordScreen);
