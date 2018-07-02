import React from 'react';
import { View, Text, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import CreateAccountForm from '../../components/login/CreateAccountForm';
import styles from './styles';
import Header from '../../components/common/Header';

class CreateAccountScreen extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Header style={styles.header}/>
          <CreateAccountForm onSubmit={this.handleSubmit}/>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  handleSubmit = values => {
    Alert.alert("Submit tapped", JSON.stringify(values));
  }

}

export default CreateAccountScreen;
