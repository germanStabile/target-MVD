import React from 'react';
import {View, Text, Alert} from 'react-native';

import CreateAccountForm from '../../components/login/CreateAccountForm';
import styles from './styles';

class CreateAccountScreen extends React.Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <CreateAccountForm onSubmit={this.handleSubmit}/>
      </View>
    );
  }

  handleSubmit() {
    Alert.alert("Submit tapped", "awesome right?")
  }

}

export default CreateAccountScreen;
