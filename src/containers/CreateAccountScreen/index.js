import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import CreateAccountForm from '../../components/login/CreateAccountForm';
import styles from './styles';
import Header from '../../components/common/Header';

class CreateAccountScreen extends React.Component {

  constructor() {
    super();

    this.state = { isLoading: false }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const isLoading = this.state.isLoading
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView pointerEvents={isLoading? "none" : "auto"}>
          <Header style={styles.header}/>
          <CreateAccountForm onSubmit={this.handleSubmit} fieldsDisabled={!isLoading}
            containerStyle={isLoading ? [styles.disabledForm]: []}/>
        </KeyboardAwareScrollView>
        <ActivityIndicator style={isLoading ? styles.activityLoading : styles.hidden } size='large' color='black' animating={isLoading}/>
      </View>
    );
  }

  handleSubmit = values => {
    Alert.alert("Submit tapped", JSON.stringify(values));
    this.setState({ isLoading: true });
  }

}

export default CreateAccountScreen;
