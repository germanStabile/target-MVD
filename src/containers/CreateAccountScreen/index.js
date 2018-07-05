import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { SubmissionError } from 'redux-form';

import CreateAccountForm from '../../components/login/CreateAccountForm';
import styles from './styles';
import Header from '../../components/common/Header';
import { signUp } from '../../actions/userActions';

class CreateAccountScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: false }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView pointerEvents={ isLoading? "none" : "auto" }>
          <Header style={styles.header}/>
          <CreateAccountForm onSubmit={this.handleSubmit}
            containerStyle={isLoading ? [styles.disabledForm]: []}/>
        </KeyboardAwareScrollView>
        <ActivityIndicator style={isLoading ? styles.activityLoading : styles.hidden } size='large' color='black' animating={isLoading}/>
      </View>
    );
  }

  handleSubmit = values => {
    this.setState({ isLoading: true });
    return this.props.signUp(values.toJS()).then(resp => {
      this.setState({ isLoading: false });
      this.props.navigator.push({screen:"target.LoggedInScreen"});
    }).catch(err => {
      this.setState({ isLoading: false });
      throw new SubmissionError({_error:err});
    });
  }
}

  CreateAccountScreen.propTypes = {
    signUp: func.isRequired
  };

  const mapDispatch = dispatch => ({
    signUp: user => dispatch(signUp(user))
  });

  export default connect(null, mapDispatch)(CreateAccountScreen);
