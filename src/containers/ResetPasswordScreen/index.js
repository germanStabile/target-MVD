import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Header from '../../components/common/Header';
import ResetPasswordForm from '../../components/login/ResetPasswordForm';

class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('handle submit tapped');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <ResetPasswordForm
          containerStyle={[styles.form]}
          onSubmit={this.handleSubmit}
        />
      </View>
    );
  }
}

export default ResetPasswordScreen;
